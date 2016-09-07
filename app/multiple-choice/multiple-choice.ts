export class Choice {
	content: string;
	letter: string;
	correct: boolean;
}

export class Question {
	id: number;
	content: string;
	choices: Choice[];
	points: number;
}