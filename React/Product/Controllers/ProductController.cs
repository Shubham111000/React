using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol.Core.Types;
using Product.Models;

namespace Product.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;

        public ProductController(IProductRepository repository)
        {
            _productRepository = repository;

        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product.Models.Product>?>> GetProducts()
        {
            if (await _productRepository.GetAllProducts() == null)
            {
                return NotFound();
            }

            return await _productRepository.GetAllProducts();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Product.Models.Product>> GetById_ActionResultOfT(int id)
        {
            var employee = await _productRepository.GetProduct(id);
            return employee == null ? NotFound() : employee;
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product.Models.Product product )
        {
            if (id != product.Id)
            {
                return BadRequest();
            }
            try
            {
                await _productRepository.Update(id, product);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_productRepository.GetProduct(id) == null)
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
        [HttpPost]
        public async Task<ActionResult<Product.Models.Product>> PostProduct(Product.Models.Product product)
        {
            await _productRepository.Add(product);
            return CreatedAtAction("PostEmployee", new { id = product.Id }, product);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            if (_productRepository.GetAllProducts() == null)
            {
                return NotFound();
            }
            var employee = await _productRepository.Delete(id);
            if (employee == null)
            {
                return NotFound();
            }
            await _productRepository.Delete(employee.Id);
            return NoContent();
        }

    }
}
