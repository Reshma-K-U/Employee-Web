import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject,Observable,of as observableOf} from 'rxjs';


export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

@Component({
  selector: 'exalt-employee-documents',
  templateUrl: './employee-documents.component.html',
  styleUrls: ['./employee-documents.component.scss']
})

export class EmployeeDocumentsComponent{
  dataChange = new BehaviorSubject<FileNode[]>([]);
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;

  constructor() {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    this.dataChange.subscribe(data=>{
      this.nestedDataSource.data=data;
    })

    this.dataChange.next([
      {
        filename:'personal',
        type:"",
        children:[
            {
              filename:'aadhar',
              type:'doc',
              children:null,
            },
            {
              filename:'id card',
              type:"doc",
              children:null
            }
        ]
      },
      {
        filename:'Offer Letter',
        type:'pdf',
        children:null

      }
    ])
}

hasNestedChild = (_: number, nodeData: FileNode) => !nodeData.type;

  private _getChildren = (node: FileNode) => node.children;
}

