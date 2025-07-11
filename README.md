# 🎬 Cine de Verano – Aplicación Web para Gestión de Películas

**Cine de Verano** es una aplicación web interactiva que permite gestionar una colección de películas para un cine al aire libre. El usuario puede visualizar, añadir, editar y eliminar películas mediante una interfaz moderna y responsiva, conectada a un backend simulado con JSON Server. Además, incluye un modelo 3D integrado para mejorar la experiencia visual.

---

## 📋 Características principales

- Listado dinámico de películas con imagen, título, director, año y descripción.  
- Creación de nuevas películas mediante un formulario modal.  
- Edición de películas existentes con formulario modal pre-cargado.  
- Eliminación rápida y sencilla de películas.  
- Visualización de un modelo 3D interactivo usando `<model-viewer>`.  
- Diseño moderno con efectos de desenfoque, sombras y tipografías atractivas.  

---

## 🛠️ Tecnologías utilizadas

- **HTML5**  
- **CSS3** (Diseño responsivo y moderno)  
- **JavaScript (Vanilla)**  
- **JSON Server**  
- **Model Viewer** (visualizador 3D)  
- **Google Fonts** (`Bebas Neue` y `Roboto`)  

---

## 📁 Estructura del proyecto

```cine-de-verano/
├── assets/
│ └── palomitas.glb
├── src/
│ └── service.js
├── styles.css
├── index.html
├── db.json
└── README.md ```

---

## 🚀 Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/gemayc/cine-de-verano.git
cd cine-de-verano

2. Instala JSON Server:

   npm install -g json-server

3. Crea el archivo db.json:

```{
  "movies": [
    {
      "id": 1,
      "title": "Los cronocrímenes",
      "director": "Nacho Vigalondo",
      "age": 2007,
      "imagen": "https://ejemplo.com/imagen.jpg",
      "description": "Un hombre se ve atrapado en un bucle temporal tras descubrir una extraña máquina."
    }
  ]
}```

4. Levanta el servidor JSON:

```json-server --watch db.json
Abre el archivo index.html en tu navegador.

Recomendado: usa la extensión Live Server en Visual Studio Code para evitar problemas de CORS y refresco automático.

🧑‍💻 Uso de la aplicación
Haz clic en Cargar Películas para obtener y mostrar la lista.

Usa Agregar Película para abrir el formulario modal y añadir una nueva película.

Los botones Editar y Eliminar en cada tarjeta permiten modificar o borrar películas.

Los cambios se sincronizan con la base de datos JSON Server de forma automática.

Visualiza el modelo 3D interactivo en la parte inferior para una experiencia mejorada.


# 🎬 Cine de Verano

## 📖 Descripción

**Cine de Verano** es una aplicación web full-stack que revoluciona la gestión de carteleras cinematográficas. Diseñada específicamente para cines al aire libre, combina una interfaz moderna y responsiva con funcionalidades avanzadas de administración de contenido.

### 🎯 Propósito
Facilitar la administración de películas en cines al aire libre mediante una interfaz intuitiva que permite operaciones CRUD completas, visualización de contenido multimedia y una experiencia de usuario excepcional.

---

## ✨ Características Principales

### 🔧 Funcionalidades Core
- **📋 Gestión CRUD Completa**: Crear, leer, actualizar y eliminar películas
- **🖼️ Visualización Rica**: Tarjetas interactivas con imágenes, información detallada y acciones
- **📱 Diseño Responsivo**: Optimizado para todos los dispositivos
- **🎭 Modales Elegantes**: Formularios flotantes con animaciones suaves
- **🔄 Actualizaciones en Tiempo Real**: Sincronización automática con el backend

### 🎨 Experiencia Visual
- **🌈 Gradientes Modernos**: Paleta de colores vibrante y contemporánea
- **✨ Efectos de Cristal**: Backdrop-filter y efectos de desenfoque
- **🎪 Animaciones Fluidas**: Transiciones suaves y micro-interacciones
- **🎬 Modelo 3D Integrado**: Visualizador interactivo con Model Viewer
- **🎨 Tipografía Profesional**: Bebas Neue y Roboto para máximo impacto

### 🚀 Características Técnicas
- **⚡ Vanilla JavaScript**: Rendimiento optimizado sin dependencias pesadas
- **🔌 API REST Simulada**: Backend completo con JSON Server
- **🛡️ Validación Robusta**: Manejo de errores y validación de formularios
- **💾 Persistencia de Datos**: Almacenamiento confiable y consistente
- **🔍 Fallbacks Inteligentes**: Manejo elegante de imágenes faltantes

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | 5.0 | Estructura semántica |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | 3.0 | Estilos y animaciones |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | ES6+ | Lógica de aplicación |
| ![JSON Server](https://img.shields.io/badge/JSON%20Server-000000?style=flat&logo=json&logoColor=white) | ^0.17.0 | API REST simulada |
| ![Model Viewer](https://img.shields.io/badge/Model%20Viewer-4285F4?style=flat&logo=google&logoColor=white) | ^3.0 | Visualización 3D |
| ![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=flat&logo=google&logoColor=white) | - | Tipografía premium |

---

## 📁 Estructura del Proyecto

```
cine-de-verano/
├── 📁 assets/
│   ├── 🎬 palomitas.glb          # Modelo 3D principal
│   ├── 🖼️ screenshots/           # Capturas de pantalla
│   └── 🎨 icons/                 # Iconos personalizados
├── 📁 src/
│   ├── 📄 service.js             # Servicios API
│   ├── 📄 utils.js               # Utilidades generales
│   └── 📄 constants.js           # Constantes de la aplicación
├── 📁 styles/
│   ├── 🎨 main.css               # Estilos principales
│   ├── 🎨 components.css         # Estilos de componentes
│   └── 🎨 responsive.css         # Media queries
├── 📁 docs/
│   ├── 📋 API.md                 # Documentación de API
│   └── 🎨 DESIGN.md              # Guía de diseño
├── 📄 index.html                 # Punto de entrada
├── 📄 db.json                    # Base de datos JSON
├── 📄 package.json               # Configuración del proyecto
├── 📄 .gitignore                 # Archivos ignorados
└── 📄 README.md                  # Este archivo
```

---

## 🚀 Guía de Instalación

### 📋 Prerrequisitos

- **Node.js**: v14.0.0 o superior
- **npm**: v6.0.0 o superior
- **Git**: Para clonar el repositorio
- **Navegador moderno**: Chrome, Firefox, Safari o Edge

### 🔧 Instalación Paso a Paso

1. **📥 Clonar el repositorio**
   ```bash
   git clone https://github.com/gemayc/cine-de-verano.git
   cd cine-de-verano
   ```

2. **📦 Instalar dependencias**
   ```bash
   npm install
   ```

3. **🔧 Instalar JSON Server globalmente**
   ```bash
   npm install -g json-server
   ```

4. **🗄️ Configurar base de datos**
   ```bash
   # El archivo db.json ya está incluido con datos de ejemplo
   # Opcionalmente, puedes personalizarlo según tus necesidades
   ```

5. **🚀 Iniciar el servidor de desarrollo**
   ```bash
   # Terminal 1: Iniciar JSON Server
   json-server --watch db.json --port 3000
   
   # Terminal 2: Iniciar servidor HTTP local
   npx http-server -p 8080
   ```

6. **🌐 Acceder a la aplicación**
   - Abrir navegador en: `http://localhost:8080`
   - API disponible en: `http://localhost:3000`

