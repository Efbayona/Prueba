import { Component } from '@angular/core';
import {LoadingService} from "@app/core/services/loading/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = this._loader.loading$;

  constructor(
    private _loader: LoadingService,
  ) {

  }
}
