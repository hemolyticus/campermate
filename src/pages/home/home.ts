import { Component } from '@angular/core';
import { LocationPage } from '../location/location';
import { MyDetailsPage } from '../my-details/my-details';
import { CampDetailsPage } from '../camp-details/camp-details';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    //Variables
    tab1Root: any = LocationPage;
    tab2Root: any = MyDetailsPage;
    tab3Root: any = CampDetailsPage;

  constructor() {


    
  }

}
