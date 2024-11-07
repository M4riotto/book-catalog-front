import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EbookService } from './ebook.service';

describe('EbookService', () => {
  let service: EbookService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:3001/livros'; // URL base para testes

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EbookService],
    });
    service = TestBed.inject(EbookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a list of livros', () => {
    const mockLivros = [{ id: 1, titulo: 'Livro 1' }, { id: 2, titulo: 'Livro 2' }];

    service.getLivros().subscribe((livros) => {
      expect(livros.length).toBe(2);
      expect(livros).toEqual(mockLivros);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockLivros);
  });

  it('should fetch livro details', () => {
    const mockLivro = { id: 1, titulo: 'Livro Detalhado', autor: 'Autor Detalhado' };

    service.getLivroDetalhes('1').subscribe((livro) => {
      expect(livro).toEqual(mockLivro);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockLivro);
  });

  it('should edit a livro', () => {
    const mockLivro = { id: 1, titulo: 'Livro Editado', autor: 'Autor Editado' };

    service.editLivro('1', mockLivro).subscribe((livro) => {
      expect(livro).toEqual(mockLivro);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockLivro);
  });

  it('should create a livro', () => {
    const newLivro = { titulo: 'Novo Livro', autor: 'Novo Autor' };

    service.createLivro(newLivro).subscribe((livro) => {
      expect(livro).toEqual(newLivro);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    req.flush(newLivro);
  });

  it('should delete a livro', () => {
    service.deleteLivro('1').subscribe((response) => {
      expect(response).toBeNull(); // Supondo que a API retorne um null ou vazio após exclusão
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica se não há requisições pendentes
  });
});
