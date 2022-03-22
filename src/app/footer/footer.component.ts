import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  facebook = faFacebook;
  twitter = faTwitter;
  youtube = faYoutube;

  copyright = faCopyright;

  constructor() { }

  ngOnInit(): void {
  }

}
