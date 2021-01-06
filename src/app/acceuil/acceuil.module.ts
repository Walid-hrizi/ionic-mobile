import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceuilPageRoutingModule } from './acceuil-routing.module';

import { AcceuilPage } from './acceuil.page';
import { IonNavComponent } from './ion-nav/ion-nav.component';
import { ProduitComponent } from './produit/produit.component';
import { AjouterProduitComponent } from './produit/ajouter-produit/ajouter-produit.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { ModifierProduitComponent } from './produit/modifier-produit/modifier-produit.component';
@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    IonicModule,
    AcceuilPageRoutingModule,
  
    ReactiveFormsModule
  ],
  declarations: [AcceuilPage,IonNavComponent,ProduitComponent,AjouterProduitComponent,ModifierProduitComponent]
})
export class AcceuilPageModule {}
