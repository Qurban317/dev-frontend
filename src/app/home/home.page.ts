import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api/api.service';
import { CommonService } from 'src/services/common/common.service';
import { Pattern } from 'src/shared/constants/pattern';

interface ICategory {
  category_id: number;
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public form: FormGroup | any;
  public categories: ICategory[] = [];

  constructor(
    private fb: FormBuilder,
    protected router: Router,
    private commonService: CommonService,
    private api: ApiService
  ) {
    this.getCategories();
  }
  /**
   * @method ngOnInit
   * @description angular life cycle event call onLoad page
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      first_name: ['', { validators: [Validators.minLength(1)] }],
      last_name: ['', { validators: [Validators.minLength(1)] }],
      email: [
        '',
        {
          validators: Validators.compose([
            Validators.pattern(Pattern.EMAIL_REGEX),
          ]),
        },
      ],
      phone_number: [
        '',
        {
          validators: [
            Validators.minLength(10),
            Validators.pattern(
              /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s.]{1}[/0-9]{3}[-\s.]{1}[/0-9]{4}|^[+]*[0-9]{10}/
            ),
          ],
        },
      ],
      company_name: [
        '',
        {
          validators: [
            Validators.pattern(Pattern.ALPHANUMERIC),
            Validators.maxLength(200),
          ],
        },
      ],
      job_title: [
        '',
        {
          validators: [
            Validators.pattern(Pattern.ALPHANUMERIC),
            Validators.maxLength(200),
          ],
        },
      ],
      category_id: [
        '',
        {
          validators: [
            Validators.minLength(5),
            Validators.maxLength(5),
            Validators.pattern(Pattern.NUMERIC),
          ],
        },
      ],
    });
  }

  /**
   * onSubmit
   */
  public onSubmit() {

    if (this.form.valid) {
      console.log(this.form.value);
      const body = {
        ...this.form.value,
        category_id: parseInt(this.form.value.category_id),
      };
      this.api.httpPost('vendor/register', body).subscribe((data: any) => {
        console.log('DATA :: ', data);

        if (data.code === 201) {
        } else {
        }
      });
    }
  }

  /**
   * onSubmit
   */
  public getCategories() {
    this.api.httpGet('category/all').subscribe((resp: any) => {
      console.log('DATA :: ', resp);

      if (resp.code === 200) {
        this.categories = resp.data;
      } else {
      }
    });
  }
}
