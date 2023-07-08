import { Component } from '@angular/core';
import { FormControl , FormGroup , FormArrayName , Validators} from '@angular/forms';
@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent {

  loginForm = new FormGroup({
  user: new FormControl('',[Validators.required]),
  phone : new FormControl(''),
})
ngOnInit(){
  console.log(" it is your name == ngon itnit ")
}

loginUser(){
console.log(this.loginForm.value)
}
get user(){
  return this.loginForm.get('user')
}
}
