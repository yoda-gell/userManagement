import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-user-files',
  templateUrl: './user-file.component.html',
  styleUrls: ['./user-files.component.css']
})
export class UserFilesComponent implements OnInit {

  DJANGO_SERVER = 'http://127.0.0.1:8000'
  form: FormGroup|any  ;
  response:any;
  imageURL:any;

  constructor(private formBuilder: FormBuilder, private uploadService: UploadService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      profile: ['']
    });
  }

  onChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('profile').setValue(file);
      console.log(this.form.get('profile'))
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('profile').value);

    this.uploadService.upload(formData).subscribe(
      (res) => {
        this.response = res;
        this.imageURL = `${this.DJANGO_SERVER}${res.file}`;
        console.log(res);
        console.log(this.imageURL);
      },
      (err) => {  
        console.log(err);
      }
    );
  }
}
