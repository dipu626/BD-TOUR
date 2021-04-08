import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// import user-service
import { UserServiceService } from '../../user-services/user-service.service';

import { UserInterface } from '../../user-model/user-interface';

import {MatTableDataSource} from '@angular/material/table/table-data-source';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {


  userList$: Observable<UserInterface[]>;
  bangladeshi$: any;
  
  displayedColumns: string[] = ['name', 'email', 'phone', 'city', 'country'];
  constructor(private _userService: UserServiceService) { }

  onClick(event) {

  }
  ngOnInit(): void {
    console.log("OK");
    this.userList$ = this._userService.getUserList();
    this.userList$.subscribe(
      res => {
        console.log("Get method successfull");
        console.log(res);
        
      },
      error => {
        console.log("Get method unsuccessfull. Error");
        
      },
      () => {
        console.log("GET Method completed");
        
      }
      )
      /* 
      this.bangladeshi$ = this.userList$.pipe(
        map(person => person.filter(per => per.country === "Bangladesh" && per.city === "Dhaka"))
      );
      this.bangladeshi$.subscribe(
        res => {
          console.log("Successful");
        },
        error => {
          console.log("Unsuccessful");
        },
        () => {
          console.log("Completed");
        }
      ); */
    }


}
