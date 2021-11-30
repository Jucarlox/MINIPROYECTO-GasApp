import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GasolineraListComponent } from './components/gasolinera-list/gasolinera-list.component';
import { GasolineraItemComponent } from './components/gasolinera-item/gasolinera-item.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './modules/material-imports.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogGasolineraDetailComponent } from './dialogs/dialog-gasolinera-detail/dialog-gasolinera-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    GasolineraListComponent,
    GasolineraItemComponent,
    DialogGasolineraDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialImportsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    MatSliderModule
    
  ],
  entryComponents: [
    DialogGasolineraDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
