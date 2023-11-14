import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomeComponent,
      }
    ])
  ]
})
export class PagesModule { }
