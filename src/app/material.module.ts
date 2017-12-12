import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatFormFieldControl,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDatepickerToggle,
  MatOptionModule,
  MatOption,
  MatSelectModule,
  MatSelect,
  MatDialogModule,
  MatCard,
  MatExpansionModule,
  MatMenuPanel,
  MatProgressSpinnerModule,
  MatSpinner,
  MatTableModule,
  MatPaginator,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule

  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatOption,
    MatSelectModule,
    MatSelect,
    MatDialogModule,
    MatCard,
    MatExpansionModule,
    MatSpinner,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ]
})
export class MaterialModule {}
