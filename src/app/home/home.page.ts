import { Component, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  posts = signal<any[]>(
    []
  );
  constructor(private servicioService: ServicioService) {}
  ngOnInit() {
    this.servicioService.getPosts().subscribe({
      next: (data) => this.posts.set(data),
      error: (error) => console.error('Error al extraer datos: ',error),
    });
  }
}