# 💻 Global66 Challenge Técnico

## 📝 Resumen

El proyecto consiste en crear una aplicación web que permita a los usuarios buscar, filtrar, ver información sobre Pokemons y agregarlos o quitarlos de una lista de favoritos.
La aplicación debe ser responsive y capaz de mostrar información detallada sobre cada Pokémon, incluyendo su nombre, número, tipo, estadísticas, habilidades y debilidades.

- La plataforma fue desarrollada utilizando principalmente las siguientes tecnologías:
    - Vue.js 3
    - JavaScript
    - TypeScript
    - HTML5
    - CSS3
    - Vite
    - Tailwind.css
    - Pinia

- Se desarrollaron las siguientes secciones: 
    - Dos vistas de Onboarding
    - Pokedex: Lista de Pokemons
    - Regiones: Sección dummy que muestra un mensaje de construcción
    - Favoritos: Lista de Pokemons favoritos
    - Perfil: Sección dummy que muestra un mensaje de construcción

## ⚙️ Pasos de instalación del proyecto

Abre una terminal y ejecuta los siguientes comandos.

**1. Seleccioná la ubicación del repositorio**

Elegí el directorio donde querés crear el proyecto:

<code>cd main-folder/folder</code>

**2. Cloná el repositorio usando HTTPS, SSH o GitHub CLI**

La opción más común es **HTTPS**. Para hacerlo con este método, ejecutá el siguiente comando:

<code>git clone https://github.com/tobias-irigoyen/global66-challenge</code>

**3. Instalá las dependencias necesarias**

Una vez dentro de la carpeta del proyecto, ejecutá el siguiente comando para instalar todas las dependencias:

<code>npm install</code>

**5. Modo de desarrollo**

Ejecutá el proyecto en modo de desarrollo para verificar que todo funcione correctamente:

<code>npm run dev</code>

**6. Generar la versión de producción**

Generá la versión de producción del proyecto ejecutando el siguiente comando:

<code>npm run build</code>

**7. Previsualizar el proyecto**

Previsualizá localmente la versión de producción del proyecto ejecutando el siguiente comando:

<code>npm run preview</code>

---

## ✅ Testing

- Para ejecutar los tests con una interfaz gráfica, ejecutá el siguiente comando:

<code>npm run test:ui</code>

- Para ejecutar los tests en modo headless, ejecutá el siguiente comando:

<code>npm run test</code>

---

## 🛠️ Dependencias y herramientas

### Vite
- Utilicé Vite para montar el proyecto desde cero, configurarlo y preparar la estructura inicial.

### TypeScript
- Utilicé TypeScript para realizar tipados y hacer la aplicación más robusta y mantenible.

### Pinia
- Utilicé Pinia para crear stores, manejar el estado global de la aplicación y persistir datos en `localStorage`.

### Vue Router
- Utilicé Vue Router para gestionar el ruteo de la aplicación y el manejo de sus URLs.

### Tailwind CSS
- Utilicé Tailwind CSS para aplicar estilos mediante clases utilitarias.

### Vue Sonner
- Utilicé Vue Sonner para implementar Toasts informativos.

### Vitest
- Utilicé Vitest para desarrollar pruebas unitarias.

### Prettier
- Utilicé Prettier para formatear el código y así estandarizarlo.

### Figma
- Utilicé Figma Desktop para obtener la información de la interfaz de usuario y comprender el flujo de navegación.

### Adobe Illustrator
- Utilicé Adobe Illustrator para modificar algunos íconos vectoriales.

### Adobe Photoshop
- Utilicé Adobe Photoshop para recortar y adaptar ciertas imágenes a la interfaz proporcionada.

------

## ℹ️ Información sobre la app

La app está compuesta por las siguientes secciones y funcionalidades:

### Onboarding
En esta sección se pueden visualizar dos vistas de onboarding navegables entre sí. Contiene una imagen, texto, y un call to action para navegar hacia la siguiente vista. El destino final de la sección es la sección Pokedex.

### Pokedex

