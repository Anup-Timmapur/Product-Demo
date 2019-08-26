import { Component, OnInit } from '@angular/core';
import { TaskdataService } from '../taskdata.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Tasks } from '../task';

@Component({
  selector: 'app-addtaskreactive',
  templateUrl: './addtaskreactive.component.html',
  styleUrls: ['./addtaskreactive.component.css']
})
export class AddtaskreactiveComponent implements OnInit {

  constructor(private _data:TaskdataService,private fb:FormBuilder) { }
  signup:FormGroup;


  ngOnInit() {
this.signup=this.fb.group({
  id:new FormControl(null),
  title:new FormControl(null),
  status:new FormControl(null)
});


  }


  onAddTaskReactive(){
    this._data.addTask(new Tasks(
      this.signup.value.id,
      this.signup.value.title,
      this.signup.value.status
    )
    ).subscribe((x:any)=>{
      alert('Recorded reactive');
    });

  }
}
