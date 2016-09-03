import { Question, Choice } from './multiple-choice';

export class User {
	id: string;
	username: string;
	name: string;
	email: string;
}

export class Answer {
	value: Choice;
	question: Question;
}

export class UserResult {
	user: User;
	answers: Answer[];
}