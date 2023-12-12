function removeItem(index) {
    if (carrito.length > 1) {
      carrito.splice(index, 1);
      products.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      document.getElementById(`row${index}`).remove();
    } else {
      localStorage.removeItem("carrito");
      products = [];
      setCarritoVacio();
    }
  
    let cartNumber = document.querySelector(".cart-number");
    cartNumber.innerText = productsEnElCarrito();
  
    document.querySelector(".totalAmount").innerText = `$ ${calcularTotal(
      products
    )}`;
  
    console.log("Se borro el item del carrito");
  }
  
  function setCarritoVacio() {
    cartRows.innerHTML = `
    <tr>     
        <td colspan="5"><div class="alert alert-warning my-2 text-center">No tienes products en el carrito</div></td>
    </tr>            
    `;
  }
  function vaciarCarrito() {
    localStorage.removeItem("carrito");
  }
  
  function calcularTotal(products) {
    return products.reduce(
      (acum, product) => (acum += product.price * product.quantity),
      0
    );
  }
  
  let cartRows = document.querySelector(".cartRows");
  let products = [];
  
  if (localStorage.carrito && localStorage.carrito != "[]") {
    carrito = JSON.parse(localStorage.carrito);
    carrito.forEach((item, index) => {
        const article = document.querySelector(`#row${index}`);
        article.querySelector(".cart_product-title").innerText = item.name
        article.querySelector(".cart_product-price").innerText = `$ ${item.price}`;
        article.querySelector(".cart_product_quantity").innerText = `${item.quantity}`
        article.querySelector(".cart_product_total-quantity").innerText = `${(item.price * item.quantity).toFixed(2)}`
        
        article.querySelector(".btn-container button:nth-child(1)").onclick = () => removeItem(index); // remove item
        article.querySelector(".btn-container button:nth-child(2)").onclick = () => buyNow(index); // buy now
        totalAmount += item.price * item.quantity;
        })

  } else {
    setCarritoVacio();
  }
  
  