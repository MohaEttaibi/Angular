import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isFavorit = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavorit = !this.isFavorit;
  }

}
