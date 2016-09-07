import { Component, OnInit } from '@angular/core';
import { Assessment } from './assessment';
import { User } from './user';
import { AssessmentService } from './assessment.service';
import { UserService } from './user.service';

@Component({
	selector: 'assessment-results',
	templateUrl: 'app/assessment-results/assessment-results.component.html'
})
export class AssessmentResultsComponent implements OnInit {
	results: User[];
	assessment: Assessment;

	constructor(private assessmentService: AssessmentService, private userService: UserService ) {}

	ngOnInit(): void {
		this.assessmentService.getAssessment().then(assessment => this.assessment = assessment);
		this.userService.getResults().then(results => this.results = results);
	}

}