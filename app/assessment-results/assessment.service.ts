import { Injectable } from '@angular/core';

import { Assessment } from './assessment';
import { ASSESSMENT } from './mocks';

@Injectable()
export class AssessmentService {
	getAssessment(): Assessment {
		return ASSESSMENT;
	}
}