import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CombatEntityComponent } from './combat-entity/combat-entity.component';
import { CombatTrackerComponent } from './combat-tracker/combat-tracker.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CombatTrackerComponent,
    CombatEntityComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
