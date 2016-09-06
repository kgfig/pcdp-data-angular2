import { Injectable }  from '@angular/core';

import { User } from './user';
import { USER_RESULTS } from './mocks';

@Injectable()
export class UserService {
	getResults(): User[] {
		return USER_RESULTS;
	}
}