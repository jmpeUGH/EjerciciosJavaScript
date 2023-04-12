const movies = [
    { title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura'] },
    { title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción'] },
    { title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller'] },
    { title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación'] },
]


let categorias = [];

for (let pelicula of movies) {
    for (let categorie of pelicula.categories) {
        if (categorias.includes(categorie)) { } else { categorias.push(categorie) };
    }
}

console.log(categorias);

