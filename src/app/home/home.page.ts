import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthentificationService } from '../shared/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  data = {email:""};
   /*constructor(private router:Router)
 {
  }
  goToepiadministration(){
    this.router.navigate(['/epiadministration'])
  }*/
  private ionicForm: FormGroup;
  isSumitted: boolean;
   constructor(public alertController: AlertController, private router: Router, private formBuilder: FormBuilder,
    private authService: AuthentificationService)
  {
    this.ionicForm = formBuilder.group({
      email: ['', [Validators.required /*,  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')*/]],
      password: ['', [Validators.required /* , Validators.pattern('[0-9]+$')*/]]
    });
  }
  ngOnInit() {
     this.router.navigate(['acceuil']);
  }
  get errorControl(){
return this.ionicForm.controls;
  }
  submitbotton(){
    this.isSumitted = true;

    if (!this.ionicForm.valid)
    {
console.log('please provide all required value');
return false;
    }
    else{
      this.authService.SignIn(this.ionicForm.value.email,this.ionicForm.value.password)
     .then((res) => {
       // Do something here
       this.router.navigate(['/acceuil']);
     }).catch((error) => {
       window.alert(error.message)
     })
     
      console.log(this.ionicForm.value);
    }
 }
  async presentAlert() {
    const alert = await this.alertController.create({
       message: 'Hi Mr/Mme Veuillez connecter !',
      buttons: ['OK']
    });

    await alert.present();
  }
  /*submitbotton(){
    console.log(this.ionicForm.value  );
   }*/
  goToepiadministration(){
    this.router.navigateByUrl('/epiadministration');
  }
}