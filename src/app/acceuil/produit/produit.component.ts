import { Component, OnInit } from '@angular/core';
import { ProduitService } from './service/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss'],
})
export class ProduitComponent implements OnInit {

  constructor(public prodService :ProduitService) { }
 data ;
  ngOnInit() {
    this.prodService.getAllProduit().then(actions=>{
      console.log('actions',actions)
      this.data=actions;
    })
    console.log(this.data)
  }
  supprimer(id){
    console.log(id);
    this.prodService.supprimerProduit(id);
    this.ngOnInit();

  }

}
