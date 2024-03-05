import { Routes } from '@angular/router';
import { PustoComponent } from './pusto/pusto.component';
import { StronaComponent } from './strona/strona.component';

export const routes: Routes = [
    { path: "", component: PustoComponent },
    { path: "strona", component: StronaComponent }
];
