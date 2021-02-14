import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listProductos: Producto[];
  constructor(private _productoService: ProductoService)
  {
    this.listProductos = [];
  }

  ngOnInit(): void {
    this.obtenerProducto();
  }

  obtenerProducto() {
    this._productoService.getProductos().subscribe((data: any) => {
      console.log(data);
      this.listProductos = data;
    }, (error: any) => {
      console.log(error);
    });
  }


}
