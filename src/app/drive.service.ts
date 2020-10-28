import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DriveService {
  url = environment.apiUrl

  constructor(private http: HttpClient) { }

  getClass(){
    return this.http.get(this.url + 'class')
  };

  getSubject(subjectId){
    return this.http.get(this.url + 'subject' + '/' + subjectId)
  }

  getTopic(topicId){
    return this.http.get(this.url + 'topic' + '/' + topicId)
  }

  getImage(subjectId, imageId){
    return this.http.get(this.url + 'image' + '/' + subjectId + '/' + imageId)
  }


}
