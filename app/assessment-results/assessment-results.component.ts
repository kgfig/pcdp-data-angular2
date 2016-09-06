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

	ngOnInit() {
		this.assessment = this.assessmentService.getAssessment();
		this.results = this.userService.getResults();
	}

}