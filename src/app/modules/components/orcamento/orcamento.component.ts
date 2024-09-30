import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { OrcamentoModalComponent } from '../modal/orcamento-modal/orcamento-modal.component';

@Component({
  selector: 'app-orcamento',
  standalone: true,
  imports: [OrcamentoModalComponent,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,CommonModule
  ],
  templateUrl: './orcamento.component.html',
  styleUrl: './orcamento.component.scss',
})
export class OrcamentoComponent {
  constructor(private MatDialog: MatDialog) {}
  private _formBuilder = inject(FormBuilder);

  public duration = 200;

  firstFormGroup: FormGroup = this._formBuilder.group({ firstCtrl: [''] });
  secondFormGroup: FormGroup = this._formBuilder.group({ secondCtrl: [''] });
  thirdFormGroup: FormGroup = this._formBuilder.group({ thirdCtrl: [''] });
  fourthFormGroup: FormGroup = this._formBuilder.group({ fourthCtrl: [''] });
  fifthFormGroup: FormGroup = this._formBuilder.group({ fifthCtrl: [''] });
  sixthFormGroup: FormGroup = this._formBuilder.group({ sixthCtrl: [''] });
  seventhFormGroup: FormGroup = this._formBuilder.group({ seventhCtrl: [''] });
  eighthFormGroup: FormGroup = this._formBuilder.group({ eighthCtrl: [''] });
  ninthFormGroup: FormGroup = this._formBuilder.group({ ninthCtrl: [''] });
  tenthFormGroup: FormGroup = this._formBuilder.group({ tenthCtrl: [''] });
  eleventhFormGroup: FormGroup = this._formBuilder.group({eleventhCtrl: ['']});
  twelfthFormGroup: FormGroup = this._formBuilder.group({ twelfthCtrl: [''] });
  thirteenthFormGroup: FormGroup = this._formBuilder.group({thirteenthCtrl: ['']});
  fourteenthFormGroup: FormGroup = this._formBuilder.group({fourteenthCtrl: ['']});
  fifteenthFormGroup: FormGroup = this._formBuilder.group({fifteenthCtrl: ['']});
  sixteenthFormGroup: FormGroup = this._formBuilder.group({sixteenthCtrl: ['']});
  seventeenthFormGroup: FormGroup = this._formBuilder.group({seventeenthCtrl: [''],});

  // Variáveis para armazenar áreas
  area_parede: number = 0;
  area_massa: number = 0;
  area_gesso: number = 0;
  area_lixar_massa: number = 0;
  area_lixar_gesso: number = 0;
  area_selador: number = 0;
  area_gesso_direto: number = 0;
  area_tinta: number = 0;
  area_laquear_portas: number = 0;
  area_portoes: number = 0;
  area_verniz: number = 0;
  area_textura_rolo: number = 0;
  area_cimento_quimado: number = 0;
  area_textura_rustica: number = 0;
  area_massa_corrida_acrilica: number = 0;


  num_profissionais: number = 1;
  num_ajudantes: number = 0;
  produtividade_por_dia_profissional:number = 30  // m²/dia
  produtividade_por_dia_ajudante:number = 20      // m²/dia
  custo_alimentacao:number=15
  combustivel:number=20
  

    
  orcamento: any = null;

  calcularOrcamento() {
    const custosPorM2 = {
      lixarParede: 5.00,
      aplicacaoMassa: 8.00,
      aplicacaoGesso: 10.00,
      lixarMassa: 4.00,
      lixarGesso: 6.00,
      aplicacaoSelador: 7.00,
      aplicacaoGessoDireto: 9.00,
      tinta: 12.00,
      laquearPortas: 15.00,
      pinturaPortoes: 20.00,
      aplicacaoVerniz: 10.00,
      texturaRolo: 12.00,
      cimentoQuimado: 15.00,
      texturaRustica: 14.00,
      massaCorridaAcrilica: 9.00,
    };
   const produtividade_por_dia_total = (this.num_profissionais * this.produtividade_por_dia_profissional) + (this.num_ajudantes * this.produtividade_por_dia_ajudante)
   const area_total = (this.area_parede + this.area_massa + this.area_gesso + this.area_lixar_massa +
      this.area_lixar_gesso + this.area_selador + this.area_gesso_direto + 
      this.area_tinta + this.area_laquear_portas + this.area_portoes +
      this.area_verniz + this.area_textura_rolo + this.area_cimento_quimado + 
      this.area_textura_rustica + this.area_massa_corrida_acrilica)
      

    const dias_necessarios = area_total / produtividade_por_dia_total
    const dias_min = dias_necessarios < 1 ? 1 : 0;
    const custos = [
      { descricao: "Custo de lixar parede", custo: this.area_parede * custosPorM2.lixarParede },
      { descricao: "Custo de aplicação de massa corrida", custo: this.area_massa * custosPorM2.aplicacaoMassa },
      { descricao: "Custo de aplicação de gesso", custo: this.area_gesso * custosPorM2.aplicacaoGesso },
      { descricao: "Custo de lixar massa corrida", custo: this.area_lixar_massa * custosPorM2.lixarMassa },
      { descricao: "Custo de lixar gesso", custo: this.area_lixar_gesso * custosPorM2.lixarGesso },
      { descricao: "Custo de aplicação de selador", custo: this.area_selador * custosPorM2.aplicacaoSelador },
      { descricao: "Custo de gesso direto", custo: this.area_gesso_direto * custosPorM2.aplicacaoGessoDireto },
      { descricao: "Custo de tinta", custo: this.area_tinta * custosPorM2.tinta },
      { descricao: "Custo de laquear portas", custo: this.area_laquear_portas * custosPorM2.laquearPortas },
      { descricao: "Custo de pintura de portões", custo: this.area_portoes * custosPorM2.pinturaPortoes },
      { descricao: "Custo de aplicação de verniz", custo: this.area_verniz * custosPorM2.aplicacaoVerniz },
      { descricao: "Custo de aplicação de textura com rolo", custo: this.area_textura_rolo * custosPorM2.texturaRolo },
      { descricao: "Custo de cimento queimado", custo: this.area_cimento_quimado * custosPorM2.cimentoQuimado },
      { descricao: "Custo de textura rústica", custo: this.area_textura_rustica * custosPorM2.texturaRustica },
      { descricao: "Custo de aplicação de massa corrida acrílica", custo: this.area_massa_corrida_acrilica * custosPorM2.massaCorridaAcrilica },
      { descricao: "Custo total de alimentação", custo: ((Math.round(dias_necessarios+dias_min))*(this.num_profissionais  +  this.num_ajudantes ))*this.custo_alimentacao},
      { descricao: "Custo total de combustível", custo: (Math.round(dias_necessarios+dias_min))*this.combustivel! },

    ];

    const custoTotal = custos.reduce((total, item) => total + item.custo, 0);

    // Armazenar o resultado
    this.orcamento = {
      servicos: custos,
      total: custoTotal,
    };


  this.orcamento = {
    servicos: custos,
    total: custoTotal,
  };

  // Abrir o modal com os dados do orçamento
  this.MatDialog.open(OrcamentoModalComponent, {
    data: this.orcamento,
  });
  }
  

}

