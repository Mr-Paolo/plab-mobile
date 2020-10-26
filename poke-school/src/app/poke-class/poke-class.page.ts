import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeService } from './type.service';

@Component({
  selector: 'app-poke-class',
  templateUrl: './poke-class.page.html',
  styleUrls: ['./poke-class.page.scss'],
})
export class PokeClassPage implements OnInit {
  typeId : string
  type 

  constructor(private activatedRoute : ActivatedRoute, private typeService : TypeService ) { }

  ngOnInit() {
    this.typeId = this.activatedRoute.snapshot.paramMap.get('type')
    console.log(this.typeId)

    this.typeService.get(this.typeId)
      .subscribe( (data) => {
        this.type = data
        console.log(data)
      }  )

  }

}
