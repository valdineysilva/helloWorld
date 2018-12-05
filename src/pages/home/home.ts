import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RetornopaisesProvider } from '../../providers/retornopaises/retornopaises';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nomepais;
  paisbuscado = {
      name: null,
      region: null
    };
  constructor(public navCtrl: NavController,
              public apiPais: RetornopaisesProvider) {

  }
  abrirPagina(){
    this.navCtrl.push("OutrapaginaPage");
  }
  buscaPais(nome){
      console.log("Nome do pais:" + this.nomepais);
      this.apiPais.buscaPais(this.nomepais).then(
        (sucesso) =>{
          console.log("Sucesso=>");
          console.log(sucesso);
          this.paisbuscado = sucesso[0];
          console.log(this.paisbuscado);
        },
        (error) =>{
          console.log("Error=>");
          console.log(error);
        }
      )
  }
}
