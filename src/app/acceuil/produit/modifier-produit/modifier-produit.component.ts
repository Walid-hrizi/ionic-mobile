import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.scss'],
})
export class ModifierProduitComponent implements OnInit {
  data :any ={
    nomProduit:'' ,
    prix:'',
    description:  '',
   }
  
  id :any ;
  private ionicForm: FormGroup;
  isSumitted: boolean;
  constructor(private proService : ProduitService,public alertController: AlertController, private formBuilder: FormBuilder,public route:ActivatedRoute) 
  {this.ionicForm = formBuilder.group({
    nomProduit: ['', [Validators.required, Validators.minLength(2)]],
    prix: ['', [Validators.required]],
     description:  '',
  }); }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
  this.proService.getProduitById(this.id).then(res=>{
      this.data=res
      console.log(res)
    });
}

  async presentAlert() {
    const alert = await this.alertController.create({
       header: 'Alert',
       message: 'Veuillez Modifier le nom de produit et le prix',
      buttons: ['OK']
    });

    await alert.present();
  }
  submitbotton(){
    this.isSumitted = true;
  
    console.log(this.ionicForm.value)
    if (!this.ionicForm.valid)
    {
  console.log('please provide all required value');
  return false;
    }
    else{
      this.proService.updateProduit(this.ionicForm.value,this.id)
     .then((res) => {
       // Do something here
       window.alert("restaurant modifier")
     }).catch((error) => {
       window.alert(error.message)
     })
     
      console.log(this.ionicForm.value);
    }
  }
  
  }