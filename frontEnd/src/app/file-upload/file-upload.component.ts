import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor(private _fromBuilder: FormBuilder,
              private _http: HttpClient
    ) { }

  URL:string = "http://localhost:3000/file";
  //URL:string = "http://localhost:3000/multipleFiles";

  fileForm = this._fromBuilder.group({
    file: ['']
  })

  get file() {
    return this.fileForm.get("file");
  }

  multiple:boolean = false;
  color = null;
  accept = null;
  image:File;

  ngOnInit(): void {
    console.log(this.fileForm.value);
    
    this.multiple = false;
    this.color = null;
  }
  
  
  selectFile(event) {
    // console.log("selectFile");
    if (this.fileForm.value.file) {
      this.image = this.fileForm.value.file;
      console.log(this.image);
    }
  }

  fileSelected:boolean = true;
  uploadFile() {
    const formData = new FormData();
    if (this.fileForm.value.file) {
      formData.append("file", this.fileForm.value.file);
      this._http.post<any>(this.URL, formData)
      .subscribe(
        res => console.log(res),
        error => console.log(error),
        () => console.log("Completed")
      )
    }
    else {
      this.fileSelected = false;
    }
  }
  clear(event) {
    console.log(event);
    
  }

}
