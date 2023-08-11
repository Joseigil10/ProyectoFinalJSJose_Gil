// PRODUCTOS
const productos = [
  // Abrigos
  {
    id: "abrigo-01",
    titulo: "Abrigo 01",
    img: {
      src: "../images/abrigos/01.jpg",
    },
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  {
    id: "abrigo-02",
    titulo: "Abrigo 02",
    img: {
      src: "../images/abrigos/02.jpg",
    },
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  {
    id: "abrigo-03",
    titulo: "Abrigo 03",
    img: {
      src: "../images/abrigos/03.jpg",
    },
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  {
    id: "abrigo-04",
    titulo: "Abrigo 04",
    img: {
      src: "../images/abrigos/04.jpg",
    },
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  {
    id: "abrigo-05",
    titulo: "Abrigo 05",
    img: {
      src: "../images/abrigos/05.jpg",
    },
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  // Camisetas
  {
    id: "shirt-01",
    titulo: "Shirt 01",
    img: {
      src: "../images/shirts/01.jpg",
    },
    categoria: {
      nombre: "Camisetas",
      id: "shirts",
    },
    precio: 1000,
  },
  {
    id: "shirt-02",
    titulo: "Shirt 02",
    img: {
      src: "../images/shirts/02.jpg",
    },
    categoria: {
      nombre: "Camisetas",
      id: "shirts",
    },
    precio: 1000,
  },
  {
    id: "shirt-03",
    titulo: "Shirt 03",
    img: {
      src: "../images/shirts/03.jpg",
    },
    categoria: {
      nombre: "Camisetas",
      id: "shirts",
    },
    precio: 1000,
  },
  {
    id: "shirt-04",
    titulo: "Shirt 04",
    img: {
      src: "../images/shirts/04.jpg",
    },
    categoria: {
      nombre: "Camisetas",
      id: "shirts",
    },
    precio: 1000,
  },
  {
    id: "shirt-05",
    titulo: "Shirt 05",
    img: {
      src: "../images/shirts/05.jpg",
    },
    categoria: {
      nombre: "Camisetas",
      id: "shirts",
    },
    precio: 1000,
  },
  {
    id: "shirt-06",
    titulo: "Shirt 06",
    img: {
      src: "../images/shirts/06.jpg",
    },
    categoria: {
      nombre: "Camisetas",
      id: "shirts",
    },
    precio: 1000,
  },
  {
    id: "shirt-07",
    titulo: "Shirt 07",
    img: {
      src: "../images/shirts/07.jpg",
    },
    categoria: {
      nombre: "Camisetas",
      id: "shirts",
    },
    precio: 1000,
  },
  {
    id: "shirt-08",
    titulo: "Shirt 08",
    img: {
      src: "../images/shirts/08.jpg",
    },
    categoria: {
      nombre: "Camisetas",
      id: "shirts",
    },
    precio: 1000,
  },
  // Zapatos
  {
    id: "shoe-01",
    titulo: "Shoe 01",
    img: {
      src: "../images/shoes/01.jpg",
    },
    categoria: {
      nombre: "Zapatillas",
      id: "shoes",
    },
    precio: 1000,
  },
  {
    id: "shoe-02",
    titulo: "Shoe 02",
    img: {
      src: "../images/shoes/02.jpg",
    },
    categoria: {
      nombre: "Zapatillas",
      id: "shoes",
    },
    precio: 1000,
  },
  {
    id: "shoe-03",
    titulo: "Shoe 03",
    img: {
      src: "../images/shoes/03.jpg",
    },
    categoria: {
      nombre: "Zapatillas",
      id: "shoes",
    },
    precio: 1000,
  },
  {
    id: "shoe-04",
    titulo: "Shoe 04",
    img: {
      src: "../images/shoes/04.jpg",
    },
    categoria: {
      nombre: "Zapatillas",
      id: "shoes",
    },
    precio: 1000,
  },
  {
    id: "shoe-05",
    titulo: "Shoe 05",
    img: {
      src: "../images/shoes/05.jpg",
    },
    categoria: {
      nombre: "Zapatillas",
      id: "shoes",
    },
    precio: 1000,
  },
  {
    id: "shoe-06",
    titulo: "Shoe 06",
    img: {
      src: "../images/shoes/06.jpg",
    },
    categoria: {
      nombre: "Zapatillas",
      id: "shoes",
    },
    precio: 1000,
  },
  {
    id: "shoe-07",
    titulo: "Shoe 07",
    img: {
      src: "../images/shoes/07.jpg",
    },
    categoria: {
      nombre: "Zapatillas",
      id: "shoes",
    },
    precio: 1000,
  },
  {
    id: "shoe-08",
    titulo: "Shoe 08",
    img: {
      src: "../images/shoes/08.jpg",
    },
    categoria: {
      nombre: "Zapatillas",
      id: "shoes",
    },
    precio: 1000,
  },
  {
    id: "shoe-09",
    titulo: "Shoe 09",
    img: {
      src: "../images/shoes/09.jpg",
    },
    categoria: {
      nombre: "Zapatillas",
      id: "shoes",
    },
    precio: 1000,
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `<img class="producto-imagen " src="${producto.img.src}" alt="${producto.titulo}">
    <div class="producto-detalles">
        <h3 class="producto-titulo">
            ${producto.titulo}
        </h3>
        <p class="producto-precio">$${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>
    </div>`;
    contenedorProductos.append(div);
  });
  actualizarBotonesAgregar();
}
cargarProductos(productos);

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");
    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );

      tituloPrincipal.innerText = productoCategoria.categoria.nombre;
      const productosBoton = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerText = "Todos los productos.";
      cargarProductos(productos);
    }
  });
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}
let productosEnCarrito;

const productosEnCarritoLS = JSON.parse(
  localStorage.getItem("productos-en-carrito")
);
if (productosEnCarritoLS) {
  productosEnCarrito = productosEnCarritoLS;
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;

  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );
  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );
}
function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );

  numerito.innerText = nuevoNumerito;

  document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("botonLogin");

    loginButton.addEventListener("click", function () {
      Swal.fire({
        title: "Login",
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="Username">' +
          '<input id="swal-input2" class="swal2-input" placeholder="Password" type="password">',
        showCancelButton: true,
        confirmButtonText: "Login",
        preConfirm: () => {
          const username = Swal.getPopup().querySelector("#swal-input1").value;
          const password = Swal.getPopup().querySelector("#swal-input2").value;

          if (
            (username === "user1" && password === "123") ||
            (username === "user2" && password === "321")
          ) {
            Swal.fire("Success!", "Login successful!", "success");
          } else {
            Swal.fire("Error", "Invalid username or password", "error");
          }
        },
      });
    });
  });
}
