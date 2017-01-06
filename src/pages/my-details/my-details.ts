import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../providers/data';


@Component({
  selector: 'page-my-details',
  templateUrl: 'my-details.html'
})
export class MyDetailsPage {

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public dataService:Data) {}

  saveForm(): void
  {

  }

}
