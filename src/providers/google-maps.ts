import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Connectivity } from './connectivity';
import { Geolocation } from 'ionic-native';



/*
  Generated class for the GoogleMaps provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GoogleMaps {

    //Variables
    mapElement:any;
    pleaseConnect:any;
    map:any;
    mapInitialised: boolean = false;
    mapLoaded: any;
    mapLoadedObserver: any;
    currentMarker: any;
    apiKey:string;




  constructor(public connectivityService: Connectivity) {

  }


  init(mapElement:any, pleaseConnect:any): Promise<any>
  {

  }

  loadGoogleMaps(): Promise<any>
  {


  }

  disableMap(): void
  {


  }

  enableMap(): void
  {


  }

  addConnectivityListeners():void
  {


  }

  changeMarker(lat: number, lng:number): void
  {


  }

}
