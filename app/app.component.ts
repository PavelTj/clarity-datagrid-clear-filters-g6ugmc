/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';
import { ClrDatagridColumn } from '@clr/angular';

import { USERS } from './users';

@Component({
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  users = USERS;

  @ViewChildren(ClrDatagridColumn) columns: QueryList<ClrDatagridColumn>;

  clear() {
    this.columns.forEach(column => column.filterValue = "");
  }
}