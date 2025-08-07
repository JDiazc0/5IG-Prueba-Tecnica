# Prueba Técnica 5IG-Solution

Hola, soy Jhoan y esta es mi solución a la prueba técnica para el rol de Software Developer Junior.

En este repositorio encontrarán las soluciones a las 4 tareas solicitadas.

## Task 1 - Base de datos

- [Diagrama ER](Task1/Diagram_ER.png)
- [Script SQL](Task1/Schema.sql)

## Task 2 - Rest API's

- [Script con Metodos GET, POST](Task2/Script.py)

### Instalación

- Python 3.10.11
- Libreria requests

  1. Clonar el repositorio y moverse a la carpeta `Task2/`.

  ```
  cd task2
  ```

  2. Crear entorno virtual y activar.

  ```
  python -m venv venv
  venv\Scripts\activate
  ```

  3. Instalar dependencias.

  ```
  pip install -r requirements.txt
  ```

  4. Ejecutar Script

  ```
  python script.py
  ```

# Task 3 - Desarrollo Frontend

Aplicación web hecha con JavaScript Vanilla, HTML5 y CSS3.

Se consumen los endpoints de JSONPlaceholder para mostrar una lista de posts.  
Cada post se puede buscar por título o ampliar para ver su contenido completo y los comentarios asociados.

- [HTML](index.html)
- [Javascript](script.js)
- [CSS](style.css)
- [Ver demo en GitHub Pages](https://jdiazc0.github.io/5IG-Prueba-Tecnica/)

# Task 4 - CI/CD

Se configuró un flujo simple de CI/CD usando GitHub Pages.  
Cada vez que se realiza un push al repositorio, los cambios de la Task 3 se publican automáticamente.

- [Workflow](.github/workflows/deploy.yml)
