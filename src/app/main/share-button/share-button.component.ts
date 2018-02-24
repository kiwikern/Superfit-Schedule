import { Component } from '@angular/core';
import { SharingService } from '../sharing.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';

@Component({
  selector: 'sfs-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.css']
})
export class ShareButtonComponent {

  constructor(private sharingService: SharingService,
              private snackBar: MatSnackBar,
              private dialogService: MatDialog) {
  }

  shareApp() {
    const url = this.sharingService.getApplicationURL();
    const text = 'SFS ist eine WebApp, mit der du deinen eigenen SuperFit Kursplan erstellen kannst. ' +
      'Wähle deine Favoriten nach Kursart, Studio und Uhrzeit. ' +
      'Lasse dich über Änderungen im Kursplan benachrichtigen. ' +
      'Es ist keine Installation notwendig.';
    const title = 'SFS - SuperFit Schedule';
    const successfullyShared = this.sharingService.shareViaWebApi(title, text, url);
    if (!successfullyShared) {
      this.dialogService.open(ShareDialogComponent);
      const successfullyCopied = this.sharingService.copyToClipboard(url);
      if (successfullyCopied) {
        this.snackBar.open('Die URL wurde in deine Zwischenablage kopiert.', 'OK', {duration: 5000});
      } else {
        this.snackBar.open(`Die URL ${url} konnte nicht kopiert werden.`, 'OK', {duration: 5000});
      }
    }
  }

}
