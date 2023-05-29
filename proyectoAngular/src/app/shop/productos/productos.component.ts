import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent{
  constructor(private dialogRef: MatDialogRef<ProductosComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
