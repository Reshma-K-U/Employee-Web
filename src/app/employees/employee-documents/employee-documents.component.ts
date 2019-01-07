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

  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  dataChange = new BehaviorSubject<FileNode[]>([]);
  
  constructor() {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.dataChange.subscribe(data=>this.nestedDataSource.data=data);
    
    this.dataChange.next([
      {
        filename: "add",
        type: "",
        children: [
          {
            filename: "test",
            type: "docx",
            children:[]
          }
        ]
      },
      {
        filename: "add",
        type: "",
        children: [
          {
            filename: "test",
            type: "docx",
            children:[]
          }
        ]
      },
    ])
  }

  hasNestedChild = (_: number, nodeData: FileNode) => {return !(nodeData.type);};

  private _getChildren = (node: FileNode) => {return observableOf(node.children);};

  ngOnInit() {
  }

}





  