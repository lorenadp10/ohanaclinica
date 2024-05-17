import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { DivisoresComponent } from './divisores/divisores.component';
import { SuperiorComponent } from './superior/superior.component';
import { FooterComponent } from './footer/footer.component';
import { ClinicaComponent } from './clinica/clinica.component';
import { HorarioComponent } from './horario/horario.component';
import { ValoresComponent } from './valores/valores.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, CabeceraComponent, EquipoComponent, ServiciosComponent, DivisoresComponent, SuperiorComponent, FooterComponent, ClinicaComponent, HorarioComponent, ValoresComponent, FormularioComponent, TestimoniosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'Ohana, clínica veterinaria';
  constructor(private titleService: Title) {
    this.titleService.setTitle('Ohana, clínica veterinaria');
  }
}