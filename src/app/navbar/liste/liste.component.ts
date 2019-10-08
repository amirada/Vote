import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
  providers: [DatePipe]
})
export class ListeComponent implements OnInit {

  articles: Object[] = [];
  modform: FormGroup;
  myGroup: FormGroup;
  public index = null;
  public titre = '';
  public date = '';
  atsexe = ['oui', 'nom'];
  public numero = null;
  user;
  myDate = new Date();
  datePipe: any;
  nbvote = 0;
  today :any;
  tomorrow :any;
  nbvt:any;
  constructor() {
    this.user = JSON.parse(localStorage.getItem('connectedAthu'));
this.nbvt = JSON.parse(localStorage.getItem('NbVote'));
console.log(this.nbvt);
    this.articles = JSON.parse(localStorage.getItem('listeArticle'));
    console.log(this.articles.values);
    this.modform = new FormGroup({

      date: new FormControl('', [Validators.required]),

    })
   
    //this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
     this.today = new Date();
     this.tomorrow = new Date();
    this.tomorrow.setDate(this.today.getDate() + 1);
    console.log("date de lendemain:" +this.tomorrow);
    console.log("date d'aujourdhui1:" +this.today);
    console.log("date d'aujourdhui33:" +this.myDate);
  }

  ngOnInit() {

    this.articles = JSON.parse(localStorage.getItem('listeArticle'));
    console.log(this.articles.values);
    this.modform = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      Autheur: new FormControl('', [Validators.required]),
    })
    this.articles = JSON.parse(localStorage.getItem('listeArticle'));

  }

  
  voter() {

    console.log("ici vote");
    console.log("nbvt:" +this.nbvt)
    let vote = this.modform.value.date;
    this.articles[this.index] = this.modform.value;
    //this.articles[this.index].date=
    //if(this.myDate)
    // { 
    console.log("mydate:"+this.myDate);
    console.log("today:" +this.today);
    if (vote = "oui")
      if (this.nbvt ==6) {
        //if(this.today==this.myDate)
         this.today==this.tomorrow-1;
         console.log("today:"+this.today);
      // if(this.myDate>this.today)
      // {
           console.log(this.nbvote);
          alert("Vous n'avez pas le droit de votez plus que 5 foix pendant ce jour")
        
      }
        
      else {
        
        if(this.nbvt<6)
        {
      
        //  if(this.myDate=this.tomorrow)
        //    {
          localStorage.setItem('listeArticle', JSON.stringify(this.articles));
      
          alert("Vous avez votez avec succee a ce sujet");
          this.nbvt = this.nbvt+1;
       
          console.log(this.nbvt);
          //  }
        }
        localStorage.setItem('NbVote',JSON.stringify(this.nbvt));

      }

  }
  pourcentage()
  {

  }
}
