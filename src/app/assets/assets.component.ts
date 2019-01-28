import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddassetsComponent } from './addassets/addassets.component'


@Component({
  selector: 'exalt-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  onAddClick(): void {

    const dialogRef = this.dialog.open(AddassetsComponent,{
      width: '300px',
    });
  }
}
