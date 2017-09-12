import {Routes} from '@angular/router';
import { HomeComponent } from './views/home.component';
import { JavaComponent } from './views/java.component';
import { AndroidComponent } from './views/android.component';
import { EntryEmployeeComponent } from './views/entryEmployee.component';
import { EmpModalComponent } from './views/empModal.component';

export const routes:Routes=[
{path:'',component:HomeComponent},
{path:'java',component:JavaComponent},
{path:'android',component:AndroidComponent},
{path:'employee',component:EntryEmployeeComponent},
{path:'empmodal',component:EmpModalComponent}
]