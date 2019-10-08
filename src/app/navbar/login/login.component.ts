import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { FormGroup, FormControl, Validators, ControlContainer, FormControlName } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  localStorage: Object[]=[];
  user:Object[]=[];
  loginForm: FormGroup;
  nbvt=0;
  public index=null;
public nom='';
public password='';
public nbvote: any;
 constructor(private router: Router) { 
  
   this.loginForm= new FormGroup({
     nom: new FormControl('',[Validators.required]),
     password: new FormControl('',[Validators.required]),
 })

 }


  ngOnInit() {
    this.loginForm= new FormGroup({
      nom: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
  })
  }
login()
{ 
  var inputpas= this.loginForm.value.password;
  let auths=JSON.parse(localStorage.getItem('listeAuth'));
  for (const auth of auths) {
  var passw= auth.password;
  console.log(passw);
  if(inputpas ===passw)
  { console.log("testlog");
    var inputnom =this.loginForm.value.nom;
    var inputprenom = auth.prenom;
    var auths1 =  {nom : inputnom, prenom: inputprenom };
    localStorage.setItem('connectedAthu',JSON.stringify(auths1));
    localStorage.setItem('NbVote',JSON.stringify(this.nbvt));

    this.router.navigateByUrl('/ajout');
    //  this.nbvote=0;
  }
  }
}

}