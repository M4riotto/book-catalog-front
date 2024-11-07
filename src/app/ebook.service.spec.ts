// Importação das dependências necessárias para o teste
import { TestBed } from '@angular/core/testing'; // TestBed é usado para configurar o módulo de teste
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; // Módulos para testar requisições HTTP
import { EbookService } from './ebook.service'; // Serviço que estamos testando

// Descrevendo o conjunto de testes para o EbookService
describe('EbookService', () => {
  let service: EbookService; // Variável que armazenará a instância do serviço
  let httpMock: HttpTestingController; // Variável para controlar as requisições HTTP mockadas
  const apiUrl = 'http://localhost:3001/livros'; // URL base para os testes da API

  // Função que será executada antes de cada teste
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa o módulo de teste de HTTP
      providers: [EbookService], // Fornece o serviço EbookService para os testes
    });
    service = TestBed.inject(EbookService); // Injeta o serviço EbookService na variável 'service'
    httpMock = TestBed.inject(HttpTestingController); // Injeta o HttpTestingController para simular as requisições HTTP
  });

  // Teste para verificar se o serviço foi criado com sucesso
  it('should be created', () => {
    expect(service).toBeTruthy(); // Espera que o serviço seja verdadeiramente instanciado
  });

  // Teste para verificar se a função getLivros retorna uma lista de livros corretamente
  it('should fetch a list of livros', () => {
    const mockLivros = [{ id: 1, titulo: 'Livro 1' }, { id: 2, titulo: 'Livro 2' }]; // Dados simulados (mockados)

    // Chama o método getLivros() do serviço e assina o retorno (observable)
    service.getLivros().subscribe((livros) => {
      expect(livros.length).toBe(2); // Verifica se a quantidade de livros retornados é 2
      expect(livros).toEqual(mockLivros); // Verifica se os livros retornados são iguais ao mock
    });

    const req = httpMock.expectOne(apiUrl); // Espera que uma requisição seja feita para o apiUrl
    expect(req.request.method).toBe('GET'); // Verifica se a requisição foi do tipo GET
    req.flush(mockLivros); // Simula a resposta da requisição com os dados mockados
  });

  // Teste para verificar se a função getLivroDetalhes retorna detalhes de um livro
  it('should fetch livro details', () => {
    const mockLivro = { id: 1, titulo: 'Livro Detalhado', autor: 'Autor Detalhado' }; // Dados simulados

    // Chama o método getLivroDetalhes() e assina o retorno
    service.getLivroDetalhes('1').subscribe((livro) => {
      expect(livro).toEqual(mockLivro); // Verifica se o livro retornado é igual ao mock
    });

    const req = httpMock.expectOne(`${apiUrl}/1`); // Espera que uma requisição seja feita para o livro com id 1
    expect(req.request.method).toBe('GET'); // Verifica se a requisição foi do tipo GET
    req.flush(mockLivro); // Simula a resposta da requisição com os dados mockados
  });

  // Teste para verificar se a função editLivro realiza a edição de um livro
  it('should edit a livro', () => {
    const mockLivro = { id: 1, titulo: 'Livro Editado', autor: 'Autor Editado' }; // Dados simulados

    // Chama o método editLivro() para editar o livro com id 1
    service.editLivro('1', mockLivro).subscribe((livro) => {
      expect(livro).toEqual(mockLivro); // Verifica se o livro retornado após edição é igual ao mock
    });

    const req = httpMock.expectOne(`${apiUrl}/1`); // Espera que uma requisição seja feita para o livro com id 1
    expect(req.request.method).toBe('PUT'); // Verifica se a requisição foi do tipo PUT
    req.flush(mockLivro); // Simula a resposta da requisição com os dados mockados
  });

  // Teste para verificar se a função createLivro cria um novo livro
  it('should create a livro', () => {
    const newLivro = { titulo: 'Novo Livro', autor: 'Novo Autor' }; // Dados simulados para um novo livro

    // Chama o método createLivro() para criar um novo livro
    service.createLivro(newLivro).subscribe((livro) => {
      expect(livro).toEqual(newLivro); // Verifica se o livro criado é igual ao mock
    });

    const req = httpMock.expectOne(apiUrl); // Espera que uma requisição seja feita para a URL da criação de livros
    expect(req.request.method).toBe('POST'); // Verifica se a requisição foi do tipo POST
    req.flush(newLivro); // Simula a resposta da requisição com os dados mockados
  });

  // Teste para verificar se a função deleteLivro deleta um livro
  it('should delete a livro', () => {
    // Chama o método deleteLivro() para deletar o livro com id 1
    service.deleteLivro('1').subscribe((response) => {
      expect(response).toBeNull(); // Verifica se a resposta da exclusão é null (ou seja, sucesso)
    });

    const req = httpMock.expectOne(`${apiUrl}/1`); // Espera que uma requisição seja feita para deletar o livro com id 1
    expect(req.request.method).toBe('DELETE'); // Verifica se a requisição foi do tipo DELETE
    req.flush(null); // Simula a resposta da requisição com valor null
  });

  // Função que é executada após cada teste para verificar se não há requisições HTTP pendentes
  afterEach(() => {
    httpMock.verify(); // Verifica se todas as requisições mockadas foram realizadas corretamente
  });
});
