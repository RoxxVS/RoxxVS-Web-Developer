const pestañas = document.querySelectorAll('.pestaña');
const contenidos = document.querySelectorAll('.contenido');

pestañas.forEach(pestaña => {
    pestaña.addEventListener('click', () => {
        const target = pestaña.dataset.target;

        // Desactiva las pestañas y los contenidos activos
        pestañas.forEach(p => p.classList.remove('activa'));
        contenidos.forEach(c => c.classList.remove('activo'));

        // Activa la pestaña y el contenido seleccionados
        pestaña.classList.add('activa');
        document.getElementById(target).classList.add('activo');
    });
});

const pestañasProy = document.querySelectorAll('.pestañaProy');
const contenidosProy = document.querySelectorAll('.contenidoProy');

pestañasProy.forEach(pestañaProy => {
    pestañaProy.addEventListener('click', () => {
        const target = pestañaProy.dataset.target;

        // Desactiva las pestañas y los contenidos activos
        pestañasProy.forEach(p => p.classList.remove('proyActiva'));
        contenidosProy.forEach(c => c.classList.remove('proyActivo'));

        // Activa la pestaña y el contenido seleccionados
        pestañaProy.classList.add('proyActiva');
        document.getElementById(target).classList.add('proyActivo');
    });
});

const enlaces = document.querySelectorAll("#proyectos .galeria a");
enlaces.forEach(enlace => {
    enlace.addEventListener("mouseover", () => {
        enlace.querySelector("img").classList.remove("visible");
        enlace.querySelector("img").classList.add("oculto");
        enlace.querySelector("video").classList.remove("oculto");
        enlace.querySelector("video").classList.add("visible");
    })
    enlace.addEventListener("mouseout", () => {
        enlace.querySelector("img").classList.remove("oculto");
        enlace.querySelector("img").classList.add("visible");
        enlace.querySelector("video").classList.remove("visible");
        enlace.querySelector("video").classList.add("oculto");
    })
});
