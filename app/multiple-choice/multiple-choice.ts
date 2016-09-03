export class Choice {
	id: number;
	content: string;
	letter: string;
	correct: boolean;
}

export class Question {
	id: number;
	content: string;
	seqNum: number;
	choices: Choice[];
	points: number;
}