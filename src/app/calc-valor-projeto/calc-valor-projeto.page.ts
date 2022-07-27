import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Utils } from '../util/util';

@Component({
  selector: 'app-calc-valor-projeto',
  templateUrl: './calc-valor-projeto.page.html',
  styleUrls: ['./calc-valor-projeto.page.scss'],
})
export class CalcValorProjetoPage implements OnInit {
  
  frmCalcProj: any = {};
  valorProjeto: any = [];
  media: any = 0;
  result: boolean;
  valorProjetoFinalStr: any;
  valorProjetoFinal: number;

  constructor(public fb: FormBuilder, public alertCtrl: AlertController, public util: Utils) {
    this.result = false;
    this.frmCalcProj = this.fb.group({
      valorHora: ['', Validators.required],
      horasPorDia: ['', Validators.required],
      semanas: ['', Validators.required] 
    });
  }

  amountChange() {
    this.valorProjeto.valorHora = this.util.detectAmount(this.valorProjeto.valorHora);
  }

  onSubmit(){
     const valorHora = parseFloat(this.frmCalcProj.value.valorHora);
     const horasPorDia = parseFloat(this.frmCalcProj.value.horasPorDia);
     const semanas = parseFloat(this.frmCalcProj.value.semanas);
     this.valorProjetoFinal = valorHora * horasPorDia * semanas;
     this.valorProjetoFinal = parseFloat(this.valorProjetoFinal.toFixed(2));
     this.valorProjetoFinalStr = !isNaN(this.valorProjetoFinal) && isFinite(this.valorProjetoFinal) ? "R$ " + Math.ceil(this.valorProjetoFinal) + ",00" : "R$ 0,00";
     this.media = this.valorProjetoFinalStr;
     this.result = true;
     this.showAlert('<h2>Valor total do projeto</h2>', '<h2><strong>'+ this.media +'</strong></h2>');
  }

  resetForm(){
    this.result = false;
    this.frmCalcProj = this.fb.group({
      valorHora: ['', Validators.required],
      horasPorDia: ['', Validators.required],
      semanas: ['', Validators.required] 
    });
  } 

  async showAlert(_title: string, msg: string) {
    const alertController = document.querySelector('ion-alert-controller');
    await alertController.componentOnReady();

    const alert = await alertController.create({
      header: 'Alert',
      subHeader: _title,
      message: msg,
      buttons: ['OK']
    });
    return await alert.present();
  }

  ngOnInit() {
  }

}
