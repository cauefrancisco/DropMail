import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ClipboardModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ClipboardModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule
  ]
})
export class MaterialGlobalModule { }
