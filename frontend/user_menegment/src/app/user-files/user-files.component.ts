import { Component } from "@angular/core";
import {FileLikeObject,FileUploader } from 'ng2-file-upload';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-user-files',
  templateUrl: './user-file.component.html',
  styleUrls: ['./user-files.component.css']
})
export class UserFilesComponent {
  // // public uploader: FileUploader = new FileUploader({});
  // public hasBaseDropZoneOver: boolean = false;

  // constructor(private uploadService: UploadService) {}

  // fileOverBase(event: any): void {
  //   this.hasBaseDropZoneOver = event;
  // }

  // getFiles(): FileLikeObject[] {
  //   return this.uploader.queue.map((fileItem) => {
  //     return fileItem.file;
  //   });
  // }

  // upload() {
  //   let files = this.getFiles();
  //   console.log(files);
  //   let requests: any[] = [];
  //   files.forEach((file: any) => {
  //     let formData = new FormData();
  //     formData.append('file', file.rawFile, file.name);
  //     // requests.push(this.uploadService.upload());
  //   });

  //   // Assuming you want to log responses from all requests
  //   Promise.all(requests).then((responses) => {
  //     console.log(responses);
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // }
}
