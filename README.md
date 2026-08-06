# 🏆 Global66 Challenge Técnico

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
    - Regiones: Seccion dummy que muestra un mensaje de construcción
    - Favoritos: Lista de Pokemons favoritos
    - Perfil: Seccion dummy que muestra un mensaje de construcción

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

## 🛠️ Dependencias y herramientas

### Vite
- Utilicé la librería para montar el proyecto desde cero, configurarlo y preparar la estructura inicial.

### TypeScript
- Utilicé TypeScript para realizar tipados y hacer la aplicación más robusta y mantenible.

### Pinia
- Utilicé Pinia para crear stores, manejar el estado global de la aplicación y persistir datos en `localStorage`.

### Tailwind CSS
- Utilicé Tailwind CSS para aplicar estilos mediante clases utilitarias.

### Vue Router
- Utilicé Vue Router para gestionar el ruteo de la aplicación y el manejo de sus URLs.

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

---

## ⭐ Extras

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
- Implementé una nueva vista cuando los resultados de búsqueda o el filtrado es fallido. Para esto busqué una imagen del Pokemon Psyduck y la edité para que quede acorde a la interfaz general de la aplicación.

### Skeletons
- Implementé skeletons para todas las imágenes de la aplicación (Onboarding, Tarjeta Pokemon y Detalle de Pokémon).

### Stepper en el onboarding
- Maqueté un stepper interactivo que permite navegar hacia adelante y atrás entre las dos pantallas del onboarding.

### Tests con Vitest
- Implementé Vitest y desarrollé dos pruebas unitarias:
  - Un test para un componente.
  - Un test para un store.

---

## ✅ Testing

- Para ejecutar los tests con una interfaz gráfica, ejecutá el siguiente comando:

<code>npm run test:ui</code>

- Para ejecutar los tests en modo headless, ejecutá el siguiente comando:

<code>npm run test</code>
