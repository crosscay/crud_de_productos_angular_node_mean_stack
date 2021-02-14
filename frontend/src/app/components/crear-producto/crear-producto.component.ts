import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private _router: Router,
              private toastr: ToastrService,
              private _productoService: ProductoService) {
    this.productoForm = this._fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarProducto() {
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value
    }
    console.log(PRODUCTO);
    this._productoService.guardarProducto(PRODUCTO).subscribe((data: any) => {
      this.showSuccess();
      this._router.navigate(['/']);
    }, (error: any) => {
      console.log(error);
      this.productoForm.reset();
    });
  }

  showSuccess() {
    this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
  }

}
