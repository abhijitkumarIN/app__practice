import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArrayName,
  Validators,
} from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { UtilsFunctionsService } from 'src/app/utils.functions.service';
@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css'],
})
export class ApplyComponent {
  isLoading: boolean = false;
  authResponseMessage:string|null|any = null
  constructor(
    private auth_api: PostService,
    private storageProvider: UtilsFunctionsService
  ) {}
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });
  loginUser() {
    this.isLoading = true;
    this.auth_api
      .post_auth('/login/', this.loginForm.value)
      .subscribe((response: any ) => {
        if (response?.status) {
          this.storageProvider.setLocalStorage('AUTH_TOKEN', response.token);
          this.storageProvider.setLocalStorage('AUTH', response.user);
          this.isLoading = false;
          console.log(response ," === > ")
          alert("you 've logged in ")
          // redirect with  popup
        }
      } , (error:any)=>{
          this.isLoading = false;
          this.authResponseMessage= error?.error.message
          alert(" 😂😂😂 ")
          setTimeout(()=>{
            this.authResponseMessage=null
          },5000)
      })
  }
  get user() {
    return this.loginForm.get('user');
  }
}
