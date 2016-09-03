import { Injectable }  from '@angular/core';

import { UserResult } from './user-result';
import { RESULTS } from './mocks';

@Injectable()
export class ResultService {
	getResults(): UserResult[] {
		return RESULTS;
	}
}