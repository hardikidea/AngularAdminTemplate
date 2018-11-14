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
import { IconMaterialComponent } from './Layout/icon-material.component';
import { IconFontawesomComponent } from './Layout/icon-fontawesom.component';
import { PagesElementsComponent } from './Layout/pages-elements.component';
import { PagesGalleryComponent } from './Layout/pages-gallery.component';
import { Index2Component } from './Layout/index2.component';
import { PagesCalendarComponent } from './Layout/pages-calendar.component';
import { PagesInvoiceComponent } from './Layout/pages-invoice.component';
import { PagesChatComponent } from './Layout/pages-chat.component';
import { AuthenticationLoginComponent } from './Layout/authentication-login.component';
import { AuthenticationRegisterComponent } from './Layout/authentication-register.component';
import { Error403Component } from './Layout/error403.component';
import { Error404Component } from './Layout/error404.component';
import { Error405Component } from './Layout/error405.component';
import { Error500Component } from './Layout/error500.component';

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
    PagesButtonsComponent,
    IconMaterialComponent,
    IconFontawesomComponent,
    PagesElementsComponent,
    PagesGalleryComponent,
    Index2Component,
    PagesCalendarComponent,
    PagesInvoiceComponent,
    PagesChatComponent,
    AuthenticationLoginComponent,
    AuthenticationRegisterComponent,
    Error403Component,
    Error404Component,
    Error405Component,
    Error500Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
