import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CrudService {
users:any=[];
  constructor() { }
getallusers():Observable<any>{
  this.users=[{name:"Rani More",age:25,City:"Pune"},
  {name:"Rahul More",age:24,City:"Indapur"},
  {name:"Vidya More",age:27,City:"Mumbai"},
  {name:"Varsha More",age:26,City:"Delhi"}]
  return this.users;
}


}
