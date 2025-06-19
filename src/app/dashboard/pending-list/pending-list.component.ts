import { Component } from '@angular/core';

@Component({
  selector: 'app-pending-list',
  standalone: true,
  imports: [],
  templateUrl: './pending-list.component.html',
  styleUrl: './pending-list.component.css'
})
export class PendingListComponent {
  modalVisible : boolean = false;
  abrirModal() {
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
  }

  confirmarRecepcion() {
    alert('Recepción confirmada');
    this.cerrarModal();
  }

  rechazarRecepcion() {
    alert('Recepción rechazada');
    this.cerrarModal();
  }
}
