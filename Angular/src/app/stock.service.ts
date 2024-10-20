// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class StockService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = 'https://www.alphavantage.co/query';
  private apiKey = 'HE5IVHE8FKBSJY0E';

  constructor(private http: HttpClient) {}

  getStockSummary(keyword: string): Observable<any> {
    const url = `${this.apiUrl}?function=OVERVIEW&symbol=${keyword}&apikey=${this.apiKey}`;
    return this.http.get(url);
  }

  searchStocks(keyword: string): Observable<any> {
    const url = `${this.apiUrl}?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${this.apiKey}`;
    return this.http.get(url);
  }

  getDailyData(symbol: string): Observable<any> {
    const url = `${this.apiUrl}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${this.apiKey}`;
    return this.http.get(url);
  }
}
