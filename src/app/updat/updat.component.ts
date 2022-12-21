import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updat',
  templateUrl: './updat.component.html',
  styleUrls: ['./updat.component.css']
})
export class UpdatComponent implements OnInit {
 

  id!:number;
  constructor(private actR:ActivatedRoute) { }

  ngOnInit(): void {
    //this.id= this.actR.snapshot.params['id'];
    //ou
    this.actR.paramMap.subscribe(params => this.id=Number(params.get('id')));
    
  }

}
