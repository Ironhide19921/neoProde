import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements AfterViewInit {
  @ViewChild('slidePrincipal') slides: IonSlides;
  ruta = {
    name: 'tab2',
    path: '/main/tab2',
  };
  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true,
    },
    {
      img: 'av-2.png',
      seleccionado: false,
    },
    {
      img: 'av-3.png',
      seleccionado: false,
    },
    {
      img: 'av-4.png',
      seleccionado: false,
    },
    {
      img: 'av-5.png',
      seleccionado: false,
    },
    {
      img: 'av-6.png',
      seleccionado: false,
    },
    {
      img: 'av-7.png',
      seleccionado: false,
    },
    {
      img: 'av-8.png',
      seleccionado: false,
    },
  ];

  avatarSlide = {
    slidesPerView: 3.5,
  };

  loginUser = {
    email: 'test1@test.com',
    password: '123456',
  };
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
  }

  login(fLogin: NgForm) {
    console.log(fLogin.valid);
    console.log(this.loginUser);
    this.router.navigate(['/main/tab2']);
  }

  registro(fRegistro: NgForm) {
    console.log(fRegistro.valid);
  }

  seleccionarAvatar(avatar) {
    this.avatars.forEach((av) => (av.seleccionado = false));
    avatar.seleccionado = true;
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }
  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }
}
