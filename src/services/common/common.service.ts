import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public lastYear = parseInt(moment().subtract(102, 'years').format('YYYY'));
  // private apiKey = environment.cloudSpongeKey; // Replace with your actual API key

  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService) {}

  /**
   * @method showSuccessToaster
   * @param title: string
   * @param message: string
   * @description this method shows the success toast
   */
  public showSuccessToaster(message: string, title: string) {
    this.toastr.success(message, title);
  }

  /**
   * @method showErrorToaster
   * @param title: string
   * @param message: string
   * @description this method shows the error toast
   */
  public showErrorToaster(message: string, title: string) {
    this.toastr.error(message, title);
  }

  /**
   * @method showSpinner
   * @description this method shows the spinner
   */
  public showSpinner() {
    void this.spinner.show();
  }

  /**
   * @method hideSpinner
   * @description this method shows the spinner
   */
  public hideSpinner() {
    void this.spinner.hide();
  }

  /**
   * @method deleteAllLocalStorage
   * @description this method get localStorage
   */
  public deleteAllLocalStorage() {
    return localStorage.clear();
  }

  get makeYear() {
    let dobYears = [];
    let curYear = parseInt(moment().format('YYYY'));
    for (curYear; curYear > this.lastYear; curYear--) {
      dobYears.push(curYear);
    }
    return dobYears;
  }


  public convertUnixToDatePicker(unixTimestamp: number) {
    return moment(unixTimestamp).format('MM/DD/YY HH:mm:ss');
  }

  /**
   * @method dateMessageFormat
   * @param datetimestamp: string
   * @description this method gets the time format
   */
  public dateMessageFormat(datetimestamp: number) {
    const tDate = moment(datetimestamp).utc().format('DD-MM-YYYY HH:mm');
    const mDate = moment(tDate, 'DD-MM-YYYY HH:mm').calendar(null, {
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: 'dddd DD',
      sameElse: 'dddd DD',
    });
  
    // Append the day of the month with the appropriate suffix
    const formattedDate = moment(tDate, 'DD-MM-YYYY HH:mm').format(`dddd Do`);  
    return formattedDate;
  }
  /**
   * @method timeMessageFormat
   * @param datetimestamp: string
   * @description this method gets the time format
   */
  public timeMessageFormat(datetimestamp: number) {
    const formattedTime = moment(datetimestamp).format('h:mm A');
    return formattedTime;
  }  
}
