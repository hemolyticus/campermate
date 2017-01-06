import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../providers/data';

/*
  Generated class for the CampDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-camp-details',
  templateUrl: 'camp-details.html'
})
export class CampDetailsPage {

    campDetailsForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public dataService: Data)
  {
      this.campDetailsForm= formBuilder.group({

          gateAccessCode: [''],
          amenitiesCode: [''],
          wifiPassword: [''],
          phoneNumber: [''],
          departure: [''],
          notes: ['']
      });

  }

  saveForm(): void
  {

      let data = this.campDetailsForm.value;
      //this.dataService.setCampDetails(data);

  }

}
