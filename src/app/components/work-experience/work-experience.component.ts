import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper, MatStepperNext } from '@angular/material/stepper';
import { Experience } from 'src/app/models/experience.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styles: [
  ]
})
export class WorkExperienceComponent implements OnInit{

  @Input() experienceArray:FormGroup[] = [];
  @Input() addNewExperience: () => FormGroup = ()=>{
    return new FormGroup({
      jobTitle: new FormControl('', Validators.minLength(1)),
      employer: new FormControl('', Validators.minLength(1)),
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
      city: new FormControl('', Validators.minLength(1)),
      description: new FormControl('', Validators.minLength(1)),
    });
  };

  experienceExpansionArray: boolean[] = [];
  
  ngOnInit(): void {
    this.experienceArray.forEach(()=>this.experienceExpansionArray.push(false));
  }

  // Injecting stepper instance which was in parent component AppHeader 
  constructor(private _stepper:CdkStepper){}

  // manipulating array indexes when items are reordered
  drop(event: CdkDragDrop<FormGroup[]>) {  
    moveItemInArray(this.experienceArray, event.previousIndex, event.currentIndex);
    moveItemInArray(this.experienceExpansionArray, event.previousIndex, event.currentIndex);
  }

  // adding a new item
  add(){
    this.experienceExpansionArray.push(false);
    this.experienceArray.push(this.addNewExperience());
  }

  //removing a given item
  remove(index: number){
    this.experienceArray.splice(index,1);  
    this.experienceExpansionArray.splice(index,1);  
  }

  // next action
  nextAction(){
    // closing all opened expansionboxes
    this.experienceExpansionArray.forEach((value:boolean,index:number)=>{
      this.experienceExpansionArray[index]=false;
    })
    // opening the firstmost expansion box with invalid data
    let flag:boolean=true;
    this.experienceExpansionArray.forEach((value:boolean,index:number)=>{
      if(!this.experienceArray[index].valid && flag){
        this.experienceExpansionArray[index]=true;
        flag=false;
      }
    })
    if(flag){
      this._stepper.next();
    }
  }
}
