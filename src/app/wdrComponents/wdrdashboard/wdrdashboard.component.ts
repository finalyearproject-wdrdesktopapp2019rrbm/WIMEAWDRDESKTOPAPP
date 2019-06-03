import { Component, OnInit,NgModule, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TokenStorageService } from '../services/allServices';
import {  NbMenuModule } from '@nebular/theme';


@Component({
  selector: 'app-wdrdashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './wdrdashboard.component.html',
  styleUrls: ['./wdrdashboard.component.scss']
})
export class WdrdashboardComponent implements OnInit {
  private roles: string[];
  private authority: string;

  observerMenu = [
    {
      title: 'Home',
      expanded: true,
      children: [
        {
          title: 'Home',
          link: ['/home']
        },
        {
          title: 'Login role',
          link: ['auth/login'],
        },
        {
          title: 'Sign Out',
          link: ['auth/login'],
        }
      ]
    },
    {
      title: 'Profile',
      children: [
        {
          title: 'Change Password',
          link: [],
        },
        {
          title: 'Edit profile',
          link: [],
        }
      ],
    },
    {
      title: 'Observationslip',
      children: [
        {
          title: 'Add observationslip',
          link: ['/add-observationslip'],
        },
        {
          title: 'Edit observationslip',
          link: ['/view-observationslip'],
        },
        {
          title: 'View observationslips',
          link: ['/view-observationslips'],
        }
      ],
    },{
      title: 'Import Data',
      children: [
        {
          title: 'Import CSV Data',
          link: [],
        },
      ]
    }]

  // oc menu

  items = [
    {
      title: 'Home',
      expanded: true,
      children: [
        {
          title: 'Home',
          link: ['home']
        },
        {
          title: 'Login role',
          link: ['auth/login'],
        },
        {
          title: 'Sign Out',
          link: ['auth/login'],
        }
      ]
    },
    {
      title: 'Profile',
      children: [
        {
          title: 'Change Password',
          link: [],
        },
        {
          title: 'Edit profile',
          link: [],
        }
      ],
    },
    {
      title: 'Observationslip',
      children: [
        {
          title: 'Add observationslip',
          link: [],
        },
        {
          title: 'Edit observationslip',
          link: [],
        },
        {
          title: 'View observationslips',
          link: [],
        }
      ],
    },{
      title: 'Import Data',
      children: [
        {
          title: 'Import CSV Data',
          link: [],
        },
      ]
    },
    {
      title: 'Export Data',
      children: [
        {
          title: 'Import CSV Data',
          link: [],
        },
      ]
    },

    {
      title: 'Report',
      children: [
        {
          title: 'Observationslip Report',
          link: [],
        },
        {
          title: 'Meta Report',
          link: [],
        },
        {
          title: 'Weather Summary Report',
          link: [],
        },
        {
          title: 'Dekadal Report',
          link: [],
        },
        {
          title: 'Synoptic Report',
          link: [],
        },
        {
          title: 'Monthly Reainfall Report',
          link: [],
        },
        {
          title: 'Annual Rainfall Report',
          link: [],
        },
        {
          title: 'Custainfall Report',
          link: [],
        }
      ],
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit() {
    if ( this.tokenStorage.getToken()) {
      this.roles =  this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if ( role === 'MANAGERDATA') {
          this.authority = 'managerData';
          return false;
        } else if ( role === 'ROLE_OC') {
          this.authority = 'oc';
          return false;
        } else {
          this.authority = 'observer';
          return true;
      }
      });
    }
  }

}
