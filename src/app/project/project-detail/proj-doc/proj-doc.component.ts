import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/project/service/project.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'exalt-proj-doc',
  templateUrl: './proj-doc.component.html',
  styleUrls: ['./proj-doc.component.scss']
})
export class ProjDocComponent implements OnInit {
   id: string;
  subscription: Subscription;
  project: any = null;
  selectedFile: File;
  selected = false;

  url: any[] = [];



  constructor(private route: ActivatedRoute, private pfs: ProjectService, private cd: ChangeDetectorRef,private rout: Router){ }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.subscription = this.pfs.getdoc(this.id).subscribe(
      (value) => {
        this.project = value;
        this.url = [];
        for(let i = 0; i < this.project.length; i++) {
        const path = this.project[i]['DocPath'];
        this.pfs.getImageUrl(path).subscribe(val => {
        this.url.push({
          'name': this.project[i].name,
          'url': val
        });
        console.log(val);
      });
      }
      this.cd.markForCheck();
      });
  }
  onSelectFile(event) {
    this.selectedFile = event.target.files[0];
    this.selected = true;


  }
  // onclick(i: number)
  // {
  //   const path = this.project[i]['DocPath'];
  //     this.pfs.getImageUrl(path).subscribe(val => {
  //      this.docurl = val;

  //     this.cd.markForCheck();
  //     console.log(this.docurl);
  //     });
  // }

upload() {

this.pfs.uploadLogo(this.id, this.selectedFile );
}
}
