import { Component } from '@angular/core';
import { Assessment } from './assessment';
import { UserResult } from './user-result';

@Component({
	selector: 'assessment-results',
	template: `
		<div class="panel panel-default">
			<div class="panel-heading">{{assessment.title}}</div>
			<div class="panel-body">
				Description here
			</div>
			<table class="table-header">
				<span>User</span>
				<span>Item 1</span>
				<span>Item 2</span>
				<span>Item 3</span>
				<span>Score</span>
			</table>

			<div class="table-row" *ngFor="let result of results">
				{{result.user.name}}
			</div>
		</div>
	`
})
export class AssessmentResultsComponent {
	assessment: Assessment = {
		"id": 1,
		"title": "Assessment for Subskill 1A",
		"type": 3
	};
	results: UserResult[] = [
		{
			"user": {
				"id": "juandcfromMFI", 
				"username": "juandc",
				"name": "Juan Miguelita Asuncion Dela Cruz",
				"email": "juandc@pcdpforever.com"
			},
			"answers": []
		},
		{
			"user": {
				"id": "songokuthesupersaiyan", 
				"username": "songoku",
				"name": "Goku",
				"email": "songoku@pcdpforever.com"
			},
			"answers": []
		},
		{
			"user": {
				"id": "saitamathecapedbaldy", 
				"username": "capedbaldy",
				"name": "Saitama",
				"email": "saitamathecapedbaldy@pcdpforever.com"
			},
			"answers": []
		}
	];
}