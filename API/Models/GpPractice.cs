using System.ComponentModel.DataAnnotations;

public class GpPractice{
    public int Id {get; set;}
    [Required]
    public string Name {get;set;}
    public string Address {get;set;}
    public string Email {get;set;}
    public string PhoneNumber {get;set;}
}