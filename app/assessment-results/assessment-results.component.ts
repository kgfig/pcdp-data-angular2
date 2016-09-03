import { Component, OnInit } from '@angular/core';
import { Assessment } from './assessment';
import { UserResult } from './user-result';
import { AssessmentService } from './assessment-service';
import { ResultService } from './result-service';
import { ASSESSMENT, RESULTS } from './mocks';

@Component({
	selector: 'assessment-results',
	templateUrl: 'app/assessment-results/assessment-results.component.html',
	styleUrls: ['vendor/bootstrap/css/bootstrap.min.css'],
	providers: [AssessmentService, ResultService]
})
export class AssessmentResultsComponent implements OnInit {
	results: UserResult[];
	assessment: Assessment;

	constructor(private assessmentService: AssessmentService, private resultService: ResultService ) {}

	ngOnInit() {
		this.assessment = this.assessmentService.getAssessment();
		this.results = this.resultService.getResults();
	}
}