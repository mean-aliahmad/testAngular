import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};
  item_index: any;
  editDetail: any;
  
  constructor(public router:Router, private route:ActivatedRoute, private apiService: FormServiceService) {
    // this.route.params.subscribe(params => {
    //   console.log('res',params);
    //   this.editDetail = params.id;
    //   this.imageChangedEvent = this.editDetail.image;
    // })
    this.editDetail=JSON.parse(localStorage.getItem('editImage'))
    console.log(this.editDetail)
    this.imageChangedEvent = this.editDetail.image;
   }

  ngOnInit() {
  }


  // fileChangeEvent(event: any): void {
  //     this.imageChangedEvent = event;
  // }

  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
      // console.log(event, base64ToFile(event.base64));
  }

  imageLoaded() {
      this.showCropper = true;
      // console.log('Image loaded');
  }

  cropperReady(sourceImageDimensions: Dimensions) {
      // console.log('Cropper ready', sourceImageDimensions);
  }

  loadImageFailed() {
      // console.log('Load failed');
  }

  rotateLeft() {
      this.canvasRotation--;
      this.flipAfterRotate();
  }

  rotateRight() {
      this.canvasRotation++;
      this.flipAfterRotate();
  }

  private flipAfterRotate() {
      const flippedH = this.transform.flipH;
      const flippedV = this.transform.flipV;
      this.transform = {
          ...this.transform,
          flipH: flippedV,
          flipV: flippedH
      };
  }


  flipHorizontal() {
      this.transform = {
          ...this.transform,
          flipH: !this.transform.flipH
      };
  }

  flipVertical() {
      this.transform = {
          ...this.transform,
          flipV: !this.transform.flipV
      };
  }

  resetImage() {
      this.scale = 1;
      this.rotation = 0;
      this.canvasRotation = 0;
      this.transform = {};
  }

  zoomOut() {
      this.scale -= .1;
      this.transform = {
          ...this.transform,
          scale: this.scale
      };
  }

  zoomIn() {
      this.scale += .1;
      this.transform = {
          ...this.transform,
          scale: this.scale
      };
  }

  toggleContainWithinAspectRatio() {
      this.containWithinAspectRatio = !this.containWithinAspectRatio;
  }

  updateRotation() {
      this.transform = {
          ...this.transform,
          rotate: this.rotation
      };
  }

  
  onSubmitForm() {
    var data = [],sendData = [];
    if (this.croppedImage == '') {
      return;
    }
    
    if(this.croppedImage){
      this.apiService.updateDocument(this.editDetail._id ,this.croppedImage).subscribe(res => {
        this.router.navigate(['/home']);
      },err => {
        console.log('err',err);
      })
    }
    
  }
 
}
