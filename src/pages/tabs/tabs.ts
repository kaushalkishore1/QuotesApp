import { LibraryPage } from './../library/library';
import { FavoritesPage } from './../favorites/favorites';
import { Component } from "@angular/core";

@Component({
    selector:'page-tabs',
    template:`<ion-tabs selectedIndex=0>
    <ion-tab [root]="favoritesPage" tabTittle="Favorites" tabIcon="star"></ion-tab>
    <ion-tab [root]="libraryPage" tabTittle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>`
})
export class TabsPage{
    favoritesPage = FavoritesPage;
    libraryPage = LibraryPage;
}