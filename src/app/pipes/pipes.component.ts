import { Component } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core'
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-pipes',
  imports: [MaterialModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  
}
