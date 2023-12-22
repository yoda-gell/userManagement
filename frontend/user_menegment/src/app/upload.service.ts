import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private uploadUrl = 'http://127.0.0.1:8000/upload/'; // Replace with your server's upload endpoint

  constructor(private http: HttpClient) { }

  uploadFile(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(this.uploadUrl, formData);
  }
}