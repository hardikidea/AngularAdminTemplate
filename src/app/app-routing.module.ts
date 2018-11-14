import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Layout/dashboard.component';
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
import { Error405Component } from './Layout/error405.component';
import { Error404Component } from './Layout/error404.component';
import { Error500Component } from './Layout/error500.component';
import { SiteLayoutComponent } from './Layout/site-layout.component';

/*
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'widgets', component: WidgetsComponent },
  { path: 'grid', component: GridComponent },
  { path: 'form-basic', component: FormBasicComponent },
  { path: 'form-wizard', component: FormWizardComponent },
  { path: 'pages-buttons', component: PagesButtonsComponent },
  { path: 'icon-material', component: IconMaterialComponent },
  { path: 'icon-fontawesom', component: IconFontawesomComponent },
  { path: 'pages-elements', component: PagesElementsComponent },
  { path: 'pages-gallery', component: PagesGalleryComponent },
  { path: 'index2', component: Index2Component },
  { path: 'pages-calendar', component: PagesCalendarComponent },
  { path: 'pages-invoice', component: PagesInvoiceComponent },
  { path: 'pages-chat', component: PagesChatComponent },
  { path: 'authentication-login', component: AuthenticationLoginComponent },
  { path: 'authentication-register', component: AuthenticationRegisterComponent },
  { path: 'error403', component: Error403Component },
  { path: 'error404', component: Error404Component },
  { path: 'error405', component: Error405Component },
  { path: 'error500', component: Error500Component },
  { path: '**', component: DashboardComponent }
];
*/

const appRoutes: Routes = [

  // Site routes goes here
  {
      path: '',
      component: SiteLayoutComponent,
      children: [
        { path: '', component: DashboardComponent, pathMatch: 'full'},
        { path: 'tables', component: TablesComponent },
        { path: 'charts', component: ChartsComponent },
        { path: 'widgets', component: WidgetsComponent },
        { path: 'grid', component: GridComponent },
      { path: 'form-basic', component: FormBasicComponent },
      { path: 'form-wizard', component: FormWizardComponent },
      { path: 'pages-buttons', component: PagesButtonsComponent },
      { path: 'icon-material', component: IconMaterialComponent },
      { path: 'icon-fontawesom', component: IconFontawesomComponent },
      { path: 'pages-elements', component: PagesElementsComponent },
      { path: 'pages-gallery', component: PagesGalleryComponent },
      { path: 'index2', component: Index2Component },
      { path: 'pages-calendar', component: PagesCalendarComponent },
      { path: 'pages-invoice', component: PagesInvoiceComponent },
      { path: 'pages-chat', component: PagesChatComponent },
      { path: 'error403', component: Error403Component },
      { path: 'error404', component: Error404Component },
      { path: 'error405', component: Error405Component },
      { path: 'error500', component: Error500Component }
      ]
  },

  { path: 'login', component: AuthenticationLoginComponent},
  { path: 'register', component: AuthenticationRegisterComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
