import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  headers: HttpHeaders = new HttpHeaders({
      "No-Auth": "True",
      "Content-Type": "application/json"
  });

  url = 'http://localhost:4000/api/productos/';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarProducto(id: string):Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarProducto(producto: Producto):Observable<any> {
    return this.http.post(this.url, producto);
  }
}
