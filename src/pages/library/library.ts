import { QuotesPage } from './../quotes/quotes';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import quotes from '../../data/quotes';
import { Quote } from '../../data/quote.interface';

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  quoteCollection:{category:string,quotes:Quote[],icon:string}[];
  quotesPage = QuotesPage;
  ngOnInit(): void {
    this.quoteCollection = quotes
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

}
