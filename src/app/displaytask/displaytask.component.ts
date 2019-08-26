import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from './task';
import { TaskdataService } from './taskdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaytask',
  templateUrl: './displaytask.component.html',
  styleUrls: ['./displaytask.component.css']
})
export class DisplaytaskComponent implements OnInit {
  arr:Tasks[]=[];
  item:string='';

  constructor(private _data:TaskdataService,private _router:Router) { }

  ngOnInit() {

    this._data.getAllTasks().subscribe(
      (data:Tasks[])=>{
        this.arr=data;
      }
    );

  }


  onTaskDelete(item:Tasks){
    this._data.deleteTask(item.Id).subscribe(
      (data:any)=>{
        this.arr.splice(this.arr.indexOf(item),1);
        alert('deleted');
      }
    );
  }
  onTaskEdit(item:Tasks){
    this._router.navigate(['/edittask', item.Id]);
  }

  onTaskEditreactive(item:Tasks){
    this._router.navigate(['/edittaskreactive', item.Id]);
  }


  onSearch(value) {
    if (value != "") {
      this.arr = this.arr.filter(x => x.Id.indexOf(value) != -1);
    } else {
      this._data.getAllTasks().subscribe(
        (data: Tasks[]) => {
          this.arr = data;
        },
        function(error) {
          alert(error);
        },
        function() {}
      );
    }
  }
}
