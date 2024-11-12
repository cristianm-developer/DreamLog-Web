import { Component } from '@angular/core';
import { FirebaseAuthService } from '../../../../Shared/Services/firebase-auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formGroup!: FormGroup;

  constructor(
    private firebaseAuth: FirebaseAuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ){
    this.initializeFormGroup();
  }

  initializeFormGroup(){
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(30)]]
    })
  }

  checkInputs(){
    if(this.formGroup.invalid){
      alert('Email and password required');
      return false;
    }
    
    return true;
  }

  async login(){
    if(!this.checkInputs())
      return;

    try {
      await this.firebaseAuth.loginWithEmailAndPassword(this.formGroup.get('email')!.value, this.formGroup.get('password')!.value);
      alert('Welcome!');
      this.router.navigate(['app','api']);
    } catch (error) {
      alert(error);
    }
  }

}
