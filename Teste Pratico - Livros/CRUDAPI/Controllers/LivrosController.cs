using CRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LivrosController : ControllerBase
    {
        private readonly Contexto _contexto;

        public LivrosController(Contexto contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<livro>>> PegarTodosAsync()
        {
            return await _contexto.Livros.ToListAsync();
        }

        [HttpGet("{livroId}")]
        public async Task<ActionResult<livro>> PegarLivroPeloIdAsync(int livroId)
        {
            livro livro = await _contexto.Livros.FindAsync(livroId);

            if (livro == null) 
                return NotFound();

            return livro;
        }

        [HttpPost]
        public async Task<ActionResult<livro>> SalvarLivroAsync(livro livro)
        {
            await _contexto.Livros.AddAsync(livro);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]

        public async Task<ActionResult> AtualizarLivroAsync(livro livro)
        {
            _contexto.Livros.Update(livro);
            await _contexto.SaveChangesAsync();

            return Ok();

        }
        [HttpDelete("{livroId}")]
        public async Task<ActionResult> ExcluirLivroAsync(int livroId)
        {
            livro livro = await _contexto.Livros.FindAsync(livroId);
            if (livro == null)
                return NotFound();

            _contexto.Remove(livro);
            await _contexto.SaveChangesAsync();
            return Ok();

        }
    }
}