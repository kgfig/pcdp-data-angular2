import { Component } from '@angular/core';
import { Assessment } from './assessment';

@Component({
	selector: 'assessment-results',
	templateUrl: 'app/assessment-results/assessment-results.component.html'
})
export class AssessmentResultsComponent {
	assessment: Assessment = {
		"id": 1,
		"title": "Assessment for Subskill 1A"
	};
}