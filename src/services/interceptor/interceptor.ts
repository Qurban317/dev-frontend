import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpHeaders
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { CommonService } from "../common/common.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
	public headers: HttpHeaders = new HttpHeaders();

	constructor(public commonService: CommonService, private router: Router) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		this.commonService.showSpinner();
		req = req.clone({ withCredentials: true, headers: this.headers });

		return next
			.handle(req)
			.pipe(
				map((event: HttpEvent<any>) => {
					return event;
				})
			)
			.pipe(
				catchError((error) => {
					this.commonService.hideSpinner();
					console.log(error);

					if (error.status === 401 || error.status === 0) {
						this.commonService.deleteAllLocalStorage();
						void this.router.navigate(["/login"]);
					}
					return of(error);
				}) as any
			);
	}

	/**
	 * @method setHeaders
	 * @description this method is used to set the headers
	 */
	private setHeaders() {
		// const access = this.commonService.getLocalStorage("accesstoken");
		const access = "";
		this.headers = new HttpHeaders();
		// this.headers = this.headers.append('Accept', 'application/json');

		if (access && access !== "") {
			// this.headers = this.headers.append('token', access);
		}
	}

	/**
	 * @method actionOnError
	 * @description this method used to make necessary action based on error code
	 */
	private actionOnError(error: number, message: string) {
		if (error === 2) {
			this.commonService.deleteAllLocalStorage();
			void this.router.navigate(["/login"]);
			this.commonService.showErrorToaster(message, "Logout");
		} else if (error === 1) {
			// this.commonService.errorMessage = message;
			// this.commonService.showErrorToaster(message, 'Error');
		}
	}
	private logout() {
		this.commonService.deleteAllLocalStorage();
		void this.router.navigate(["/login"]);
		this.commonService.showErrorToaster("Session expired", "Logout");
	}
}
