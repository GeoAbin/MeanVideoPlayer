import { Component, OnInit, Input } from '@angular/core';
import {Video} from './../video'

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  //inputs:['videos']
})
export class VideoListComponent implements OnInit {

  @Input() videolist

  constructor() { }

  ngOnInit(): void {
    console.warn(this.videolist)
  }

}
