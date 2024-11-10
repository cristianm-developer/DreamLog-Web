import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseAuthService } from '../../Services/firebase-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private firebaseAuth: FirebaseAuthService,
    private router: Router
  ){
    this.initializeFormGroup();
  }

  initializeFormGroup(){
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(30)]],
      passwordConfirmation: ['', [Validators.required, Validators.maxLength(30)]]
    })
  }

  checkInputs(){
    if(this.formGroup.invalid){
      alert('Email and password required');
      return false;
    }
  
    if(this.formGroup.get('password')?.value != this.formGroup.get('passwordConfirmation')?.value){
      alert("Password and password confirmation must be the same");
      return false;
    }

    return true;
  }

  async register(){
    if(!this.checkInputs())
      return;

    try {
      await this.firebaseAuth.registerWithEmailAndPassword(this.formGroup.get('email')!.value, this.formGroup.get('password')!.value);
      alert('Welcome!');
      this.router.navigate(['app','api']);
    } catch (error) {
      alert(error);
    }
  }

}
