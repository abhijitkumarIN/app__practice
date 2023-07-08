// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { PostService } from 'src/app/services/post.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  posts:any = null ;

  constructor(private service:PostService) {}

  ngOnInit() {
      this.service.getPosts()
        .subscribe((response:any) => {
          this.posts = response?.products;
        });
  }
}
