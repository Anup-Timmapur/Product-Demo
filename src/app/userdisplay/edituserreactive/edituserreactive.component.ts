import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { CheckEmail } from '../checkemail';
import { UserdataService } from '../userdata.service';
import { User } from '../user';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edituserreactive',
  templateUrl: './edituserreactive.component.html',
  styleUrls: ['./edituserreactive.component.css']
})
export class EdituserreactiveComponent implements OnInit {
  signup: any;
  email: any;
  displayuser: any;

  constructor(private _userdata: UserdataService, private fb: FormBuilder, private _router: Router, private _actroute: ActivatedRoute) { }

  ngOnInit() {
this.email = this._actroute.snapshot.params['user_email'];
this._userdata.getUserByEmail(this.email).subscribe((data: User[]) => {
  this.displayuser = data[0];
  this.signup.patchValue({
    user_email: this.displayuser.user_email,
    user_name: this.displayuser.user_name,
    user_mobile_no: this.displayuser.user_mobile_no,
    user_password_group: {
      user_password : this.displayuser.user_password,
      user_confirm_password : this.displayuser.user_password


    }
  });
});

this.signup = this.fb.group({
      user_email: new FormControl(null, [Validators.required,Validators.email],CheckEmail.emailValidator(this._userdata)),
      user_name: new FormControl(null, Validators.required),
      user_password_group: new FormGroup(
        {
          user_password: new FormControl(null, Validators.required),
          user_confirm_password: new FormControl(null, Validators.required)
        },
        this.matchPassword.bind(this)
      ),
      user_mobile_no: new FormControl()
    });
  }

  matchPassword(x: AbstractControl): { [y: string]: boolean } {
    const password = x.get('user_password').value;
    const cnfmpassword = x.get('user_confirm_password').value;
    if (password != cnfmpassword) {
      return { passwordNotMatched: true };
    }
    return null;
  }

  onUserEdit() {
    this._userdata
      .editUser(
        new User(
          this.signup.value.user_email,
          this.signup.value.user_name,
          this.signup.value.user_password_group.user_password,
          this.signup.value.user_mobile_no
        )
      )
      .subscribe(
        (data: any) => {
          this._router.navigate(['/users']);
        }
      );
  }

}
