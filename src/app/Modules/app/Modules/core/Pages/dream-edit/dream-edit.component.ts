import { Component } from '@angular/core';
import { DreamsDataService } from '../../Services/dreams-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalstorageService } from '../../../../Shared/Services/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dream-edit',
  templateUrl: './dream-edit.component.html',
  styleUrl: './dream-edit.component.scss'
})
export class DreamEditComponent {
  
  formGroup!: FormGroup;

  constructor(
    private dreamsData: DreamsDataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private localStorageService: LocalstorageService
  ){
    this.initForm();
  }

  initForm(){
    this.formGroup = this.formBuilder.group({
      title:['', Validators.required],
      content: ['', Validators.required],
      date: [new Date()]
    })
  }
  
  async saveDream(){
    if(this.formGroup.invalid)
      throw Error('Invalid form');

    let dream = { ...this.formGroup.value, user: this.localStorageService.userLogged }
    const ret = await this.dreamsData.saveDream(dream);
    if(ret){
      alert('Sucess!');
      this.router.navigate(['app']);
    }
  }
}
