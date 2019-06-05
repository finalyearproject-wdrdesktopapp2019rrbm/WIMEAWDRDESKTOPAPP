import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewobservationslip',
  templateUrl: './viewobservationslip.component.html',
  styleUrls: ['./viewobservationslip.component.scss']
})
export class ViewobservationslipComponent implements OnInit {
  observationslips: any = [];
  syncData:any = [];
  public unsyncedData:number;
  title = 'Observationslips';

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
        this.dataService.getAllObservationslips()
    .subscribe( data => {
      this.observationslips = data.json();
      console.log(this.observationslips);
    });

    this.dataService.countSyncObservationslips()
    .subscribe(res => {
      this.syncData = res.json();
      console.log(this.syncData);
      this.unsyncedData = this.syncData[0].number;
      console.log(this.unsyncedData);
    })

  }

  editObservationslip(id){
    localStorage.removeItem('editObservationslipId');
    let observationslipId = id.toString();
    localStorage.setItem('editSlipId', observationslipId);
    this.router.navigate(['edit-observationslip']);


  }

}
