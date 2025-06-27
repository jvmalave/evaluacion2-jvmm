
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-mi-contacto',
  templateUrl: './mi-contacto.page.html',
  
  styleUrls: ['./mi-contacto.page.scss'],
})
export class MiContactoPage implements OnInit {

  solicitudForm: FormGroup;
  

  tiposApp = ['Android', 'iOS', 'Híbrida'];
  presupuestos = ['$0 - $300', '$300 - $500', '$500 - $750', 'Mas de $750'];
  nombreSolicitante: string = "";


  constructor(private fb: FormBuilder,  private toastController: ToastController ) {
    this.solicitudForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.pattern('^0[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      tipoApp: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(20)]],
      presupuesto: [''],
      aceptaTerminos: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {}

  async enviarFormulario() {
  if (this.solicitudForm.valid) {
    console.log('Formulario válido, datos enviados:', this.solicitudForm.value);
    const nombre = this.solicitudForm.value.nombre;
    this.nombreSolicitante = this.solicitudForm.value.nombre;
    await this.mostrarToast(
      `¡Super ${ this.nombreSolicitante }!,  
        Tu solicitud fué enviada con éxito! Nos pondremos en contacto pronto.`
      );
    this.solicitudForm.reset();
  } else {
    this.solicitudForm.markAllAsTouched();
  }
}
async mostrarToast(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 14000, // duración en ms
    position: 'top',
    color: 'secondary',
    icon: 'checkmark-circle-outline'
  });
  toast.present();
  }
}

