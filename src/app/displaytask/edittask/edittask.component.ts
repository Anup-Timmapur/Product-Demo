import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from '../task';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  id:string='';
  title:string='';
  status:string='';

  constructor(private _act: ActivatedRoute , private _data: TaskdataService) { }

  ngOnInit() {

    this.id=this._act.snapshot.params["Id"];
    this._data.getTaskById(this.id).subscribe(
      (data:Tasks[])=>{

        this.title=data[0].Title;
        this.status=data[0].Status;
        console.log(this.title);
        console.log(this.status);
      }
    );
  }

  onTaskEdit(f){

    this._data.editTask(f.value).subscribe(
      (data:any)=>{
        alert('updated');

      }
    );
  }

}