### 🐳 Instalación con Docker (Opcional)

```bash
# Construir imagen
docker build -t cine-de-verano .

# Ejecutar contenedor
docker run -p 8080:80 cine-de-verano
```

---

## 📘 Guía de Uso

### 🎬 Gestión de Películas

1. **📋 Cargar Cartelera**
   - Haz clic en "Cargar Películas" para visualizar la cartelera completa
   - Las películas se cargan dinámicamente desde la API

2. **➕ Agregar Nueva Película**
   - Selecciona "Agregar Película"
   - Completa el formulario modal con la información requerida
   - Guarda y observa la actualización automática

3. **✏️ Editar Película Existente**
   - Utiliza el botón "Editar" en cualquier tarjeta
   - Modifica los campos necesarios en el modal pre-cargado
   - Confirma los cambios para actualizar la información

4. **🗑️ Eliminar Película**
   - Haz clic en "Eliminar" en la tarjeta correspondiente
   - Confirma la acción en el diálogo de confirmación
   - La película se remove inmediatamente de la cartelera

### 🎮 Experiencia 3D

- **🎪 Modelo Interactivo**: Visualiza el modelo 3D de palomitas en la parte inferior
- **🖱️ Controles**: Arrastra para rotar, scroll para zoom, doble clic para reset
- **📱 Táctil**: Gestos táctiles optimizados para dispositivos móviles

---

## 📊 Estructura de Datos

### 🎬 Esquema de Película

```json
{
  "id": 1,
  "title": "Título de la Película",
  "director": "Nombre del Director",
  "age": 2023,
  "imagen": "https://ejemplo.com/poster.jpg",
  "description": "Descripción detallada de la película...",
  "genre": "Drama",
  "duration": 120,
  "rating": 8.5,
  "created_at": "2023-01-01T00:00:00Z",
  "updated_at": "2023-01-01T00:00:00Z"
}
```

### 🔌 Endpoints de API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/movies` | Obtener todas las películas |
| `GET` | `/movies/:id` | Obtener película específica |
| `POST` | `/movies` | Crear nueva película |
| `PUT` | `/movies/:id` | Actualizar película existente |
| `DELETE` | `/movies/:id` | Eliminar película |

---

## 🎨 Personalización

### 🎨 Temas y Colores

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(45deg, #ff6b6b, #feca57);
  --accent-color: #48cae4;
  --text-primary: #333;
  --text-secondary: #666;
  --background-glass: rgba(255, 255, 255, 0.1);
}
```

### 🔧 Configuración Avanzada

```javascript
// src/constants.js
export const CONFIG = {
  API_BASE_URL: 'http://localhost:3000',
  ITEMS_PER_PAGE: 12,
  ANIMATION_DURATION: 300,
  MODEL_3D_URL: './assets/palomitas.glb'
};
```

---

## 📄 Licencia

Proyecto con fines educativos y de divulgación. No se permite uso comercial sin permiso.

---

## 👩‍💻 Autora

Proyecto creado y desarrollado por **Gema Yébenes** – Bootcamp Fullstack (Femcoders – Factoría F5) – 2025

---

