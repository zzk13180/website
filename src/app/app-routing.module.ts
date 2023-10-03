import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsRoutingModule } from './projects/projects-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProjectsRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
