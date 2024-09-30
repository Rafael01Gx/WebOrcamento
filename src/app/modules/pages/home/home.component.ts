import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { OrcamentoComponent } from '../../components/orcamento/orcamento.component';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,OrcamentoComponent,MatCard],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
