import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
Allusers:any=[];
  constructor(public crudservice:CrudService) { }

  ngOnInit() {
this.Allusers=this.crudservice.getallusers();
  }

}
