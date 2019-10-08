import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, ControlContainer, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  articleForm : FormGroup;
  public articles :Object[]=[];
  atsexe = ['oui','nom'];
  constructor() { 
    let connect =JSON.parse(localStorage.getItem('connectedAthu'));
      let nom= connect.nom;
    this.articleForm= new FormGroup({
      titre: new FormControl('',[Validators.required]),
      numero: new FormControl('',[Validators.required]),
     
      nom:new FormControl(nom,[Validators.required])
    })
    
  }
  ngOnInit() {
    let connect =JSON.parse(localStorage.getItem('connectedAthu'));
      let nom= connect.nom;
    this.articleForm= new FormGroup({
      titre: new FormControl('',[Validators.required]),
      numero: new FormControl('',[Validators.required]),
     
      nom:new FormControl( nom,[Validators.required]),
    })
    
    
  }
  ajouter()
  {
    console.log(this.articleForm.value);
      let connect =JSON.parse(localStorage.getItem('connectedAthu'));
      let nom= connect.nom;
    let articles = JSON.parse(localStorage.getItem('listeArticle'));
    console.log(articles);
      articles.push ( this.articleForm.value);
       localStorage.setItem('listeArticle',JSON.stringify(articles));
     let affich = JSON.parse(localStorage.getItem('listeArticle'));
     console.log(affich);
     alert("Ajout avec succee");
     this.ngOnInit();
   
  }
}
