import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Video} from './../video'

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  //inputs:['videos']
})
export class VideoListComponent implements OnInit {

  @Input() videolist
  @Output() SelectVideo: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.warn(this.videolist)
  }

  onSelect(vid:Video)
  {
    this.SelectVideo.emit(vid)
  }
}
