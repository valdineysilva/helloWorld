import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the RetornopaisesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RetornopaisesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RetornopaisesProvider Provider');
  }
  public buscaPais(nome) {
    return new Promise((resolve, reject) => {
       this.http.get("https://restcountries.eu/rest/v2/name/" + nome ).subscribe(
         (result : any) => 
         {
           console.log(result[0].name);
           return resolve(result);
         },
         (error) =>
         {
           console.log(error);
           reject(error);
         }
       )
    });
  }
}
