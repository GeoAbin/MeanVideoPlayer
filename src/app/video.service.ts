import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Video} from './video'


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http:HttpClient) { }

  public getUrl="/api/videos"
  public postUrl="/api/video/"


  getVideos()
  {
   return this.http.get(this.getUrl,{responseType:'json'})
  }

  addVideo(video:Video)
  {
    return this.http.post(this.postUrl,video,{responseType:'json'})
  }

}
