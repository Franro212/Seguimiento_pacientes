/** @type {import('tailwindcss').Config} */
module.exports = {
  //se coloca dentro del arreglo todos los archivos que se le quiere agregar tailwind
  // **/*.jsk esto significa que le da estilos a todos los archivos jsk dentro de la carpeta src
  content: ['index.html', './src/**/*.jsx'],
  theme: {
    extend: {},
  },
  plugins: [],
}
