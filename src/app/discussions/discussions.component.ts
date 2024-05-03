import { Component } from '@angular/core';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.html',
  styleUrls: ['./discussions.scss'],
})
export class Discussions {
  // CARD
  cardTitle = 'Assunto da pergunta aparece aqui';
  cardAuthor = 'Carlos Henrique Santos';
  cardComment =
    'Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...';

  FormComment: boolean = false;
  beforeComent: boolean = true;

  commentForm() {
    this.FormComment = true;
    this.beforeComent = false;
  }
}
