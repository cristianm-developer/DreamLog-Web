import { Component } from '@angular/core';
import { DreamsDataService } from '../../Services/dreams-data.service';

@Component({
  selector: 'app-dream-edit',
  templateUrl: './dream-edit.component.html',
  styleUrl: './dream-edit.component.scss'
})
export class DreamEditComponent {
  
  constructor(
    private dreamsData: DreamsDataService
  ){}
  
  async createDream(){
    this.dreamsData.CreateDream('primer sonho teste', 'tinha um sonho de criar um app de sonhos..');
  }
}
