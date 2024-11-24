import { Component } from '@angular/core';
import { DreamsDataService } from '../../Services/dreams-data.service';
import { LocalstorageService } from '../../../../Shared/Services/localstorage.service';
import { Dream } from '../../../../Interfaces/dream';

@Component({
  selector: 'app-dream-list',
  templateUrl: './dream-list.component.html',
  styleUrl: './dream-list.component.scss'
})
export class DreamListComponent {

  dreams: Dream[] = [];

  constructor(
    private dreamsDataService: DreamsDataService,
    private localStorageService: LocalstorageService
  ){
    this.loadDreams();
  }

  async loadDreams(){
    const ret = await this.dreamsDataService.loadDreams({uid: this.localStorageService.uid!});
    this.dreams = ret;
  }

}
