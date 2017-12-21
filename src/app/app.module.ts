import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { CrudService } from './crud.service';
const appRoutes: Routes = [{
  
          path: '', component: HomeComponent,
    },
    {
      path: 'about', component: AboutComponent,
    },
    {
      path: 'crud', component: CrudComponent,
    }
   
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
