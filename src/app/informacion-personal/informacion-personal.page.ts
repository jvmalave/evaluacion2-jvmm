import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.page.html',
  styleUrls: ['./informacion-personal.page.scss'],
  standalone: false
})
export class InformacionPersonalPage implements OnInit {

  chatForm: FormGroup;
  mostrarChat = false;
  messages: any[] = [];
  nuevoMensaje: string = '';
  isTyping: boolean = false;
  typingTimeout: any;

  constructor(private formBuilder: FormBuilder) {
    this.chatForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      //userPhone: ['', [Validators.required, Validators.pattern('^0[0-9]{10}$')]]
    });
  }

  ngOnInit() {}

  abrirChat() {
    if (this.chatForm.valid) {
      this.mostrarChat = true;
      this.messages = [{
        sender: 'José V. Malave',
        text: `¡Hola ${this.chatForm.value.userName}! ¿En qué puedo ayudarte?`,
        time: this.obtenerHoraActual(),
        sent: false
      }];
    }
  }

  cerrarChat() {
    this.mostrarChat = false;
    this.nuevoMensaje = '';
    this.messages = [];
  }

  enviarMensaje() {
    if (this.nuevoMensaje.trim()) {
      this.messages.push({
        sender: this.chatForm.value.userName,
        text: this.nuevoMensaje,
        time: this.obtenerHoraActual(),
        sent: true
      });
      this.nuevoMensaje = '';
      setTimeout(() => {
        this.messages.push({
          sender: 'José V. Malave',
          text: '¡Gracias por tu mensaje! Pronto te responderé.',
          time: this.obtenerHoraActual(),
          sent: false
        });
      }, 1000);
    }
  }

  obtenerHoraActual(): string {
    const now = new Date();
    return now.getHours() + ':' + now.getMinutes().toString().padStart(2, '0');
  }

  onInputChange() {
  this.isTyping = true;
  clearTimeout(this.typingTimeout);
  this.typingTimeout = setTimeout(() => {
    this.isTyping = false;
  }, 1500); // se apaga el indicador tras 1.5s sin escribir
 }
}
