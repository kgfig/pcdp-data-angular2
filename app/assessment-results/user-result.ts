import { Question, Choice } from '../multiple-choice/multiple-choice';

export class User {
	id: string;
	username: string;
	name: string;
	email: string;
}

export class UserResult {
	user: User;
	answers: Choice[];
	score: number;
}