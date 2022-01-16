using System.ComponentModel.DataAnnotations;

namespace PostsApi
{
    public class Post
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string title { get; set; } = String.Empty;

        [StringLength(255)]
        public string body { get; set; } = String.Empty;
    }
}
