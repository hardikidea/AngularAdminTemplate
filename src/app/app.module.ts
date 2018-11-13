import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './Layout/top-header.component';
import { LeftSidebarComponent } from './Layout/left-sidebar.component';
import { BreadcrumbComponent } from './Layout/breadcrumb.component';
import { DashboardComponent } from './Layout/dashboard.component';
import { FooterComponent } from './Layout/footer.component';
import { TablesComponent } from './Layout/tables.component';
import { ChartsComponent } from './Layout/charts.component';
import { WidgetsComponent } from './Layout/widgets.component';
import { GridComponent } from './Layout/grid.component';
import { FormBasicComponent } from './Layout/form-basic.component';
import { FormWizardComponent } from './Layout/form-wizard.component';
import { PagesButtonsComponent } from './Layout/pages-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    LeftSidebarComponent,
    BreadcrumbComponent,
    DashboardComponent,
    FooterComponent,
    TablesComponent,
    ChartsComponent,
    WidgetsComponent,
    GridComponent,
    FormBasicComponent,
    FormWizardComponent,
    PagesButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
