import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [];
  showSubmitobj: boolean = false;
  userForm: FormGroup;

  public isMobileLayout = false;

  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({
      name: new FormControl("", [Validators.required]),
      phone: new FormControl("", [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
      ])
    });
  }

  send(values: any) {
    this.items.push(values);
    console.log("item is ", this.items)
    console.log(values);
    this.showSubmitobj = true;
  }

  edit() {
    var lastItem = this.items.pop();
    console.log("lastitem is ", lastItem)
    console.log("final array is ", this.items)
    this.userForm.reset();
  }

  //Mobile view
  ngOnInit() {
    window.onresize = () => this.isMobileLayout = window.innerWidth <= 991;
  }

}
