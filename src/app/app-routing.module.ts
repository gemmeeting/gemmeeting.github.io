import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' }, // homepage
  { path: 'home', component: HomepageComponent, pathMatch: 'full' }, // homepage


  { path: '**', redirectTo: '', pathMatch: 'full' }, // wild card
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
