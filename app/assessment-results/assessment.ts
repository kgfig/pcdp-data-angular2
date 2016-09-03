import { Question } from '../multiple-choice/multiple-choice'

export class Assessment {
	id: number;
	title: string;
	type: number;
	questions: Question[];
}