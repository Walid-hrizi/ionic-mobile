import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { ProduitService}  from 'src/app/acceuil/produit/service/produit.service';
@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.scss'],
})
export class AjouterProduitComponent implements OnInit {
  private ionicForm: FormGroup;
  isSumitted: boolean;
  constructor( public modalCtrl: ModalController,public alertController: AlertController, private formBuilder: FormBuilder,   private produitService:ProduitService)
  {
    this.ionicForm = formBuilder.group({
      nomProduit: ['', [Validators.required, Validators.minLength(2)]],
      prix: ['', [Validators.required]],
       description:  '',
    });
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
       header: 'Alert',
       message: 'Veuillez remplir le nom de produit et le prix',
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {}
  
  submitbotton(){
    this.isSumitted = true;
  
    console.log(this.ionicForm.value)
    if (!this.ionicForm.valid)
    {
  return this.presentAlert();
    }
    else{
      console.log(this.ionicForm.value)
      this.produitService.createProduit(this.ionicForm.value)
     .then((res) => {
       // Do something here
       window.alert("Produit ajouter")
     }).catch((error) => {
       window.alert(error.message)
     })
     
      console.log(this.ionicForm.value);
    }
  }
}
