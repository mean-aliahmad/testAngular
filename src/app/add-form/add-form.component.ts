import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};
  imagePath: any;
  imgURL: string | ArrayBuffer;

  constructor(public router: Router, private apiService: FormServiceService) {
  }

  ngOnInit() {
  }

  fileChangeEvent(event, files): void {
    if (files.length === 0)
      return;
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.croppedImage = reader.result;
    }
  }

  onSubmitForm() {
    if (this.croppedImage == '') {
      return;
    }
    if (this.croppedImage) {
      this.apiService.uploadDocument(this.croppedImage).subscribe(res => {
        this.router.navigate(['/home']);
      },err => {
        console.log('err',err);
      })
    }

  }

}
