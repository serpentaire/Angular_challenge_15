import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private _fb: FormBuilder) { }
    formGroup = this._fb.group({
      credentials: new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    }),
    username: new FormControl(''),
    adresse: new FormGroup({
      rue: new FormControl(''),
      codepostal: new FormControl(''),
      ville: new FormControl('')
    }),
  })

  model: users= new users("","","","","","")

  users: any = [];

  validate() {
    this.users.push(this.formGroup.value)
    console.log(this.users);
  }

}
export class users {
  constructor(
  public username: string,
  public email: string,
  public password: string,
  public rue: string,
  public codepostal: string,
  public ville: string
  ) {}

}
