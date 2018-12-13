import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule],
exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule ],
})

export class MaterialModule { }
