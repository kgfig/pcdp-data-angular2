// Vendor
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
//import { FormsModule } from '@angular/forms'

// Our app
import { AppComponent } from './app.component';
import { AssessmentResultsComponent } from './assessment-results/assessment-results.component';
import { AssessmentService } from './assessment-results/assessment.service';
import { ResultService } from './assessment-results/result.service';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent,
		AssessmentResultsComponent
	],
	providers: [
		AssessmentService,
		ResultService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}