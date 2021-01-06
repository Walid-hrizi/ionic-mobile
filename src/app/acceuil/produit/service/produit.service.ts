import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
  ) { }
  async createProduit(data){
     
    const userRef= await this.afStore.collection(`produit`).add({
      nomProduit: data.nomProduit,
      prix: data.prix,
      description:data.description
    });
    
    return userRef

  }
  async getAllProduit(){
    let rest :any=[]  ; 
    await this.afStore.firestore.collection(`produit`).get().then((querySnapshot) => { 
     
     querySnapshot.forEach((doc) => {
        let obj=doc.data();
         obj.id=doc.id;
         console.log("i  d",obj)
       rest.push(obj)
          console.log('rest',doc.data());
          
     })
  })
  console.log('rest',rest);
  return rest;
  

 }
  

 async getProduitById(id){
  let res ;
   await this.afStore
  .firestore
  .collection('produit')
  .doc(id)
  .get()
  .then((docRef) => { 
   res= docRef.data();
   console.log(docRef.data()) })
  .catch((error) => { })
  console.log(res)
  return res;
  }
      async updateProduit(data,id){
        await this.afStore.doc(`produit/${id}`).update({
          nomProduit: data.nomProduit,
          prix: data.prix,
          description:data.description
        });
      }
  supprimerProduit(id){
    this.afStore.doc(`produit/${id}`).delete()


  }
              
}
 