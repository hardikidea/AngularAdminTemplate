import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './Layout/top-header.component';
import { LeftSidebarComponent } from './Layout/left-sidebar.component';
import { BreadcrumbComponent } from './Layout/breadcrumb.component';
import { DashboardComponent } from './Layout/dashboard.component';
import { FooterComponent } from './Layout/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    LeftSidebarComponent,
    BreadcrumbComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
