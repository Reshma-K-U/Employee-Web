import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/project/service/project.service';
import { Subscription } from 'rxjs';

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
  docurl;

  progress: { percentage: number } = { percentage: 0 };

  constructor(private route: ActivatedRoute, private pfs: ProjectService  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.subscription = this.pfs.getdoc(this.id).subscribe(
      (value) => {
        this.project = value;
        console.log(this.project);
        const path = this.project['DocPath'];
        this.pfs.getImageUrl(path).subscribe(val => {
          this.docurl = val;

        });
      }
    );
  }
  onSelectFile(event) {
    this.selectedFile = event.target.files[0];


  }

upload() {

this.pfs.uploadLogo(this.id, this.selectedFile );
}
}
