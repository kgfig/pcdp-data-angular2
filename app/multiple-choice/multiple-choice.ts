export class Question {
	id: number;
	content: string;
}

export class Choice {
	id: number;
	question: Question;
	content: string;
	letter: string;
	correct: boolean;
	points: number;
}