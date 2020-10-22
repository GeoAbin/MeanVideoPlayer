import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {


  @Input() video
  @Output() updateVideoEvent: EventEmitter<any> = new EventEmitter()
  @Output() deleteVideoEvent: EventEmitter<any> = new EventEmitter()

  public editTitle:boolean=false


  constructor() { }

  ngOnInit(): void {
  }

  onTitleClick()
  {
    this.editTitle=true
  }

  ngOnChanges()
  {
    this.editTitle=false
  }

  updateVideo()
  {
    this.updateVideoEvent.emit(this.video)
  }

  deleteVideo()
  {
    this.deleteVideoEvent.emit(this.video)
  }
}
