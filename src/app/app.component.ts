import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faCopyright } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cyberhub';

  facebook = faFacebook;
  twitter = faTwitter;
  youtube = faYoutube;
  bar = faBars

  copyright = faCopyright;


  ngOnInit(): void {
   
  }
}
