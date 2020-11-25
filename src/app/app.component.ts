import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'password-test';
	passwordForm = new FormControl({
		password: new FormControl('', Validators.required),
	});
	
	public account = {  
			password: ''
		  };  
  	 
}
