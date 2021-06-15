import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-deletematerial',
  templateUrl: './deletematerial.component.html',
  styleUrls: ['./deletematerial.component.css']
})
export class DeletematerialComponent implements OnInit {

  records: any[];
  success: boolean;
  constructor() {
    this.records = [];
    this.success = false;
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    axios.get("http://localhost:3000/users/getList", {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    })
      .then(res => {
        if (res.data.success) {
          this.success = true
          this.records = res.data.rec
        }
      })
  }

  handleDelete(id: string) {
    axios.delete("http://localhost:3000/users/delete/" + id, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    })
    .then(res => {
      if (res.data.success) {
         this.getList()
       }
    })

  }

}
