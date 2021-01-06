import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthentificationService } from '../shared/authentication.service';

@Component({
  selector: 'app-home-signup',
  templateUrl: './home-signup.page.html',
  styleUrls: ['./home-signup.page.scss'],
})
export class HomeSignupPage implements OnInit {
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
      fname: ['', [Validators.required, Validators.minLength(2)]],
      lname: ['', [Validators.required, Validators.minLength(2)]],

      email: ['', [Validators.required /*,  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')*/]],
      password: ['', [Validators.required /* , Validators.pattern('[0-9]+$')*/]]
    });
  }
  ngOnInit() {
    if (localStorage.getItem('user') && localStorage.getItem('user')!=="null") {
      this.router.navigate(['acceuil']);
    }


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

     this.authService.RegisterUser(this.ionicForm.value.email,this.ionicForm.value.password,this.ionicForm.value)
     .then((res) => {
       // Do something here
       this.router.navigate(['/home']);
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