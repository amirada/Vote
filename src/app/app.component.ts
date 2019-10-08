import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
nbvote=0;
  auths =[];
  articles=[];
  constructor(){
   // console.log("iccccccccccci");
    //localStorage.setItem('listeAuth',JSON.stringify(this.auths)); 
    // localStorage.setItem('connectedAthu',JSON.stringify(null)); 
    localStorage.setItem('NbVote',JSON.stringify(this.nbvote));
}
}
