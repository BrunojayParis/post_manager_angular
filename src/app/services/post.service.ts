import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { Posts } from '../Posts';


@Injectable({
  providedIn: 'root'
})
export class PostService {
private urlApi = 'http://localhost:3000/posts'
  constructor(private http:HttpClient) { }
 
  getPosts(): Observable <Posts[]> {
    return this.http.get<Posts[]>(this.urlApi)
  }

  deletePost(post:Posts):Observable<Posts>{
    const deleteUrl = `${this.urlApi}/${post.id}`;
    return this.http.delete<Posts>(deleteUrl)
  }
  
}
