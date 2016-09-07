import { Choice } from '../multiple-choice/multiple-choice';

export class User {
	id: number;
	username: string;
	firstname: string;
	surname: string;
	email: string;
	answers: Choice[];
}