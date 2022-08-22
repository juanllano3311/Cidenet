using System.ComponentModel.DataAnnotations;

namespace Backend.Model
{
    public class Users
    {
        [Key]
        public int id { get; set; }
        public string? firstLastName { get; set; }

        public string? secondtLastName { get; set; }

        public string? firstName { get; set; }

        public string? othersNames { get; set; }

        public string? country { get; set; }

        public string? typeId { get; set; }

        public string? idNumber { get; set; }

        public string? email { get; set; }

        public bool status { get; set; }

        public string? area { get; set; }

        public DateTime registrationDate { get; set; }

        public DateTime admissionDate { get; set; }

    }
}
