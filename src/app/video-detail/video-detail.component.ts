import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {


  @Input() video

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

}
