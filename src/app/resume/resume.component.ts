import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.html',
  styleUrls: ['./resume.scss'],
})
export class AppResume {
  textoResumido: boolean = true;
  textoExpandido: boolean = false;

  toggleText() {
    this.textoResumido = false;
    this.textoExpandido = true;
  }
}
