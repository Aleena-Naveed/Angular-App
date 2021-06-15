import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-ratematerial',
  templateUrl: './ratematerial.component.html',
  styleUrls: ['./ratematerial.component.css']
})
export class RatematerialComponent implements OnInit {

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
  update(id: string, rating: string) {
    const data = { id: id, rating: rating }
    axios.patch("http://localhost:3000/users/rate", data, {
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
