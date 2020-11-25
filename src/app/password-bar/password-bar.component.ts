import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { element } from 'protractor';
import { PasswordStrengthCalculatorService } from '../password-strength-calculator.service';

@Component({
	selector: 'app-password-bar',
	templateUrl: './password-bar.component.html',
	styleUrls: ['./password-bar.component.scss']
})
export class PasswordBarComponent implements OnInit {
	@Input()
	passwordToCheck!: string;  
	@Input()
	barLabel!: string;  
	bars: string[] = [];
	colors: string[] = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];
	timer: number = 2000;
	constructor(private passwordStrengthCalculatorService: PasswordStrengthCalculatorService) { }
	
	private getColor(passwordScore: number) {
		let idx: number = 0;
		switch(true) {
			case (passwordScore <= 20):
				idx = 1;
				break;
			case (passwordScore <= 40 && passwordScore > 20):
				idx = 2;
				break;
			case (passwordScore <= 60 && passwordScore > 40):
				idx = 3;
				break;
			case (passwordScore <= 80 && passwordScore > 60):
				idx = 4;
				break;
			case (passwordScore <= 100 && passwordScore > 80):
				idx = 5;
				break;
		}
		return {  
			idx,
			col: this.colors[idx]  
		  }; 
	}
	
	ngOnChanges(changes: {[propName: string]: SimpleChange}): void {  
		
		let password = changes['passwordToCheck'].currentValue;  
		this.setBarColors(5, '#DDD');  
		this.bars = [];
		if (password) {  
			let c = this.getColor(this.passwordStrengthCalculatorService.evalPassword(password));
			this.setBarColors(c.idx, c.col);  
		}
		
	}  
	private setBarColors(count: number, col: string) {  
		
		for (let _n: number = 0; _n <= count; _n++) {  
			this.bars.push(col);  

		}  
		
	}	  
	

	ngOnInit() {
	}

}
