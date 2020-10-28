import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgxViewerModule } from 'ngx-viewer';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    NgxViewerModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
