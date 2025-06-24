import { Routes } from '@angular/router';
import { PersonaListaComponent } from './components/persona-lista/persona-lista.component';
import { PersonaFormularioComponent } from './components/persona-formulario/persona-formulario.component';

export const routes: Routes = [
  { path: '', redirectTo: 'personas', pathMatch: 'full' },
  { path: 'personas', component: PersonaListaComponent },
  { path: 'personas/nuevo', component: PersonaFormularioComponent },
];