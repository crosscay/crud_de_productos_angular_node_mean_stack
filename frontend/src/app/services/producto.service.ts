import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  baseUrl: string = environment.baseUrl;

  headers: HttpHeaders = new HttpHeaders({
      "No-Auth": "True",
      "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  eliminarProducto(id: string):Observable<any> {
    return this.http.delete(this.baseUrl + id);
  }

  guardarProducto(producto: Producto):Observable<any> {
    return this.http.post(this.baseUrl, producto);
  }

  obtenerProducto(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}`);
  }

  editarProducto(id: string, producto: Producto): Observable<any> {
    return this.http.put(`${this.baseUrl}${id}`, producto);
  }
}
