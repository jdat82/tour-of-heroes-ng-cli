import { NgModule } from '@angular/core';

import { DialogService } from './dialog.service';
import { ComposeMessageComponent } from "./compose-message/compose-message.component";
import { FormsModule } from "@angular/forms";
import { PageNotFoundComponent } from "./not-found.component";
import { CommonModule } from "@angular/common";
import { CovalentCoreModule } from '@covalent/core';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    CovalentCoreModule
  ],
  declarations:[
    ComposeMessageComponent,
    PageNotFoundComponent
  ],
  providers: [
    DialogService
  ],
  exports: [
  ]
})
export class CoreModule {}
