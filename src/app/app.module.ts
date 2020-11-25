import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { PasswordBarComponent } from './password-bar/password-bar.component';
import { PasswordStrengthCalculatorService } from './password-strength-calculator.service'



@NgModule({
  declarations: [									
      AppComponent,
      PasswordBarComponent
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    PasswordStrengthCalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
