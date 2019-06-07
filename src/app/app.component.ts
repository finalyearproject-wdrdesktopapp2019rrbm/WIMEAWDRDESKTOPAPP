import { Component, OnInit,NgModule, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenStorageService } from './wdrComponents/services/allServices';
import {  NbMenuModule } from '@nebular/theme';
import { User } from './wdrComponents/models/user/user';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@NgModule({
  imports: [
    NbMenuModule
  ]
})

export class AppComponent implements OnInit {
  title = 'WDRDesktopApp';
  user: User[] = [];
   info: any;
  returnUrl = '';

  private roles: string[];
  private authority: string;

  managerDataMenu = [
    {
      title: 'Home',
      expanded: true,
      children: [
        {
          title: 'Login Role',
          link: ['home']
        }
      ]
    },
    {
      title: 'Profile',
      children: [
        {
          title: 'Change Password',
          link: ['change-password'],
        },
        {
          title: 'Edit profile',
          link: ['edit-user'],
        }
      ],
    },
    {
      title: 'OC',
      children: [
        {
          title: 'Add OC',
          link: []
        },
        {
          title: 'Edit OC',
          link: []
        }
      ]
    }

  ];

  observerMenu = [
    {
      title: 'Home',
      expanded: true,
      children: [
        {
          title: 'Login Role',
          link: ['home']
        }
      ]
    },
    {
      title: 'Profile',
      children: [
        {
          title: 'Change Password',
          link: ['change-password'],
        },
        {
          title: 'Edit profile',
          link: ['edit-user'],
        }
      ],
    },
    {
      title: 'Observationslip',
      children: [
        {
          title: 'Add observationslip',
          link: ['add-observationslip'],
        },
        {
          title: 'Edit observationslip',
          link: ['view-observationslips'],
        },
        {
          title: 'View observationslips',
          link: ['view-observationslips'],
        }
      ],
    },{
      title: 'Import Data',
      children: [
        {
          title: 'Import CSV Data',
          link: ['import-observationslip'],
        },
      ]
    }];

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
          link: ['change-password'],
        },
        {
          title: 'Edit profile',
          link: [],
        }
      ],
    },
    {
      title: 'User Management',
      children: [
        {
          title: 'Add a user',
          link: ['register']
        },
        {
          title: 'View users',
          link: ['view-users']
        },
        {
          title: 'Edit user details',
          link: ['edit-user']
        }
      ]
    },
    {
      title: 'Observationslip',
      children: [
        {
          title: 'View all observationslip',
          link: ['view-observationslips'],
        },
        {
          title: 'Submitted observationslip',
          link: [],
        }
      ],
    },{
      title: 'Import Data',
      children: [
        {
          title: 'Import CSV Data',
          link: ['import-observationslip'],
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
      title: 'Report Generation',
      children: [
        {
          title: 'Generate Observationslip Report',
          link: ['observationslip-report'],
        }
      ],
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  constructor(
    private token: TokenStorageService,
    private router : Router,
    private breakpointObserver: BreakpointObserver,
    private tokenStorage: TokenStorageService
  ){}

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
        } else
        this.authority = 'observer';
        return true;
      })
    }

    const loggedInUser = JSON.parse(localStorage.getItem('loggedinUser'));
    this.user = loggedInUser;

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.returnUrl = '';
    // window.location.reload();
  }

  public logout() {
    this.token.signOut();
    this.router.navigate(['/']);

    // window.location.reload();
  }

}
