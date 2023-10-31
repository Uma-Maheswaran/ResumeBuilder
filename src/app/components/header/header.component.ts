import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Firestore, collectionData, collection, addDoc, updateDoc, query } from '@angular/fire/firestore';
import { Experience } from 'src/app/models/experience.model';
import { Profile } from 'src/app/models/profile.model';
import { Observable } from 'rxjs';
import { ResumeForm } from 'src/app/models/form.model';

@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html",
  styles: [
  ]
})
export class HeaderComponent {
  firestore: Firestore = inject(Firestore);
  profiles$: Observable<Profile[]>;

  profileForm = new FormGroup({
    firstName: new FormControl('mahesh', {validators: [Validators.minLength(1)]}),
    lastName: new FormControl('waran', Validators.minLength(1)),
    profession: new FormControl('software developer', Validators.minLength(1)),
    country: new FormControl('India', Validators.minLength(1)),
    city: new FormControl('Chennai', Validators.minLength(1)),
    pincode: new FormControl(111,{validators:[Validators.pattern('[0-9]{3,7}')]}),
    email: new FormControl('mahesh@zoho.com', Validators.email),
    mobileNumber: new FormControl(111,{validators:[Validators.pattern('[0-9]{3,11}')]} ),
  });

  constructor(){
    const coll = collection(this.firestore,'Profile');
    this.profiles$ = collectionData(coll) as Observable<Profile[]>;
  }
  experienceArray:FormGroup[]=[];
  
  addNewExperience():FormGroup{
    return new FormGroup({
      jobTitle: new FormControl('', Validators.minLength(1)),
      employer: new FormControl('', Validators.minLength(1)),
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
      city: new FormControl('', Validators.minLength(1)),
      description: new FormControl('', Validators.minLength(1)),
    });
  }
  summaryString: string = 'Welcome';

 logout(){
    console.log("Logging out");
    if(this.profileForm.valid){
      collection(this.firestore,'Profile')
      addDoc(collection(this.firestore,'Profile'),<Profile>this.profileForm.getRawValue()).then(res=> {
        console.log(res.id);
        updateDoc(res,{email:"kokki@gmail.com"})
      })
      console.log("successfully added");
    }
    console.log(this.profileForm.getRawValue());
    console.log(this.summaryString);
    this.experienceArray.forEach((experience)=>{
      let expe:Experience = experience.value;
      addDoc(collection(this.firestore,'Experience'),<Experience>experience.getRawValue()).then(res=> {
        console.log(res.id);
        updateDoc(res,{employer:"selfMade"})
      })
      console.log(expe);
    })
    // let obs:Observable<Profile[]> = collectionData(collection(this.firestore,'Profile')) as Observable<Profile[]>;
    
    // obs.subscribe(
    //   data=> {
    //     console.log(data)
    //   }
    // )
    // query(collection(this.firestore,'Profile'))
    // let items$:Observable<any[]> = collectionData(query(collection(this.firestore,'Profile')))
    // items$.subscribe(item=>console.log(item))
    // this.profiles$.subscribe((item)=>console.log(item))
  }
  }
 

