import { Assessment } from './assessment';
import { UserResult } from './user-result';

export const ASSESSMENT: Assessment = {
	"id": 1,
	"title": "Assessment for Subskill 1A",
	"type": 3
};

export const RESULTS: UserResult[] = [
	{
		"user": {
			"id": "juandcfromMFI", 
			"username": "juandc",
			"name": "Juanita",
			"email": "juandc@pcdpforever.com"
		},
		"answers": []
	},
	{
		"user": {
			"id": "songokuthesupersaiyan", 
			"username": "songoku",
			"name": "Goku",
			"email": "songoku@pcdpforever.com"
		},
		"answers": []
	},
	{
		"user": {
			"id": "saitamathecapedbaldy", 
			"username": "capedbaldy",
			"name": "Saitama",
			"email": "saitamathecapedbaldy@pcdpforever.com"
		},
		"answers": []
	}
];