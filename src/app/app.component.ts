import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent  implements OnInit {

  public menuItems = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Mi Información Personal', url: '/informacion-personal', icon: 'person' },
    { title: 'Mi Contacto', url: '/mi-contacto', icon: 'chatbubble-ellipses' }
  ];
  darkMode: boolean = false;

  ngOnInit(): void {

    this.darkMode = localStorage.getItem('darkMode') === 'true';
    this.toggleDarkMode();
    
  }
  constructor() {}

  toggleDarkMode(){
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-theme', this.darkMode);
    localStorage.setItem('darkMode', String(this.darkMode));
  }

}
