# A Marte - Sitio Web Oficial

Página web estática para la banda de rock romántico **A Marte**.

## 🎸 Características

- ✨ Diseño moderno con animaciones CSS y JavaScript
- 🎵 Widget integrado de Spotify
- 📱 Totalmente responsive (se adapta a todos los dispositivos)
- 🖼️ Galería de fotos con modal
- 🎤 Sección de conciertos
- 🌐 Enlaces a todas las redes sociales
- 🎨 Efectos visuales: partículas, parallax, glitch, cursor trail
- 🚀 Optimizado para rendimiento

## ✅ Configuración Completa

La página ya está configurada con todos los enlaces correctos:

- ✅ Widget de Spotify del álbum configurado
- ✅ Instagram: [@a_marte.banda](https://www.instagram.com/a_marte.banda)
- ✅ YouTube: [A MARTE](https://www.youtube.com/@a_marte.banda06)
- ✅ TikTok: [@a_marte.banda](https://tiktok.com/@a_marte.banda)
- ✅ Spotify: Enlace al álbum configurado

## 🚀 Cómo Usar

### Opción 1: Abrir Localmente
Simplemente abre el archivo `index.html` en tu navegador.

### Opción 2: Publicar en Internet

Puedes publicar esta página web gratuitamente en:

#### **GitHub Pages** (Recomendado)
1. Crea una cuenta en [GitHub](https://github.com)
2. Crea un nuevo repositorio llamado `amarte-website`
3. Sube todos los archivos (index.html, styles.css, script.js, README.md y todas las imágenes)
4. Ve a Settings > Pages
5. Selecciona la rama `main` y guarda
6. Tu sitio estará disponible en `https://tu-usuario.github.io/amarte-website`

#### **Netlify**
1. Crea una cuenta en [Netlify](https://netlify.com)
2. Arrastra toda la carpeta a Netlify
3. Tu sitio estará publicado automáticamente

#### **Vercel**
1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Despliega automáticamente

## 📁 Estructura de Archivos

```
A marte/
├── index.html              # Página principal
├── styles.css              # Estilos y animaciones
├── script.js               # Interactividad y efectos
├── README.md              # Este archivo
├── logoAMarte.jpg         # Logo de la banda
├── Portada1.jpeg          # Imagen del hero
├── portada2.jpeg          # Imagen alternativa
├── CodigoSpotify.png      # QR de Spotify
├── PortadaSVDT.jpg        # Portada del sencillo
├── DSC00xxx.jpg           # Fotos de la banda (multimedia)
├── concierto1-12.png      # Flyers de conciertos
└── Concierto1-2.png       # Más flyers
```

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css` (líneas 8-16):

```css
:root {
    --primary-color: #ff6b6b;     /* Color principal */
    --secondary-color: #4ecdc4;   /* Color secundario */
    --dark-bg: #0a0e27;           /* Fondo oscuro */
    --dark-card: #16213e;         /* Fondo de tarjetas */
    ...
}
```

### Agregar Más Fotos a la Galería
En `index.html`, duplica este bloque dentro de `.gallery-grid` (líneas 82-88):

```html
<div class="gallery-item" data-aos="fade-up">
    <img src="TU_FOTO.jpg" alt="A Marte Live">
    <div class="gallery-overlay">
        <i class="fas fa-search-plus"></i>
    </div>
</div>
```

### Agregar Más Conciertos
En `index.html`, duplica este bloque dentro de `.concerts-grid` (líneas 110-112):

```html
<div class="concert-card" data-aos="zoom-in">
    <img src="TU_CONCIERTO.png" alt="Concierto">
</div>
```

## 🎵 Información de la Banda

**A Marte** - Banda Musical de Rock Romántico

### Redes Sociales
- 📸 Instagram: [@a_marte.banda](https://instagram.com/a_marte.banda)
- 🎬 YouTube: [A MARTE](https://www.youtube.com/@AMARTE)
- 🎵 TikTok: [@a_marte.banda](https://tiktok.com/@a_marte.banda)
- 🎧 Spotify: A MARTE
- 📞 Teléfono: +593 995929839

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (con animaciones avanzadas)
- JavaScript (Vanilla)
- Font Awesome (iconos)
- Responsive Design

## 📝 Licencia

© 2026 A Marte - Banda Musical. Todos los derechos reservados.

---

**Hecho con ❤️ para A Marte 🚀**

## 💡 Consejos

1. **Optimiza las imágenes**: Usa herramientas como [TinyPNG](https://tinypng.com) para reducir el tamaño de las fotos sin perder calidad
2. **Actualiza regularmente**: Agrega nuevas fotos de conciertos y mantén la página actualizada
3. **Comparte el enlace**: Una vez publicada, comparte el enlace en todas tus redes sociales
4. **SEO**: Considera agregar meta tags para mejorar el posicionamiento en buscadores

## 🐛 Solución de Problemas

### Las imágenes no cargan
- Verifica que todas las imágenes estén en la misma carpeta que index.html
- Asegúrate de que los nombres de archivo coincidan exactamente (mayúsculas/minúsculas importan)

### El widget de Spotify no funciona
- Verifica que hayas actualizado el ID del artista correctamente
- Asegúrate de tener conexión a internet

### Las animaciones no funcionan
- Verifica que script.js esté en la misma carpeta
- Abre la consola del navegador (F12) para ver si hay errores

## 📞 Soporte

Para cualquier pregunta o problema, contacta a: +593 995929839
