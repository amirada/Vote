import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ControlContainer, FormControlName } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  
  userForm: FormGroup;
   public auths :Object[]=[];
 public nom='';
public prenom='';
public password='';
 
 constructor(private router: Router) { 
   this.userForm= new FormGroup({
     nom: new FormControl('',[Validators.required]),
     prenom: new FormControl('',[Validators.required]),
    
     password: new FormControl('',[Validators.required]),
 })
 }

 ngOnInit() {
   
   this.userForm= new FormGroup({
     nom: new FormControl('',[Validators.required]),
     prenom: new FormControl('',[Validators.required]),
     
     password: new FormControl('',[Validators.required]),
 })
 //this.userlist=JSON.parse(localStorage.getItem('listeUser'));
 //console.log(this.userlist.value)
 }
 
 ajouter()
{  console.log("iciii")
      if(this.userForm.valid)
   {
     
     let auths = JSON.parse(localStorage.getItem('listeAuth'));
     //console.log(auths.value)
     this.auths.push ( this.userForm.value);
      localStorage.setItem('listeAuth',JSON.stringify(this.auths));
      this.router.navigateByUrl('/login');

  }
 }


}
