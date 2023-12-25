import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';  // Import FormGroup here
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-user-files',
  templateUrl: './user-file.component.html',
  styleUrls: ['./user-files.component.css']
})
export class UserFilesComponent implements OnInit {

  DJANGO_SERVER = 'http://127.0.0.1:8000';
  form: FormGroup | undefined;  // Use FormGroup instead of FormGroup|any
  response: any;
  imageURL: any;

  constructor(private formBuilder: FormBuilder, private uploadService: UploadService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      profile: ['']
    });
  }

  onChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // this.form.get('profile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    // formData.append('file',);

    this.uploadService.upload(formData).subscribe(
      (res: any) => {
        this.response = res;
        this.imageURL = `${this.DJANGO_SERVER}${res.file}`;
        console.log(res);
        console.log(this.imageURL);
      },
      (err: any) => {  
        console.log(err);
      }
    );
  }
}
