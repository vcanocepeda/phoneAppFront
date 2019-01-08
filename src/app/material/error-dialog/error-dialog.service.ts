import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from './error-dialog.component';

@Injectable()
export class ErrorDialogService {

    constructor(public dialog: MatDialog) { }
    openDialog(data): void {
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: '300px',
            data: {
                error: data.error,
                description: data.description
              }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            let animal;
            animal = result;
        });
    }
}
