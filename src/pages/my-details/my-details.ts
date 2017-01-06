import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../providers/data';


@Component({
  selector: 'page-my-details',
  templateUrl: 'my-details.html'
})
export class MyDetailsPage {

    myDetailsForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public dataService:Data)
  {

      this.myDetailsForm= formBuilder.group({
          carRegistration:[''],
          trailerRegistration: [''],
          trailerDimensions: [''],
          phoneNumber:[''],
          notes: ['']

      });

  }

  saveForm(): void
  {

      let data = this.myDetailsForm.value;
      //this.dataService.setMyDetails(data);

  }

}
