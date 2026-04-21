# Notas de Aprendizaje – Proceso de QA Automation con Playwright

## Contexto
Este documento describe mi proceso de aprendizaje y razonamiento mientras implementaba un entorno básico de automatización de pruebas usando Playwright desde cero.

---

## Proceso de Pensamiento

### 1. Punto de partida
Le planteé el siguiente escenario a ChatGPT:

> "Imagine I know nothing about Playwright, and I need to create a full test plan in 2 days. What would be the steps I need to take, from the very beginning, assuming I have nothing installed."

---

### 2. Plan inicial
A partir de esa solicitud:
- Se generó un plan completo de trabajo
- Seguí cada uno de los pasos sugeridos

Sin embargo:
- No me limité a copiar instrucciones  
- En cada punto, analicé **qué aplicaba realmente a mi caso**

---

### 3. Interpretación propia
En cada fase:
- GPT me indicaba **qué debía hacer**
- Yo decidía **cómo aplicarlo al proyecto**

Esto me permitió:
- Entender el proceso, no solo ejecutarlo

---

### 4. Duda clave: *Critical User Flows*
No entendía este concepto, así que:
- Pedí una explicación con ejemplos
- Seleccioné los ejemplos que aplicaban a mi caso

---

### 5. Organización del Test Plan
Creé documentos separados (Notepad) para estructurar mejor:

- **Test Scope & Strategy**
- **Test Scenarios**

Al final no los usé o terminaron siendo parte del TEST_PLAN.md, pero fue bueno haberme tomado el tiempo de crearlos. Me ayudó a tener cierta perspectiva.

---

### 6. El Repositorio
- No se me pidió que hiciera un repositorio.
- GPT tampoco me lo recomendó al crear el proyecto.
Pero:
- Me parecio relevante que desde el principio el proyecto esté estructurado para ser posteado en GitHub y realmente me alegro de haberlo hecho.

---

## Setup del Proyecto

### 1. Estructura inicial

Crear directorio
```bash
mkdir qa-playwright-project
cd qa-playwright-project
```
Inicializar Git
```bash
git init
git branch -M main
```
Inicializar Node.js
```bash
npm init -y
```
---

### 2. Instalación de Playwright
```bash
npx playwright test --init
```
Problema:
- Error por versión de npm desactualizada. Yo tenia instalada la 9.8.1 y la ultima es 11.12.1.
```bash
npm install -g npm@11.12.1
```

---

### 3. Problemas con Node/NPM
- Me salió un error de "Unsuported enginge"
- Busco en Google qué hacer
- Intenté:
    - nvm -> falló
    - Docker -> falló
- Solución:
    - Instalé manual el Node.js

---

### 4. Instalación correcta de Playwright
```bash
npm install -D @playwright/test
npx playwright install
```
Nota:
Aqui me di cuenta que habia omitido estos pasos anteriormente lo cual causó el error.

---

### 5. Problema con inicialización
```bash
npx playwright test --init
```
Error:
```bash
unknown option '--init'
```
Intenté:
```bash
npx playwright test
```
Resultado:
```bash
Error: No tests found
```

---

### 6. Problema con configuración
- No se generó playwright.config.ts
- GPT lo identificó como problema de versiones
Intenté:
```bash
npx playwright init
```
Error:
```bash
unknown command 'init'
```

---

### 7. Solución manual
- Creé manualmente el archivo playwright.config.ts
- Inicialmente lo coloqué incorrectamente en /utils
- Luego lo moví al root del proyecto (correcto)

---

### 8. TypeScript
Instalé TypeScript:
```bash
npm install --save-dev typescript
```
Decisión:
- Usé --save-dev en lugar de global -g para mantener dependencias dentro del proyecto
- Entiendo que es la mejor opción para asegurarme de que funcione en otras PC

---

## Buenas Prácticas

### .gitignore
Creé un .gitignore para excluir:
- node_modules/
- Archivos pesados innecesarios

Razón:
- El node_modules no se sube porque conlleva una enorme carga innecesaria para el GitHub
- node_modules puede regenerarse con:
```bash
npm install
```

---

## Cómo funciona Playwright
Cuando ejecuto:
```bash
npm install
```
Playwright:
- Busca playwright.config.ts
- Aplica la configuración
- Ejecuta los tests

---

## Conceptos clave
- tests/ -> qué ejecutar
- playwright.config.ts -> cómo ejecutarlo

El config NO debe ir en:
- /tests
- /src
- Cualquier otra subcarpeta
Debe estar en el root del proyecto

---

## Entorno de Prueba
Como no tenía tiempo de crear una app propia, utilicé:
```bash
https://demo.playwright.dev/todomvc
```
Configuré en:
```bash
baseURL: 'https://demo.playwright.dev/todomvc'
```

---

## Creación del Primer Test
Inicialmente se sugirió:
```bash
await page.goto('/');
```
Problema:
- Esa línea sola no funciona
Solución:
- Crear archivo todo.spec.ts
- Definir test correctamente con test()

---

## Ejecución
```bash
npx playwright test
```

---

## Análisis de Fallos
### 1. Primer fallo
- Test fallido
- Playwright generó:
    - Screenshot
    - Video
    - Reporte
    - Logs
Guardé evidencia adicional:
- Screenshot de la consola
- Nombre: test-failed-1-console.png

Despues me di cuenta que cada vez que corro el test el folder se reinicia y se perdió la imagen de la consola. Aun la tengo como screenshot, pero ya no está en el documento.

---

### 2. Investigación
Aunque Playwright funcionaba:
- Decidí investigar el error
Acciones:
- Revisé baseURL
- Probé hardcodear la URL
- El error persistía

---

### 3. Identificación del problema
El problema no era la página, sino:
- El assertion .toHaveTitle()

---

### 4. Solución
Modifiqué:
```bash
.toHaveTitle(/TodoMVC/)
```
Resultado: Funcionó

---

### 5. Mejora del test
Probé alterativa:
```bash
await expect(page.locator('h1')).toHaveText('todos');
```
Resultado: más confiable

---

### 6. Validación adicional
```bash
const title = await page.title();
console.log(title);
```
Resultado:
```bash
React • TodoMVC
```

---

## Organización de Tests
Debido a múltiples cambios:
- Separé en varios tests:
    - todo
    - todo2
    - todo3

- También documenté fallos:
    - todof
    - todof2

📌 Observación:

- El test todof que incialmente fue fallido, al correrlo de nuevo pasó
- Posible inconsistencia o cambio en ejecución

---

## Observaciones Finales
- Playwright da mucha información en fallos
- Cuando el test pasa, el output es mínimo
- Es importante interpretar correctamente los errores

---

## Conclusión
Este ejercicio me permitió:
- Entender el flujo completo de automatización
- Diferenciar entre:
    - Error de test
    - Error de configuración
    - Error real de aplicación
- Aprender a debuggear usando herramientas de Playwright