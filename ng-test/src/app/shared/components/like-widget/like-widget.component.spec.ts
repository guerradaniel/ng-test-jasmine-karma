import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    
  });

  it('Should create component', () => {
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });

});

/**
 * Em runtime, um component precisa pertencer a um módulo e em ambiente de teste
 * também será necessário. O TestBed é responsável por criar um módulo para meu
 * component em ambiente de teste.
 *
 * A cadeia de dependência profunda, isso é, quando nosso component tem mais de 
 * uma dependência, nos traz vários problemas pois seria o desenvolvedor 
 * responsável por testar todas elas.
 *
 * Quando trabalhamos com Angular, em momento algum instanciamos um component com
 * "new". Tudo é criado automaticamente pelo framework de forma de declarativa.
 * Por isso o Angular já cuida de tratar o ciclo de vida de cada component. Ao
 * instanciar com "new", perdemos essa possibilidade.
 *
 * O TestBed possui um método chamado configureTestingModule que cria o módulo 
 * para teste. É criado um declaration para importar o component. O bloco do 
 * beforeEach retorna uma promise e por isso é necessário o async/await para que 
 * essa chamada seja resolvida. O TestBed também passa sem async/await, porém 
 * desta forma é independente do builder (webpack) que estou usando e caso haja
 * alguma atualização, isso impede de que o teste pare de funcionar. 
 *
 * O ComponentFixture é um rapper responsável por embrulhar o componente e dar 
 * uma série de métodos que serão usados para testar. 
 *
 *
 *
 */