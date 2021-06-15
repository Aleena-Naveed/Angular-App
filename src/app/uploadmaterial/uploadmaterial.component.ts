import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-uploadmaterial',
  templateUrl: './uploadmaterial.component.html',
  styleUrls: ['./uploadmaterial.component.css']
})
export class UploadmaterialComponent implements OnInit {

  formData: FormData;
  title: string;
  description: string;
  constructor() {
    this.formData = new FormData();
    this.title = '';
    this.description = '';
  }

  ngOnInit(): void {
  }

  uploadmaterial(event: any) {
    this.formData = new FormData();
    const file = event.target.files[0]
    this.formData.append('file', file);
    console.log(file);
  }

  handelSubmit(event: any) {
    event.preventDefault();
    this.formData.append('description', this.description);
    this.formData.append('title', this.title);

    axios.post("http://localhost:3000/users/upload", this.formData, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    })
      .then(res => console.log(res))
  }

}
