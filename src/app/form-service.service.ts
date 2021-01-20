import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  apiBaseUel: "http://192.168.31.253:1507/api/v1/user/";
  myHeaders = new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public uploadDocument(image: string): Observable<any> {
    return this.http.post<any>("http://192.168.31.253:1507/api/v1/user/image", { image: image }, { headers: this.myHeaders });
  }

  public getDocument(): Observable<any> {
    return this.http.get<any>("http://192.168.31.253:1507/api/v1/user/list" , { headers: this.myHeaders });
  }

  public updateDocument(image_Id: string, image: string): Observable<any> {
    return this.http.put<any>("http://192.168.31.253:1507/api/v1/user/image", {imageId: image_Id, image: image }, { headers: this.myHeaders });
  }
}
