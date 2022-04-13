# Technika Store
Technika es una tienda virtual de stickers, fue realizada como proyecto para el curso de React de CoderHouse. <br>
Esta hecho en con React 17.0.2 y Firebase como entorno para la base de datos, al principio iba ser responsive desde 1366x719 pero por la falta de tiempo no tuve tiempo, de todas maneras éste proyecto continuará un tiempo más en desarrollo.

<br>

## Demo Online 
Puedes probarlo en el siguiente link
<a href="https://leonelivann.github.io/Technika-Store"> Technika Store </a> <br>
<img src="https://media.giphy.com/media/jwkmmBAANAt36F79c2/giphy.gif" width="620" height="380" />


## Instalación
Necesitarás tener Git Bash o CMD y una carpeta donde almacenarlo <br> copia y pega la siguiente linea de código para clonar el repositorio a tu carpeta elegida
```bash
git clone https://github.com/LeonelIvann/Technika-Store
```
Presiona enter para crear tu clon local
```bash
git clone https://github.com/LeonelIvann/Technika-Store
> Cloning into `Mi-Carpeta`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
Ante ultimo paso, deberás instalar las depedencias del proyecto, copia y pega la siguiente linea en tu consola elegida previamente 
```bash
npm install
```
Inicia el repositorio
```bash
npm start
```

## Recursos
```
- Google Fonts
- Google Icons
- Firebase (Base de datos)
- React router DOM
- React Toastify
```
<br>

## Errores o problemas presentes

Actualmente hay 2 problemas en especifico.
- Carrito
    - El precio total qué seria la suma de todos los productos qué ingresa el usuario no se muestra.
- Filtrado
  - El menu tiene 3 opciones qué corresponde al tipo de sticker, no funciona.
  - El filtrado de la barra de busqueda no funciona.
- Responsive
    - Es muy probable qué en monitores menores a 1920x1080 algunos elementos del html no se vean
    ésto ocurre con mayor frecuencia a partir de la resolución 1366x719

<br>