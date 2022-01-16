using Microsoft.EntityFrameworkCore;

namespace PostsApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Post> Posts { get; set; }
    }
}
