import { Component, OnInit } from '@angular/core';
import { DriveService } from 'src/app/drive.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  selectedData = {
    class: String,
    subject: String,
    topic: String,
  }
  class;
  subject;
  topic;
  images;
  try = "3-1-9-2_1408.jpg";
  disableAllInput = true

  public viewerOptions: any = {
    navbar: false,
    toolbar: {
      zoomIn: 4,
      zoomOut: 4,
      oneToOne: 4,
      reset: 4,
      prev: 0,
      play: {
        show: 4,
        size: 'large',
      },
      next: 0,
      rotateLeft: 0,
      rotateRight: 0,
      flipHorizontal: 0,
      flipVertical: 0,
    }
  };

  constructor(
    private driveService: DriveService
  ) { }

  ngOnInit(): void {
    
    this.driveService.getClass().subscribe(result => {
      console.log(result)
      this.class = result
      this.disableAllInput = false
    })
    
  }

  onGetSubject(subjectId){
    this.selectedData.class = subjectId
    this.disableAllInput = true
    this.subject = null;
    this.topic = null;
    this.driveService.getSubject(subjectId).subscribe(result => {
      this.subject = result
      console.log(result)
      this.disableAllInput = false
      console.log(this.selectedData)
    })

  }

  onGetTopic(topicId){
    this.selectedData.subject = topicId
    this.disableAllInput = true
    this.topic = null
    this.driveService.getTopic(topicId).subscribe(result => {
      this.topic = result
      console.log('Topic')
      console.log(result)
      this.disableAllInput = false
      console.log(this.selectedData)
    })
  }

  onGetImages(imageId){
    this.selectedData.topic = imageId;
    console.log(imageId)
    console.log(this.selectedData)
    this.driveService.getImage(this.selectedData.subject, imageId).subscribe(result => {
      this.images = result
      console.log('Images')
      console.log(this.images)
    })
  }


  



}
