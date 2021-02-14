import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listProductos: Producto[];
  constructor(private _productoService: ProductoService, private toastr: ToastrService)
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

  eliminarProducto(id: any) {
    this._productoService.eliminarProducto(id).subscribe((data: any) => {
      this.toastr.success('El producto fue eliminado con exito','Producto Eliminado');
      this.obtenerProducto();
    }, (error: any) => {
      console.log(error);
    });
  }

}
