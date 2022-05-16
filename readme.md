# StoneFree

| Integrantes                    |    Rol    |                          Link a los Gtihub |
| ------------------------------ | :--------: | -----------------------------------------: |
| `Kevin Garcia`               | Full-stack |         [Contacto](https://github.com/kegara) |
| `David Isaí Soto`           | Full-stack | [Contacto](https://github.com/DavidSotoOrtiz) |
| `Oscar Lara`                 | Full-stack |               [Contacto](https://github.com/olarag) |
| `Andrea Gómez`              | Full-stack | [Contacto](https://github.com/andrea-liliana) |
| `Carlos Joaquín Castañeda` | Full-stack |               [Contacto](https://github.com/CarJCC) |

### Cuidado y preservación de especies marinas

### Diagrama de la página web

 ```mermaid
classDiagram
HomePage --|> Información
HomePage --|> Acuamigos
Información --|> AprendeMas
Información --|> Consejos
Información --|> Videos
class Información
Información : 3 secciones
class AprendeMas
AprendeMas : +Ballena Azul
AprendeMas : +Delfín
AprendeMas : +Peces
AprendeMas : +León Marino
AprendeMas : +Tortuga Marina
AprendeMas : +Caballito de Mar
AprendeMas : +Vaquita Marina
AprendeMas : +InfoGeneral()
AprendeMas : +Localización()
class Consejos
Consejos : 6 consejos 
Consejos : para cuidado y
Consejos : preservación de
Consejos : especies marinas
class Videos
Videos : Temas de 
Videos : contaminación 
Videos : y cuidado 
Videos : de mares
Acuamigos : SeleccionaAmigo
class Acuamigos
Acuamigos : +Tortuga Marina
Acuamigos : +Tiburón
Acuamigos : +Coral
Acuamigos : +Estado()
Acuamigos : +Reino()
Acuamigos : +Clase()
Acuamigos : +Familia()
Acuamigos : +Genero()
```
### Vistas de la página web

#### Homepage

![Inicio](https://user-images.githubusercontent.com/42507973/168587061-08840af5-0353-4122-8dc2-49704cc68dda.png)


#### Pestaña de Acuamigos

![Acuamigos](https://user-images.githubusercontent.com/42507973/168587766-d55438a6-0f0f-4989-a221-1916be49beca.png)

##### Al seleccionar alguna de las imágenes, se muestra la información correspondiente, por ejemplo:

![Acuamigo](https://user-images.githubusercontent.com/42507973/168592304-56ceb53f-fcb3-4d2d-9079-775f45c9e0a6.png)

#### Pestaña de Información 

![Información](https://user-images.githubusercontent.com/42507973/168587208-c840b036-630b-4fdf-9791-e45d62af6faa.png)

##### En la sección "Aprende más sobre algunos animales", al dar click en alguna de las imágenes, se es redireccionado a otro sitio web con la información correspondiente al animal, a continuación se muestra un ejemplo:

![CaballitoMar](https://user-images.githubusercontent.com/42507973/168591727-02b43f48-2fe4-478d-9ea0-683a7ec160b7.png)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
