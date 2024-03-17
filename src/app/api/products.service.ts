import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "environments/environment.development";
import { Product } from "app/shared/models/product.interface";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  public products = new Subject<Product[]>();
  private readonly _http: HttpClient;
  private readonly _endPoint = environment.apiURL;

  constructor(private http: HttpClient) {
    this._http = http;
    this.getProducts();
  }

  public getProducts(): void {
    this._http.get<Product[]>(`${this._endPoint}?sort=desc`)
      .pipe(
        tap((data: Product[]) => this.products.next(data))
      )
      .subscribe();
  }

  public getProductById(id: number) {
    return this._http.get<Product>(`${this._endPoint}${id}`);
  }
}
