using System.ComponentModel.DataAnnotations;

namespace Backend.Model
{
    public class Admin
    {

        [Key]
        public int Id { get; set; }

        public string? email { get; set; }

        public string? password { get; set; }

    }
}