En esta sección se visualizan 150 Pokemons con su número, nombre, sprite (imagen), tipos y botón para agregar/quitar de favoritos. A todos los Pokemons se les puede hacer click para entrar a la vista de detalle del mismo.
Cuenta con las siguientes funcionalidades: 
- **Filtrado**: Presionando el botón adyacente al de búsqueda se abrirá un panel con todos los tipos de Pokemons y checkboxes clickeables para seleccionar el tipo por el cual se quieren filtrar los 150 Pokemons. Se puede seleccionar más de un tipo.
En caso de que no haya coincidencias, aparecerá una vista de "Sin resultados" que permitirá resetear los filtros y hacer una nueva búsqueda.

- **Búsqueda**: En la parte superior de la pantalla hay un campo de búsqueda en el que se puede ingresar el nombre del Pokemon deseado y luego hay dos opciones de ejecutar la búsqueda:
1. Presionar la tecla enter del teclado.
2. Presionar el botón con la lupa que se encuentra a la derecha del campo de búsqueda.

En el mismo caso del filtrado,en caso de no haber coincidencias, aparecerá la vista de "Sin resultados".

### Regiones y Perfil

Estas secciones son páginas en construcción meramente informativas.

### Favoritos

En esta sección aparecerán los Pokemon que se hayan marcado como favoritos. Se los puede quitar de favoritos, presionando el botón del corazón o, en dispositivos móviles, haciendo swipe hacia la izquierda y presionando el icono del tacho.

### Detalle de Pokemon

En esta sección se verá la información detallada de cada Pokemon: número, nombre, sprite (imagen), tipos, altura, peso, categoría, habilidad, género y debilidades.
A su vez tiene dos funcionalidades:
- Agregar/quitar de favoritos: Al igual que en la tarjeta de Pokemon de la Pokedex y Favoritos, se puede hacer la misma acción presionando el botón del corazón en la esquina superior derecha de la vista.
- Copiar información del Pokemon: Al lado del botón de agregar/quitar de favoritos, hay un botón de compartir, el cual copia toda la informacion del Pokemon separada por comas al portapapeles para disponibilizarla.

---

## 💯 Extras

### Limpiar resultados de búsqueda
- Creé un botón para limpiar los resultados de búsqueda y volver a mostrar todos los Pokémon en pantalla.

### Mejoras del panel de filtros
- Creé un botón con un ícono personalizado para abrir el panel de filtros.
- Agregué un scroll a la lista de tipos de Pokémon para mejorar la navegación.
- Fijé los botones de acción en la parte inferior del panel.
- Desactivé el botón **Aplicar filtros** cuando no hay filtros seleccionados. El botón se habilita automáticamente al seleccionar al menos un filtro.

### Obtención de íconos de tipos

- Encontré [el siguiente repositorio](https://github.com/partywhale/pokemon-type-icons) con los íconos correspondientes a cada tipo de Pokémon y los implementé tanto en las tarjetas de Pokemon como en la vista de detalle.

### Ejecutar búsqueda con la tecla Enter
- Implementé la posibilidad de ejecutar la búsqueda de Pokémon al presionar la tecla **Enter**.

### Nueva vista de búsqueda sin resultados
- Implementé una nueva vista que se ve cuando la búsqueda o el filtrado no devuelven resultados. Para esto busqué una imagen del Pokemon Psyduck y la edité para que quede acorde a la interfaz general de la aplicación. Para probarlo con los filtros, seleccionar el tipo de Pokemon "Siniestro".

### Nueva vista de página no encontrada (Error 404)
- Implementé una nueva vista que se ve cuando la URL ingresada por el usuario es inexistente. Esta posee una imagen alusiva al error (404) con el estilo de Pokemon, un título, descripción y botón call to action que redirige a la sección de Pokedex.

### Skeletons
- Implementé skeletons para todas las imágenes de la aplicación (Onboarding, Tarjeta Pokemon y Detalle de Pokémon).

### Toasts informativos
- Implementé toasts informativos para tres acciones: Copiar información del Pokemon al portapapeles, agregar Pokemon a favoritos, eliminar Pokemon de favoritos. El fin de los mismos es brindar feedback de las acciones al usuario.

### Stepper en el onboarding
- Maqueté un stepper interactivo que permite navegar hacia adelante y atrás entre las dos pantallas del onboarding.

### Favicons personalizados
- Implementé un favicon personalizado con la ilustración de una pokebola. El mismo se adapta a distintos navegadores y dispositivos.

### Tests con Vitest
- Implementé Vitest y desarrollé dos pruebas unitarias:
  - Un test para un componente.
  - Un test para un store.

