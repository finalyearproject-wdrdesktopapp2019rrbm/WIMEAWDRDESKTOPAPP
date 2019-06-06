import { Component, OnInit } from '@angular/core';
import { DataService, ConnectionServiceService } from '../../services/allServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editobservationslip',
  templateUrl: './editobservationslip.component.html',
  styleUrls: ['./editobservationslip.component.scss']
})
export class EditobservationslipComponent implements OnInit {
 private connectionStatus;
 observationslip : any = {};
  constructor(
    private dataService: DataService,
    public conn: ConnectionServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    const slipId = JSON.parse(localStorage.getItem('editSlipId'));
    console.log(slipId);
    if(!slipId){
      alert('Invalid action.');
      this.router.navigate(['view-observationslips']);
      return;
    } else {
      this.getObservationslip(slipId);
    }

  }

  // getObservationslip(slipId){
  //   this.dataService.getObservationslip(slipId)
  //   .subscribe( Oslip => {
  //     console.log(Oslip);
  //     var slip = Oslip.json();
  //     this.observationslip = slip[0];
  //     console.log(this.observationslip);
  //   }, err => console.log(err));
  //
  // }

  getObservationslip(slipId){
    this.dataService.getObservationslip(slipId)
    .subscribe( Oslip => {
      this.observationslip = Oslip;
      console.log(this.observationslip);
    }, err => console.log(err));

  }

updateObservationslipData(){
  this.dataService.updateObservatonslip(this.observationslip)
  .subscribe( res =>{
    console.log(res);
  }, err => console.log(err));


  }

}
