import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import jsPDF from 'jspdf';
import { Servico } from '../../interfaces/servico.interface'
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-orcamento-modal',
  standalone: true,
  imports: [MatDialogModule,CommonModule,MatButtonModule,],
  templateUrl: './orcamento-modal.component.html',
  styleUrl: './orcamento-modal.component.scss'
})
export class OrcamentoModalComponent {
  constructor(
    public dialogRef: MatDialogRef<OrcamentoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { servicos: Servico[]; total: number }
  ) {}
  close(): void {
    this.dialogRef.close();
  }

  downloadPDF(): void {
    const doc = new jsPDF();
    doc.text('Orçamento Detalhado', 10, 10);
  
    if (Array.isArray(this.data.servicos)) {
      this.data.servicos.forEach((item, index) => {
        doc.text(`${item.descricao}: R$ ${item.custo.toFixed(2)}`, 10, 20 + (index * 10));
      });
    } else {
      console.error('Serviços não são um array:', this.data.servicos);
    }
  
    doc.text(`Total: R$ ${this.data.total.toFixed(2)}`, 10, 20 + (this.data.servicos.length * 10));
    doc.save('orcamento.pdf');
  }

}
