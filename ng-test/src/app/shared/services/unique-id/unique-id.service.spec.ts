import { UniqueIdService } from "./unique-id.service"

describe(UniqueIdService.name, () => {
    
    it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
        const service = new UniqueIdService()
        const id = service.generatedUniqueIdWithPrefix('app') // gera o id
        expect(id).toContain('app-')
    })  
    
})


/**
 * Para gerar um teste, usamos o método describe que tem como primeiro argumento o
 * artefato que queremos testar e como segundo parâmetro uma função que diz tudo sobre
 * o teste do artefato. 
 * 
 * Para testar é necessário assumir alguns critérios que são executrados dentro da 
 * função it() que dentro dele, normalmente são testados métodos de funções.  
 * 
 * Existe uma convenção do Jasmine que sugere uma melhor descrição no método para testar.
 *    'método' should(deve fazer) 'ação' when(quando) 'condição'.
 * Neste caso seria: O método generatedUniqueIdWithPrefix deve gerar id quando for chamado
 * com prefixo. Neste caso, para saber se foi gerado um id com prefixo é necessário gerar
 * uma instância do serviço. Ao gerar od id, tenho uma expectativa que o id começe com o 
 * prefixo 'app-'. Para isso usamos a função expect() e seu primeiro parâmetro o valor que
 * desejamos comaprar com o esperado.  
 * 
 * 
 * 
 */