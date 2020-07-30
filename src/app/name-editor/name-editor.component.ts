import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/entity/user';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  firstName = new FormControl('', Validators.required);
  email = new FormControl('', Validators.email);
  mobile = new FormControl('', Validators.minLength(10));

  //  updateName() {
  //  this.firstName.setValue('JohnDoe');
  // }
  //  updateEmail() {
  //  this.email.setValue('');
  // }
  //  updateMobile() {
  //  this.mobile.setValue('012-345-6789'); }


  user = new User('Thabo', 'Dixon@gmail.com', '0123456789');

  constructor(private http: HttpClient) {

  }

  public show: boolean = true;
  public showmail: boolean = false;
  public showmobile: boolean = false;
  public showstart: boolean = false;
  public buttonName: any = 'Show';
  toggle() {
    // hide form element onclick
    this.show = !this.show;
    this.showmail = !this.showmail;
    // post to node
  this.http.post('mongodb+srv://admin-dixon:TheGerman88@cluster0.apw55.mongodb.net/usersDB', this.user)
    // success message to user
    alert("success!");
  }
  toggleEmail() {
    // hide form element onclick
    this.showmail = !this.showmail;
    this.showmobile = !this.showmobile;
    // post to node
this.http.post('mongodb+srv://admin-dixon:TheGerman88@cluster0.apw55.mongodb.net/usersDB', this.user)
    // success message to user
    alert("success!");
  }
  toggleNumber() {
    // hide form element onclick
    this.showmobile = !this.showmobile;
    this.showstart = !this.showstart;
    // post to node
    this.http.post('mongodb+srv://admin-dixon:TheGerman88@cluster0.apw55.mongodb.net/usersDB', this.user)
    // success message to user
    alert("success!");
  }
  toggleProfile() {
    // hide form element onclick
    this.showstart = !this.showstart;
    // Show initial element form element onclick
    this.show = !this.show;

  }


}
