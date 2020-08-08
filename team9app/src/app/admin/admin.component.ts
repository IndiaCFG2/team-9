import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminpin:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitPin(){
    if(this.adminpin == '123456'){
      this.router.navigate(['admin/dashboard']);
    }
  }

}
