import { Injectable } from '@angular/core';
import { Station } from '../../models/station/station';
import { Observationslip } from '../../models/observationslip/observationslip';


import { Http,Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class DataService {

  public url:string='http://localhost:3000/Tasks';
  public formsUrl:string='http://localhost:3000/forms';
  public stationsUrl:string='http://localhost:3000/stations';
  // private wimeaOnlineURL:string='http://wimea.mak.ac.ug/wdr/ionic_login/wimeaAppconnect/insert.php';
  private wimeaOnlineApi:string='http://wimea.mak.ac.ug/wdr/wimeaDesktopApiconnect/insert.php';
  private wimeaOfflineURL:string='http://localhost/ionic_login/wimeaDesktopApiconnect/insert.php';
  private connectionStatus;


  constructor(private _http: Http) {

    }
  // STATION
      //add a station
      createStation(station: Station){
        let body = JSON.stringify(station);
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.stationsUrl, body, options)
        .map((response: Response) => response.json());
      }

      getStationDetails(){
        return this._http.get(this.stationsUrl);
      }

  //OBSERVATIONSLIP

    getAllObservationslips(){
      return this._http.get(this.formsUrl);
    }

    getObservationslip(id: number){
      return this._http.get(this.formsUrl+ '/'+id);
    }

    getReportObservationslips(){
      return this._http.get(this.formsUrl)
      .map(res => res.json());
    }

    countSyncObservationslips(){
      return this._http.get(this.formsUrl+'/count');
    }


    //save observationslip offline
    createObservationslip(observationslip: Observationslip){
      let body = JSON.stringify(observationslip);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
        // console.log(observationslip);
        return this._http.post(this.formsUrl, body, options)
      .map((response: Response) => response.json());

    }

    // update sync status
    updateSyncStatus(id){
      console.log(id);
      let body = JSON.stringify(id);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
        // console.log(body);
        return this._http.put(this.formsUrl+'/updateSyncStatus', body, options)
      .map((response: Response) => response.json());

    }


    //save observationslip online
    syncObservationslip(observationslip: Observationslip){
      let body = JSON.stringify(observationslip);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
          return this._http.post(this.wimeaOnlineApi, body, options)
      .map((response: Response) => response.json());

    }



}
