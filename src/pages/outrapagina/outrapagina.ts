import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the OutrapaginaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-outrapagina',
  templateUrl: 'outrapagina.html',
})
export class OutrapaginaPage {
  primeiroNumero;
  segundoNumero;
  resultado;

  constructor(public navCtrl: NavController,  
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutrapaginaPage');
  }
    
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Você clicou em voltar!',
      buttons: ['OK']
    });
    alert.present();
  }
  voltar(){
    this.navCtrl.pop();
  }  
  somar(){
     this.resultado = parseInt(this.primeiroNumero) + parseInt(this.segundoNumero);
  }
  subtrair(){
    this.resultado = parseInt(this.primeiroNumero) - parseInt(this.segundoNumero);
 }  
}
