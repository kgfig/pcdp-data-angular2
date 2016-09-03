import { Component } from '@angular/core';
import { Assessment } from './assessment';
import { UserResult } from './user-result';

@Component({
	selector: 'assessment-results',
	templateUrl: 'app/assessment-results/assessment-results.component.html',
	styleUrls: ['vendor/bootstrap/css/bootstrap.min.css']
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
				"name": "Juanita",
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