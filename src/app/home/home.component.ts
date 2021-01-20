import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormServiceService } from '../form-service.service';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  documentList: any=[];
  viewData: any;

  constructor(public router:Router, private apiService: FormServiceService) {
    window.scrollTo(0, 0)
   }

  ngOnInit() {
    this.getDocumentList();
  }
  
  getDocumentList(){
    this.apiService.getDocument().subscribe(res => {
      console.log(res)
      this.documentList = res.result;
    },err => {
      console.log('err',err);
    })
  }

  addForm(){
    this.router.navigate(['/add-form']);
  }

  editDetail(data){
    localStorage.setItem('editImage',JSON.stringify(data))
    this.router.navigate(['edit-form']);
  }
}
