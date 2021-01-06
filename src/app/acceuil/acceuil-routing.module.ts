import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilPage } from './acceuil.page';
import { ClientComponent } from './client/client.component';
import { IonNavComponent } from './ion-nav/ion-nav.component';
import { AjouterProduitComponent } from './produit/ajouter-produit/ajouter-produit.component';
import { ModifierProduitComponent } from './produit/modifier-produit/modifier-produit.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {
    path: '',
    component: AcceuilPage,
    children: [
      { path: 'produit', component: ProduitComponent , pathMatch: 'full' },
      { path: 'client', component: ClientComponent , pathMatch: 'full' },
      { path: 'produit/ajouter', component: AjouterProduitComponent , pathMatch: 'full' },
      { path: 'produit/modifier/:id', component: ModifierProduitComponent , pathMatch: 'full' },

      ]  
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceuilPageRoutingModule {}
