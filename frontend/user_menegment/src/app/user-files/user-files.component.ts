import { Component } from '@angular/core';
import { FileUploadService } from '../upload.service';

@Component({
  selector: 'app-user-files',
  templateUrl: './user-file.component.html',
  styleUrls: ['./user-files.component.css']
})
export class UserFilesComponent{
  selectedFile: File | null = null;

  constructor(private fileUploadService: FileUploadService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile)
        .subscribe(
          response => {
            console.log('File uploaded successfully:', response);
            // Handle success, e.g., display a success message to the user
          },
          error => {
            console.error('Error uploading file:', error);
            // Handle error, e.g., display an error message to the user
          }
        );
    }
  }
}