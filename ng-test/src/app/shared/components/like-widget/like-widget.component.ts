import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss']
})
export class LikeWidgetComponent implements OnInit {

  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = null;

  public fonts = { faThumbsUp };

  constructor(
    private uniqueIdService: UniqueIdService) { }

  public ngOnInit(): void {
    if(!this.id){
      this.id = this.uniqueIdService.generatedUniqueIdWithPrefix('like-widget');
    }
  }

  public like(): void {
    this.liked.emit();
  }

}


/**
 * O objetivo desse component é criar um botão de like que, ao clicar é emitido um evento
 * que se comunica com uma API trazendo a quantidade de likes clicadas. Para isso ele usa
 * duas injeções de dependencias para o botão e o id que é passado como parâmetro. Caso
 * não seja passado, meu component gera esse id dinamicamente.
 *
 *
 *
 *
 */