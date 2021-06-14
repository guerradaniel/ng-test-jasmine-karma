import { UniqueIdService } from "./unique-id.service"

describe(UniqueIdService.name, () => {

	let service: UniqueIdService = null
	beforeEach(() => {
		service = new UniqueIdService()
	})

	it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} 
should return the number of generatedIds when called`, () => {
		service.generatedUniqueIdWithPrefix('app')
		service.generatedUniqueIdWithPrefix('app')
		expect(service.getNumberOfGeneratedUniqueIds()).toBe(2)
	})

	it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} 
	should generate id when called with prefix`, () => {
		const id = service.generatedUniqueIdWithPrefix('app') // gera o id
		expect(id.startsWith('app-')).toBeTrue()
	})

	it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} 
	should not generate duplicate IDs when called multiple times`, () => {
		const ids = new Set()
		for (let i = 0; i < 50; i++) {
			ids.add(service.generatedUniqueIdWithPrefix('app-'))
		}
		expect(ids.size).toBe(50)
	})

	it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
		should throw when called with empty`, () => {
			const emptyValues = [null, undefined, '']
			emptyValues.forEach(value => {
				expect(() => service.generatedUniqueIdWithPrefix(value))
				.withContext(`Empty value: ${value}`)
				.toThrow();
			})			
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
 * No método expect temos uma forma de tornar o teste mais preciso, afinal, nesse contexto
 * podemos ter um prefixo de 'app-' em qualquer circuntancia. No caso do método de usarmos
 * startsWith() e toBeTrue(), temos uma precisão maior no resultado.
 *
 * O segundo it conta com uma regra para evitar que IDs sejam duplicados. Para que a regra
 * tenha eficácia é necessário criar não só 2 mas muitos IDs para testar. Usando um laço
 * for, podemos criar o laço que uma constante recebe o valor em looping e que o expect
 * retorne o tamanho da quatidade de vezes que o valor assume a condicional do laço. Para
 * fazer essa verificação usamos a instância Set(). O Set por padrão não aceita elementos
 * duplicados.
 *
 * O Karma realiza os testes de forma aleatória. O ideal seria que cada teste tivesse sua
 * própria instância. Para resolver esse problema, temos a função beforeEach que, antes de
 * cada teste instancia uma variável para nosso service.
 * 
 * Para testar uma exception, podemos usar o método toThrow para saber se o id tem a possi-
 * bilidade de gerar um id null, em branco ou undefined. Para funcionar corretamente basta
 * colocarmos dentro de uma função. Para evitar a repetição de código e ter que escrever 
 * três valores para essa condição, podemos criar uma variável com um array que já armazena
 * os valores esperados. Para isso, criei um forEach que armazena os valores dentro de um 
 * laço.
 * No caso de meu método ter uma exceção que foge do comum, é necessário implementar um 
 * no próprio método testado. Ao criar um teste que está funcionando e fazer um refactor, 
 * parte desse comportamento que tinha foi quebrada por conta da mudança. O teste é uma 
 * condição fundamental do refactor do código.   
 * 
 * No caso de um test que tem como expect vários valores, precisamos de mais precisão em 
 * saber qual valor não passou. Para funcionar, é necessário passar um conexto para essa 
 * expectativa com o withContext(). Isso me dá flexibilidade de saber onde está o erro no 
 * loop.
 * 
 * Para testar um método boolean, o Jasmine nos oferece três funções que são muito usadas:
 * ToBeTrue, ToBe e ToBeTruthy. 
 * - ToBeTrue(): espera que seja retornado um tipo literal (valor true ou false).
 * - O ToBe(true): faz a comparação se o expect é literal para uma condição literal, por
 * 	exemplo. Caso sejam comparados dois objetos do mesmo tipo, o teste ainda falhará pois
 * 	os dois obejtos estão em endereços de memória diferentes.
 * - ToBeTruthy(): faz uma expectativa de forma mais genérica. Ou seja, desde que eu passe
 * 	algo que esteja dentro das regras do js, com excessão de null, '' ou undefined, o teste
 * 	passará.
 * 
 * 
 * 
 * 
 */