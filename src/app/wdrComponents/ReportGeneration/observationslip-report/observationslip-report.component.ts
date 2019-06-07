import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { DataService } from '../../services/data/data.service';
import { Observationslip } from '../../models/observationslip/observationslip';

@Component({
  selector: 'app-observationslip-report',
  templateUrl: './observationslip-report.component.html',
  styleUrls: ['./observationslip-report.component.scss']
})
export class ObservationslipReportComponent implements OnInit {
  observationslips: any = [];
  observationslip: any = [];
  userInfo;

  public captureScreen()
  {
    const data = document.getElementById('contentToConvert');
    html2canvas(data).then( canvas => {
      // settings
      let imgWidth = 208;
      let pageHeight = 295;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf =  new jspdf('orientation', 'mm', 'a3'); // potrait(orientation), mm(unit), A3, A4 pdf
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('ObservationslipReport.pdf'); // generated pdf

    });
  }

  public user;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getReportObservationslips()
    .subscribe( data => {
      this.observationslips = data;
      this.observationslip = this.observationslips[0];
      console.log(this.observationslip);
});
  }

}
