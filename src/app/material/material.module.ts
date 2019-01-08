import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule,
         MatMenuModule, MatIconModule, MatDialogModule } from '@angular/material';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { ErrorDialogService } from './error-dialog/error-dialog.service';

@NgModule({
imports: [ MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
           MatMenuModule, MatIconModule, MatDialogModule ],
exports: [ MatToolbarModule, MatButtonModule,  MatCardModule, MatFormFieldModule, MatInputModule,
           MatMenuModule, MatIconModule, MatDialogModule ],
declarations: [ ErrorDialogComponent ],
providers: [ ErrorDialogService ],
entryComponents: [ErrorDialogComponent],
})

export class MaterialModule { }
