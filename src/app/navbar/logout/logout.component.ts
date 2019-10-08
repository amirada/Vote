import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  articles=[];
  nbvote;
  constructor() { }

  ngOnInit() {
    localStorage.removeItem('connectedAthu');
    this.nbvote=0;
    //ocalStorage.setItem('listeArticle',JSON.stringify(this.articles));
    //localStorage.setItem('listeAuth',JSON.stringify(this.articles));
    localStorage.removeItem('NbVote');
  }

}
