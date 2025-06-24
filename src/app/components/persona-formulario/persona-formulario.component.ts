import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-persona-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './persona-formulario.component.html',
  styleUrl: './persona-formulario.component.css'
})
export class PersonaFormularioComponent {
    personaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private personaService: PersonaService
  ) {
    this.personaForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      documento: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.personaForm.valid) {
      const nuevaPersona: Persona = this.personaForm.value;

      this.personaService.crearPersona(nuevaPersona).subscribe({
        next: (res) => {
          console.log('Persona creada', res);
          this.personaForm.reset();
          alert('Persona creada con éxito');
        },
        error: (err) => {
          console.error('Error al crear persona', err);
          alert('Hubo un error al crear la persona');
        }
      });
    }
  }

}
