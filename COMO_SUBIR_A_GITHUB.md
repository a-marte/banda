# 🚀 Cómo subir la página de A Marte a GitHub Pages

## 📋 Requisitos
- Cuenta de GitHub (gratis)
- Todos los archivos de la página web

## 🎯 Paso a Paso

### 1️⃣ Crear cuenta en GitHub (si no tienes)
1. Ve a [github.com](https://github.com)
2. Haz click en "Sign up"
3. Crea tu cuenta con un email y contraseña
4. Verifica tu email

### 2️⃣ Crear un nuevo repositorio
1. Una vez con sesión iniciada, haz click en el botón **"+"** arriba a la derecha
2. Selecciona **"New repository"**
3. Configuración del repositorio:
   - **Repository name**: `amarte-web` (o el nombre que prefieras)
   - **Description**: "Página web oficial de A Marte - Banda de Rock Alternativo"
   - Marca la opción **"Public"** (para que GitHub Pages funcione gratis)
   - ✅ Marca **"Add a README file"**
   - Click en **"Create repository"**

### 3️⃣ Subir los archivos

#### Opción A: Subir desde el navegador (MÁS FÁCIL)

1. En tu repositorio, haz click en **"Add file"** → **"Upload files"**

2. **Arrastra TODOS estos archivos** a la zona de subida:
   ```
   ✅ index.html
   ✅ styles.css
   ✅ script.js
   ✅ README.md
   ✅ logoAMarte.jpg
   ✅ Portada1.jpeg
   ✅ portada2.jpeg
   ✅ CodigoSpotify.png
   ✅ PortadaSVDT.jpg
   ✅ Todos los archivos DSC00xxx.jpg (todas las fotos)
   ✅ Todos los archivos concierto1-12.png
   ✅ Concierto1.png, Conciert2.png, Concierto2.png
   ```

3. En "Commit changes" escribe: `Subir página web de A Marte`

4. Haz click en **"Commit changes"**

5. Espera a que termine de subir todos los archivos (puede tomar unos minutos)

#### Opción B: Usando Git (si sabes usar la terminal)

```bash
# Abre Git Bash o terminal en la carpeta "A marte"
git init
git add .
git commit -m "Primera versión de la página web"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/amarte-web.git
git push -u origin main
```

### 4️⃣ Activar GitHub Pages

1. En tu repositorio, ve a **"Settings"** (arriba)

2. En el menú lateral izquierdo, busca y haz click en **"Pages"**

3. En la sección **"Source"**:
   - Branch: Selecciona **"main"**
   - Folder: Deja **"/ (root)"**
   - Haz click en **"Save"**

4. ¡Espera 1-2 minutos!

5. Refresca la página y verás un mensaje verde que dice:
   ```
   Your site is live at https://TU-USUARIO.github.io/amarte-web/
   ```

### 5️⃣ ¡Listo! 🎉

Tu página web ahora está en línea en:
```
https://TU-USUARIO.github.io/amarte-web/
```

## 🔄 Actualizar la página después

Si necesitas hacer cambios:

1. Edita los archivos localmente
2. Ve a tu repositorio en GitHub
3. Haz click en el archivo que quieres actualizar
4. Haz click en el ícono del lápiz (✏️) para editar
5. Haz los cambios
6. Haz click en "Commit changes"
7. Los cambios se reflejarán en 1-2 minutos

## 📱 Compartir tu página

Una vez publicada, comparte el enlace:
- En Instagram: Bio o Stories
- En TikTok: Bio
- En YouTube: Descripción del canal
- En WhatsApp: Envía el link directo

## 🆘 Solución de problemas

### La página no carga
- Espera 5 minutos después de activar GitHub Pages
- Verifica que el archivo se llame exactamente `index.html`
- Asegúrate de que todos los archivos se hayan subido

### Las imágenes no se ven
- Verifica que los nombres de archivo coincidan exactamente (mayúsculas/minúsculas)
- Asegúrate de haber subido TODAS las imágenes

### El widget de Spotify no funciona
- Esto es normal en la primera carga
- Refresca la página
- El widget de Spotify funciona mejor cuando la página está en línea

## 💡 Tips

1. **Dominio personalizado**: Más adelante puedes comprar un dominio como `amarte.com` y conectarlo
2. **Analytics**: Puedes agregar Google Analytics para ver cuántas visitas tienes
3. **Actualizaciones**: Puedes actualizar la página cuando quieras subiendo archivos nuevos

## 📞 ¿Necesitas ayuda?

Si tienes problemas, revisa la documentación oficial de GitHub Pages:
https://pages.github.com/

---

**¡Tu página estará en línea en menos de 10 minutos! 🚀**
