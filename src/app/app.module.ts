import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';  
import { ProfileComponent } from './components/profile/profile.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { SummaryComponent } from './components/summary/summary.component';
import {
  CdkDrag,
  CdkDragPlaceholder,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { FirestoreModule} from '@angular/fire/firestore';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    SummaryComponent,
    WorkExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    CdkDrag,
    CdkDragPlaceholder,
    CdkDropList,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    provideFirebaseApp(()=> initializeApp({
      apiKey: "AIzaSyC-LFmNtyaCob7xyoFx5C_miiXhsQ3F0k4",
      authDomain: "resumecurator-90e0c.firebaseapp.com",
      projectId: "resumecurator-90e0c",
      storageBucket: "resumecurator-90e0c.appspot.com",
      messagingSenderId: "945964831563",
      appId: "1:945964831563:web:a906ddfa1ce052c92a8ece",
      measurementId: "G-8H6DRG6ERD"
  })),
  FirestoreModule,
  provideFirestore(() => getFirestore()),
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
