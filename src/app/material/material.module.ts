import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule,
         MatMenuModule, MatIconModule } from '@angular/material';

@NgModule({
imports: [ MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
           MatMenuModule, MatIconModule ],
exports: [ MatToolbarModule, MatButtonModule,  MatCardModule, MatFormFieldModule, MatInputModule,
           MatMenuModule, MatIconModule ],
})

export class MaterialModule { }
