// Vendor
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
//import { FormsModule } from '@angular/forms'

// Our app
import { AppComponent } from './app.component';
import { AssessmentResultsComponent } from './assessment-results/assessment-results.component';
//import { UserResultComponent } from './assessment-results/user-result.component';
import { AssessmentService } from './assessment-results/assessment.service';
import { UserService } from './assessment-results/user.service';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent,
		AssessmentResultsComponent
		//UserResultComponent
	],
	providers: [
		AssessmentService,
		UserService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}