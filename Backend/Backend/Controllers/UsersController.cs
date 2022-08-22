using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Model;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly BackendContext _context;

        public UsersController(BackendContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Users>>> GetUser()
        {
          if (_context.Users == null)
          {
              return NotFound();
          }
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Users>> GetUsers(int id)
        {
          if (_context.Users == null)
          {
              return NotFound();
          }
            var users = await _context.Users.FindAsync(id);

            if (users == null)
            {
                return NotFound();
            }

            return users;
        }

        // GET: api/Users/5
        [HttpGet("/api/Users/email/{email}")]
        public async Task<ActionResult<Users>> GetUsersByEmial(string email)
        {
            if (_context.Users == null)
            {
                return NotFound();
            }
            var users = await _context.Users.Where(x => x.email.Equals(email))
            .Select(c => new Users()
            {
                id = c.id,
                firstLastName = c.firstLastName,
                secondtLastName = c.secondtLastName,
                firstName = c.firstName,
                othersNames = c.othersNames,
                country = c.country,
                typeId = c.typeId,
                idNumber = c.idNumber,
                email = c.email,
                status = c.status,
                area = c.area,
                registrationDate = c.registrationDate,
                admissionDate = c.admissionDate,
            }).FirstOrDefaultAsync();

            if (users == null)
            {
                return null;
            }

            return users;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsers(int id, Users users)
        {
            if (id != users.id)
            {
                return BadRequest();
            }

            _context.Entry(users).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsersExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Users>> PostUsers(Users users)
        {
          if (_context.Users == null)
          {
              return Problem("Entity set 'BackendContext.User'  is null.");
          }
            _context.Users.Add(users);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
#pragma warning disable CS8604 // Posible argumento de referencia nulo
                if (UsersExists(users.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
#pragma warning restore CS8604 // Posible argumento de referencia nulo
            }

            return CreatedAtAction("GetUsers", new { id = users.id }, users);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsers(int id)
        {
            if (_context.Users == null)
            {
                return NotFound();
            }
            var users = await _context.Users.FindAsync(id);
            if (users == null)
            {
                return NotFound();
            }

            _context.Users.Remove(users);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UsersExists(int id)
        {
            return (_context.Users?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
