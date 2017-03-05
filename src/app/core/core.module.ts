import { NgModule } from '@angular/core';

import { DialogService } from './dialog.service';
import { ComposeMessageComponent } from "./compose-message.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports:[
    CommonModule,
    FormsModule
  ],
  declarations:[
    ComposeMessageComponent
  ],
  providers: [
    DialogService
  ],
  exports: [
    ComposeMessageComponent
  ]
})
export class CoreModule {}
