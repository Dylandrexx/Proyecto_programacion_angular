🌐 Proyecto de Programación Angular

Autor: Dylan
Fecha: Octubre de 2025
Repositorio: https://github.com/Dylandrexx/Proyecto_programacion_angular

🧾 Descripción general

Este proyecto es una evidencia práctica del curso de Programación Angular, donde se desarrolló una aplicación web con Angular 20, Bootstrap 5, y TypeScript.
El propósito fue construir una SPA (Single Page Application) funcional que muestre componentes reutilizables, integración visual y control de versiones con Git y GitHub.

⚙️ Etapa 1: Instalación y configuración del entorno

Instalación de Node.js y Angular CLI:

npm install -g @angular/cli


Verificación de versiones:

node -v
npm -v
ng version


Creación del nuevo proyecto Angular:

ng new app --routing=false --style=css


Ejecución del servidor local:

cd app
ng serve -o


📸 Evidencia:


🎨 Etapa 2: Integración de Bootstrap 5

Para mejorar el diseño, se integró Bootstrap de forma global.

Instalación:

npm i bootstrap@5


Importación en src/styles.css:

@import "bootstrap/dist/css/bootstrap.min.css";


📸 Evidencia:


🧱 Etapa 3: Creación de componentes

Se generaron dos componentes principales para estructurar la aplicación:

ng g c components/hero-card
ng g c components/items-list


📸 Evidencia:


🧩 Etapa 4: Configuración del componente principal

En el archivo src/app/app.ts se configuró el componente raíz y se importaron los nuevos componentes:

import { Component } from '@angular/core';
import { HeroCardComponent } from './components/hero-card/hero-card';
import { ItemsListComponent } from './components/items-list/items-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroCardComponent, ItemsListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}


📸 Evidencia:


💡 Etapa 5: Diseño e implementación funcional

La aplicación incluye:

Un componente HeroCard con diseño Bootstrap para tarjetas informativas.

Un componente ItemsList con lista dinámica generada con *ngFor.

Botones y estilos integrados con clases de Bootstrap (btn, container, card, etc).

📸 Evidencia:


🚀 Etapa 6: Solución de errores SSR y compilación

Durante el desarrollo, se presentaron errores relacionados con Server-Side Rendering (SSR), los cuales fueron corregidos editando los archivos:

src/main.ts

src/main.server.ts

src/app/app.config.server.ts

Esto permitió que la aplicación ejecutara correctamente el servidor y mostrara la vista final sin errores.

📸 Evidencia:


☁️ Etapa 7: Subida del proyecto a GitHub

Verificación del repositorio remoto:

git remote -v


Creación de archivo .gitignore:

app/node_modules/
app/.angular/
app/dist/
app/tmp/


Subida del proyecto completo:

git add -A app
git commit -m "feat: agregar proyecto Angular en /app (Bootstrap + componentes)"
git push -u origin main


📸 Evidencia:


📚 Etapa 8: Documentación y evidencias

Para registrar el proceso se creó una carpeta docs/img dentro del proyecto, donde se incluyen las capturas paso a paso del desarrollo.
Esto permite visualizar el avance y las etapas completadas.

📸 Evidencia:


🧠 Aprendizajes logrados

✅ Instalación y configuración del entorno Angular.
✅ Creación y vinculación de componentes.
✅ Integración de Bootstrap 5 para diseño responsive.
✅ Corrección de errores SSR y configuración del servidor.
✅ Subida del proyecto a GitHub con control de versiones.

🏁 Conclusión

Este proyecto representa el proceso completo de creación, configuración, desarrollo visual y publicación de una aplicación Angular moderna.
Se logró comprender la estructura modular de Angular, la importancia de los componentes, y el flujo de trabajo con Git.