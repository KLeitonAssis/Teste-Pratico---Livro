using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Models
{
    public class Contexto : DbContext
    {
        public DbSet<livro> Livros { get; set; }

        public Contexto(DbContextOptions<Contexto> opcoes) : base(opcoes) 
        { 

        }
    }

}