import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root'
})
export class PasswordStrengthCalculatorService {
  	

	public evalPassword(password: string): number {
		let _score_:number = 0;
		let n 	= password.length;
		let len = (password.match(/[A-Z]/g) || []).length;            	// 	number of UPPER latin chars
		let ucr = (password.match(/\b([A-Z])\1\1+\b/g) || []).length; 	// 	repetetive UPPER latin chars
		let lcr = (password.match(/\b([a-z])\1\1+\b/g) || []).length; 	//  repetetive LOWER latin chars

		let sc 	= (password.match(/[!-\/:-@[-`{-~]/g) || []).length;   	// 	number of special chars
		let ss 	= (password.match(/[!-\/:-@[-`{-~]+/g) || []).length;  	// 	sequential special chars

		let num = (password.match(/[1-9]/g) || []).length;            	// 	number of integer chars
		let nr 	= (password.match(/\b([1-9])\1\1+\b/g) || []).length;  	//  repetetive integers
		let sn 	= (password.match(/\d+ /g) || []).length;              	//  sequential integers
		let sl 	= (password.match(/[a-zA-Z]+ /g) || []).length;        	//  sequential latin

		// ugly hacks
		if (sn < 3) sn = 0;
		if (sl < 3) sl = 0;
		if (ss < 3) ss = 0;

		_score_ += n*4;
		_score_ += (len-n)*2;
		// if(_score_ < 0) _score_ *= -1
		_score_ += (num*4);
		_score_ += (sc*6);
		_score_ -= (ucr)*2;
		_score_ -= (lcr)*2;
		_score_ -= (nr)*2;
		_score_ -= (sl*3);
		_score_ -= (sn*3);
		_score_ -= (ss*3);

		if (num === 0 && sc === 0) _score_ -= n;
		if (len === 0 && sc === 0) _score_ -= n;

		// if it met the requirements.
		if (n >= 8 && num > 1 && sc > 1 && len > 1)
			_score_ += n*2;
		// the floor is 0.
		if (_score_ < 0) _score_ = 0;
		//	the roof is 100.
		if (_score_ > 100) _score_ = 100;
		return Math.trunc(_score_);
  }
}
