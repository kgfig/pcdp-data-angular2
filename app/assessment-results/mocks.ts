import { Assessment } from './assessment';
import { User } from './user';
import { Question, Choice } from '../multiple-choice/multiple-choice';

export const CHOICES_FOR_ITEM1: Choice[] = [
	{
		"content": "Food",
		"letter": "A",
		"correct": false
	},
	{
		"content": "...",
		"letter": "B",
		"correct": false
	},
	{
		"content": "Can you repeat the question?",
		"letter": "C",
		"correct": false
	}
]

export const CHOICES_FOR_ITEM2: Choice[] = [
	{
		"content": "Ako",
		"letter": "A",
		"correct": false
	},
	{
		"content": "Ikaw",
		"letter": "B",
		"correct": true
	},
	{
		"content": "So?",
		"letter": "C",
		"correct": false
	}
]

export const CHOICES_FOR_ITEM3: Choice[] = [
	{
		"content": "(barfs)",
		"letter": "A",
		"correct": false
	},
	{
		"content": "...",
		"letter": "B",
		"correct": false
	},
	{
		"content": "Next question please!",
		"letter": "C",
		"correct": true
	},
]

export const QUESTIONS: Question[] = [
	{
		"id": 1,
		"content": "What is the meaning of life?",
		"choices": CHOICES_FOR_ITEM1,
		"points": 1
	},
	{
		"id": 2,
		"content": "Sinong kumuha ng biskwit sa garapon?",
		"choices": CHOICES_FOR_ITEM2,
		"points": 1
	},
	{
		"id": 3,
		"content": "If you were a mermaid, what do you say when Luffy asks, how do you poop?",
		"choices": CHOICES_FOR_ITEM3,
		"points": 1
	}
]

export const ASSESSMENT: Assessment = {
	"id": 1,
	"title": "Assessment for Subskill 1A",
	"type": 3,
	"questions": QUESTIONS
};

export const USER_RESULTS: User[] = [
	{
		"id": 1, 
		"username": "juandc",
		"firstname": "Juanita",
		"surname": "Juanita",
		"email": "juandc@pcdpforever.com",
		"answers": [
			CHOICES_FOR_ITEM1[1],
			CHOICES_FOR_ITEM1[1],
			CHOICES_FOR_ITEM1[2]
		],
	},
	{
		"id": 2, 
		"username": "songoku",
		"firstname": "Son",
		"surname": "Goku",
		"email": "songoku@pcdpforever.com",
		"answers": [
			CHOICES_FOR_ITEM1[0],
			CHOICES_FOR_ITEM1[0],
			CHOICES_FOR_ITEM1[2]
		],
	},
	{
		"id": 3, 
		"username": "capedbaldy",
		"firstname": "Saitama",
		"surname": "The Caped Baldy",
		"email": "saitamathecapedbaldy@pcdpforever.com",
		"answers": [
			CHOICES_FOR_ITEM1[0],
			CHOICES_FOR_ITEM1[2],
			CHOICES_FOR_ITEM1[1]
		],
	}
];