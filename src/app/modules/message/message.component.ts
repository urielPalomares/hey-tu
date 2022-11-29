import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from './countries.mock' ;

interface IForm {
  code: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  countriesOptions = countries;
  form = new FormGroup({
    country: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  constructor(private router: Router) { }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.invalid) return;

    const values = {
      code: this.form.get('country')?.value,
      phone: this.form.get('phone')?.value,
      message: this.form.get('message')?.value
    }
    this.send(values);
  }

  onReset(): void {
    this.form.reset();
  }

  send(values: IForm) {
    window.open(`https://api.whatsapp.com/send?phone=${values.code}${values.phone}&text=${values.message}`);
    this.onReset();
    this.router.navigate(['/']);
  }

}
