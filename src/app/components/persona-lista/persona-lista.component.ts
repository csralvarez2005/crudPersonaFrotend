import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../models/persona.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-persona-lista',
  standalone: true,
  imports: [CommonModule,RouterModule], 
  templateUrl: './persona-lista.component.html',
})
export class PersonaListaComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe({
      next: (data) => (this.personas = data),
      error: (err) => console.error('Error cargando personas', err),
    });
  }
}
