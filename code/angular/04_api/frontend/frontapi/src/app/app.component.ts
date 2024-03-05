import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KlientapiService } from './klientapi.service';
import { Pogoda } from './shared/pogoda';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  lista: Array<Pogoda> = [];

  constructor(private klientApi: KlientapiService) { }

  pobierzApi(): void {
    this.klientApi.getData().subscribe(data => {
      console.log(data);
      this.lista = data;
    });
  }
}
