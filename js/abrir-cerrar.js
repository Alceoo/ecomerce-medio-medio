const btnCar = document.querySelector('#car');
const espacioCarrito = document.querySelector('.product-detail');


//Eventos

btnCar.addEventListener('click', sacaCarrito);


//Funciones

function sacaCarrito(){
    espacioCarrito.classList.toggle('activo');   
};

