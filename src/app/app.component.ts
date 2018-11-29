import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: "AIzaSyAE8USGTdF9_pov_VgPIE18K495r0jXbYE",
      authDomain: "books-358ee.firebaseapp.com",
      databaseURL: "https://books-358ee.firebaseio.com",
      projectId: "books-358ee",
      storageBucket: "books-358ee.appspot.com",
      messagingSenderId: "78698589128"
    };
    firebase.initializeApp(config);
  }
}
