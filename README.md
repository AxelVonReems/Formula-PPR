# Formula PPR (Формула ППР)

Sitio web estático para una empresa de construcción rusa, que ofrece servicios en el desarrollo de **Proyectos de Ejecución de Obras** (Проекты производства работ, ППР).
Construido con [Eleventy (11ty)](https://www.11ty.dev/) y [Gulp](https://gulpjs.com/), alojado en **Yandex.Cloud** (Object Storage, Cloud CDN, Certificate Manager, Cloud DNS).

**Sitio en vivo:** [formula-ppr.ru](https://formula-ppr.ru)

---

## Funcionalidades
- Sitio estático generado con **11ty**
- Diseño y contenido personalizados creados por el desarrollador
- Pipeline de construcción optimizado con **Gulp** (HTML, CSS y JS minificados)
- Alojamiento en **Yandex.Cloud** con CDN y SSL
- Incluye archivos SEO (`robots.txt`, `sitemap.xml`) y ajustes SEO en cada página

---

## Tecnologías
- **HTML / CSS / JavaScript**
- **11ty (Eleventy)** – generador de sitios estáticos
- **Gulp** – construcción y optimización
- **Yandex.Cloud** – alojamiento, CDN, gestión de certificados y DNS

---

## Instalación y Uso

Clonar el repositorio:
```bash
git clone https://github.com/AxelVonReems/Formula-PPR.git
cd Formula-PPR
```

### Instalar dependencias:

```bash
npm install
```

### Iniciar el servidor de desarrollo local utilizando 11ty:

```bash
npm start
```

### Construir para producción utilizando Gulp:

```bash
npm build
```

### Observar cambios automáticamente:

```bash
npm run watch
```

## Estructura del Proyecto

```plaintext
src/              # Archivos fuente
  ├── assets/     # Imágenes, íconos, fuentes, etc.
  ├── css/        # Estilos
  ├── js/         # Scripts
  ├── _includes/  # Plantillas reutilizables
  ├── sitemap.xml
  └── robots.txt
_site/            # Salida generada por 11ty
dist/             # Build de producción (minificado)
gulpfile.js       # Tareas de construcción con Gulp
.eleventy.js      # Configuración de Eleventy
package.json      # Dependencias y scripts
```

## Licencia

Este proyecto está bajo la Licencia MIT.

## Autor

Creado por AxelVonReems