import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Utils } from '../util/util';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calc-valor-hora',
  templateUrl: './calc-valor-hora.page.html',
  styleUrls: ['./calc-valor-hora.page.scss'],
})
export class CalcValorHoraPage implements OnInit {

  frmCalcValHora: any = {};
  valorHora: any = [];
  result: boolean;
  media: any = 0;
  valorHoraFinal: number;
  valorHoraFinalStr: any;

  constructor(public fb: FormBuilder,
    public alertCtrl: AlertController,
    public util: Utils) {
    this.result = false;
    this.frmCalcValHora = this.fb.group({
      qtdePorMes: ['', Validators.required],
      horasPorDia: ['', Validators.required],
      diasPorSemana: ['', Validators.required],
      semanasPorAno: ['', Validators.required]
    });
  }

  resetForm() {
    this.result = false;
    this.frmCalcValHora = this.fb.group({
      qtdePorMes: ['', Validators.required],
      horasPorDia: ['', Validators.required],
      diasPorSemana: ['', Validators.required],
      semanasPorAno: ['', Validators.required]
    });
  }

  amountChange() {
    this.valorHora.qtdePorMes = this.util.detectAmount(this.valorHora.qtdePorMes);
  }

  onSubmit() {
    const qtdePorMes = parseFloat(this.frmCalcValHora.value.qtdePorMes);
    const horasPorDia = this.frmCalcValHora.value.horasPorDia;
    const diasPorSemana = this.frmCalcValHora.value.diasPorSemana;
    const semanasPorAno = this.frmCalcValHora.value.semanasPorAno;
    const horasPorSemana = horasPorDia * diasPorSemana;
    const horasPorAnoDeFolga = horasPorSemana * semanasPorAno;
    this.valorHoraFinal = qtdePorMes * 12 / (52.1 * horasPorSemana - horasPorAnoDeFolga);
    this.valorHoraFinal += this.valorHoraFinal * 20 / 100;
    // tslint:disable-next-line:max-line-length
    this.valorHoraFinalStr = !isNaN(this.valorHoraFinal) && isFinite(this.valorHoraFinal) ? "R$ " + Math.ceil(this.valorHoraFinal) + ",00" : "R$ 0,00";
    this.media = this.valorHoraFinalStr;
    this.result = true;
    this.showAlert('<h2>O seu novo valor por hora</h2>', '<h2></h2><strong>' + this.media + '</strong></h2>');
  }

  formatarValorParaDecimal(valor) {
    valor = valor.split('.').join('');
    valor = valor.split(',').join('.');
    return valor;
  }

  ngOnInit() {

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
}
