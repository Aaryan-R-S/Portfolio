import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './mainComponents/archive/archive.component';
import { GreetComponent } from './mainComponents/greet/greet.component';

/* *************************** Routing Path -> Main + Archive ***************************** */
const routes: Routes = [
  {path: '', component:GreetComponent},
  {path: 'archive', component:ArchiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
