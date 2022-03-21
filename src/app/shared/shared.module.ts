import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FileComponent } from './file/file.component';


@NgModule({
  declarations: [FileComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [FileComponent],
})
export class SharedModule {}
