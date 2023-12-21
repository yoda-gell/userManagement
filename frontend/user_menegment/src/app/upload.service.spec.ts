// upload.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  private DJANGO_SERVER = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  upload(formData: FormData): Observable<any> {
    const url = `${this.DJANGO_SERVER}/your-upload-endpoint`;
    return this.http.post(url, formData);
  }
}
