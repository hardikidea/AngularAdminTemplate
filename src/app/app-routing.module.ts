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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'widgets', component: WidgetsComponent },
  { path: 'grid', component: GridComponent },
  { path: 'form-basic', component: FormBasicComponent },
  { path: 'form-wizard', component: FormWizardComponent },
  { path: 'pages-buttons', component: PagesButtonsComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
