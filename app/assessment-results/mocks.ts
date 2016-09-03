import { Assessment } from './assessment';
import { UserResult } from './user-result';
import { Question, Choice } from '../multiple-choice/multiple-choice';

export const CHOICES_FOR_ITEM1: Choice[] = [
	{
		"id": 1,
		"content": "Food",
		"letter": "A",
		"correct": false
	},
	{
		"id": 2,
		"content": "...",
		"letter": "B",
		"correct": false
	},
	{
		"id": 3,
		"content": "Can you repeat the question?",
		"letter": "C",
		"correct": false
	}
]

export const CHOICES_FOR_ITEM2: Choice[] = [
	{
		"id": 1,
		"content": "Ako",
		"letter": "A",
		"correct": false
	},
	{
		"id": 2,
		"content": "Ikaw",
		"letter": "B",
		"correct": true
	},
	{
		"id": 3,
		"content": "So?",
		"letter": "C",
		"correct": false
	}
]

export const CHOICES_FOR_ITEM3: Choice[] = [
	{
		"id": 1,
		"content": "(barfs)",
		"letter": "A",
		"correct": false
	},
	{
		"id": 2,
		"content": "...",
		"letter": "B",
		"correct": false
	},
	{
		"id": 3,
		"content": "Next question please!",
		"letter": "C",
		"correct": true
	},
]

export const QUESTIONS: Question[] = [
	{
		"id": 1,
		"content": "What is the meaning of life?",
		"seqNum": 1,
		"choices": CHOICES_FOR_ITEM1,
		"points": 1
	},
	{
		"id": 2,
		"content": "Sinong kumuha ng biskwit sa garapon?",
		"seqNum": 2,
		"choices": CHOICES_FOR_ITEM2,
		"points": 1
	},
	{
		"id": 3,
		"content": "If you were a mermaid, what do you say when Luffy asks, how do you poop?",
		"seqNum": 3,
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

export const RESULTS: UserResult[] = [
	{
		"user": {
			"id": "juandcfromMFI", 
			"username": "juandc",
			"name": "Juanita",
			"email": "juandc@pcdpforever.com"
		},
		"answers": [
			CHOICES_FOR_ITEM1[1],
			CHOICES_FOR_ITEM1[1],
			CHOICES_FOR_ITEM1[2]
		],
		"score": 2
	},
	{
		"user": {
			"id": "songokuthesupersaiyan", 
			"username": "songoku",
			"name": "Goku",
			"email": "songoku@pcdpforever.com"
		},
		"answers": [
			CHOICES_FOR_ITEM1[0],
			CHOICES_FOR_ITEM1[0],
			CHOICES_FOR_ITEM1[2]
		],
		"score": 1
	},
	{
		"user": {
			"id": "saitamathecapedbaldy", 
			"username": "capedbaldy",
			"name": "Saitama",
			"email": "saitamathecapedbaldy@pcdpforever.com"
		},
		"answers": [
			CHOICES_FOR_ITEM1[0],
			CHOICES_FOR_ITEM1[2],
			CHOICES_FOR_ITEM1[1]
		],
		"score": 0
	}
];