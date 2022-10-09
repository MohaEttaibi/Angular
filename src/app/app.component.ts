import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-app';
  courses: any[] = [];

  //Instansiate DB from Config
  constructor(private db: AngularFireDatabase) {
    this.db.list('/courses').valueChanges()
    .subscribe(courses => {
      this.courses = courses;
      console.log(courses);
    });

    // this.author = this.db.object('/authors/1').valueChanges();
  }
}
