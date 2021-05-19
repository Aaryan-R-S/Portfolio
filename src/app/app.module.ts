import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { SideBarsComponent } from './side-bars/side-bars.component';
import { FormsModule } from '@angular/forms';
import { GreetComponent } from './mainComponents/greet/greet.component';
import { AboutComponent } from './mainComponents/about/about.component';
import { WorkComponent } from './mainComponents/work/work.component';
import { ContactComponent } from './mainComponents/contact/contact.component';
import { FootFooterComponent } from './foot-footer/foot-footer.component';
import { MyProjectComponent } from './mainComponents/my-project/my-project.component';
import { AllProjectsComponent } from './mainComponents/all-projects/all-projects.component';
import { ArchiveComponent } from './mainComponents/archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideBarsComponent,
    GreetComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    FootFooterComponent,
    MyProjectComponent,
    AllProjectsComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
