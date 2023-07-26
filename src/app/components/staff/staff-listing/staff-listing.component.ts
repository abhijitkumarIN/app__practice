import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { UtilsFunctionsService } from 'src/app/utils.functions.service';
interface data_ {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-staff-listing',
  templateUrl: './staff-listing.component.html',
  styleUrls: ['./staff-listing.component.css'],
})
export class StaffListingComponent {
  isLoading: boolean = false;
  title: string = 'title right now ';
  arr: Array<any> = [];
  arr_m = 0;
  arr__post: Array<data_> = [];
  get_api() {
    this.api_action.getPosts().subscribe((response: any) => {
      this.arr__post = response;
    });
  }
  constructor(private api_action: PostService,
    private storageProvider:UtilsFunctionsService) {
    this.get_api();
  }
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(12)]),
  });

  getControl(name: any): AbstractControl | null {
    return this.registerForm.get(name);
  }

  registerFn() {
    var data = this.registerForm.value || null;
    if (data?.name) {
      this.arr.push({ value: data?.name, index: this.arr_m });
      this.arr_m++;
    }
  }
  remove_(data: any) {
    var filter__ = this.arr.filter((i) => i?.index !== data);
    this.arr = filter__;
    console.log(filter__, '', data);
  }

  post_api() {
    this.isLoading = true;
    this.api_action
      .post_auth('/login/', {
        username: 'prashantpaliwal203+Admin@gmail.com',
        password: 'Password@123',
      })
      .subscribe((response: any) => {
        if (response?.status) {
          this.storageProvider.setLocalStorage('AUTH_TOKEN', response.token)
          this.storageProvider.setLocalStorage('AUTH', response.user)
          this.isLoading=false
          // redirect with laert popup

        }else{
          this.isLoading=false

        }
        // confirm(response?.title);
        // this.isLoading = false;
        // // console.log(response ,"  ---  it is your response ---  ")
        // // // this.get_api()
        // // alert(" you 've logged in ")
        // if (response?.status) {

        // } else {
        //   alert(response?.message);
        // }
      });
  }
}
