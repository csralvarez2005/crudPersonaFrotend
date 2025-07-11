import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private apiUrl = environment.apiUrl;  // ✅ Cargamos la URL desde el entorno

  constructor(private http: HttpClient) {}

  // Obtener lista de personas
  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }

  // Obtener una persona por ID
  getPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva persona
  crearPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl, persona);
  }

  // Actualizar una persona existente
  actualizarPersona(id: number, persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.apiUrl}/${id}`, persona);
  }

  // Eliminar una persona
  eliminarPersona(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
