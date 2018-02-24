import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'sfs-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.css']
})
export class ShareDialogComponent implements OnInit {

  whatsappURL: SafeUrl;
  telegramURL: string;
  facebookURL: string;
  twitterURL: string;

  constructor(private sharingService: SharingService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    const url = this.sharingService.getApplicationURL();
    const description = 'SFS ist eine WebApp, mit der du deinen eigenen ' +
      'SuperFit Kursplan erstellen kannst. Wähle deine Favoriten nach Kursart, Studio und Uhrzeit. ' +
      'Lasse dich über Änderungen im Kursplan benachrichtigen. Es ist keine Installation notwendig.';
    this.whatsappURL = this.sanitizer.bypassSecurityTrustUrl(`whatsapp://send?text=${description} \n${url}`);
    this.facebookURL = `https://www.facebook.com/dialog/share?href=${url}&display=page&quote=${description}&app_id=401127533645283`;
    this.telegramURL = `https://telegram.me/share/url?url=${url}&text=${description}`;
    this.twitterURL = `https://twitter.com/intent/tweet?text=${description}&url=${url}&hashtags=SuperFit`;
  }

}
