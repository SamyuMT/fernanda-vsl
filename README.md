# Fernanda Landing Project

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías:

- **Vite**: Herramienta de desarrollo rápida para proyectos web modernos.
- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Lenguaje de programación tipado que mejora la calidad del código.
- **Tailwind CSS**: Framework de utilidades para estilizar componentes de manera rápida y eficiente.
- **Lucide React**: Conjunto de íconos SVG para React.
- **Mercado Pago**: Simulación de integración para pagos seguros.

## Instalación

Sigue los pasos a continuación para instalar y ejecutar el proyecto:

1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd FernandaLanding
   ```

2. **Instalar dependencias**:
   Asegúrate de tener Node.js instalado en tu sistema. Luego ejecuta:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   Por defecto, el proyecto estará disponible en `http://localhost:5173`.

## Uso

- **Página principal**: Contiene información sobre el taller, testimonios, y un reproductor de video.
- **Inscripción**: Botón de llamada a la acción para redirigir a la simulación de Mercado Pago.
- **Testimonios**: Carrusel interactivo con opiniones de usuarios.
- **Contenido del taller**: Detalles sobre los módulos del curso.

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera una versión optimizada para producción.
- `npm run preview`: Previsualiza la versión de producción.

## Estructura del Proyecto

```
FernandaLanding/
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── index.css         # Estilos globales
│   ├── main.tsx          # Punto de entrada principal
│   ├── App.tsx           # Componente raíz
│   └── vite-env.d.ts     # Tipos de Vite
├── public/               # Recursos públicos (imágenes, etc.)
├── .bolt/                # Configuración de Bolt
├── package.json          # Dependencias y scripts
├── README.md             # Documentación del proyecto
└── vite.config.ts        # Configuración de Vite
```

## Créditos

- **Lic. Fernanda Suárez**: Inspiración y contenido del taller.
- **Equipo de desarrollo**: Creación de la página web.

## Licencia

Este proyecto está bajo la