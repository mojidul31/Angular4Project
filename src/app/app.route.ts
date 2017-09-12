import {Routes} from '@angular/router';
import { HomeComponent } from './views/home.component';
import { JavaComponent } from './views/java.component';
import { AndroidComponent } from './views/android.component';

export const routes:Routes=[
{path:'',component:HomeComponent},
{path:'java',component:JavaComponent},
{path:'android',component:AndroidComponent}
]