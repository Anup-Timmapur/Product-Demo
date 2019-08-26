import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
id:string;
  constructor(private _actroute:ActivatedRoute ) { }

  ngOnInit() {
    // tslint:disable-next-line: comment-format
    //this.id=this._actroute.snapshot.queryParams["id"];
    this._actroute.queryParams.subscribe(
      (x)=>{
        this.id=x.id;
      }
    );

  }

}
