import { Component, Input } from '@angular/core';
import { UserResult } from './user-result';

@Component({
	selector: 'user-result',
	template: `
		<td>{{result.user.name}}</td>
		<td></td>
		<td></td>
		<td></td>
		<td>
			{{getScore()}}
		</td>
	`
})
export class UserResultComponent {
	@Input()
	result: UserResult;

	getScore() {
		return 0;
	}
}