// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  // binding
  demo = new DataTransfer();
  //
  // date pciker
  posts: any = null;
  constructor(private service: PostService) {}
  ngOnInit() {
    this.service.getPosts().subscribe((response: any) => {
      this.posts = response?.products ?? [];

    });
    setTimeout(() => {
      this.posts = [];
    }, 10000);
  }
  myFucntion(e:string){
    console.log(e ,"value")
  }

}
