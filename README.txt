Este proyecto está compuesto por dos carpetas las cuales se denominan: (backend y frontend), y este proyecto maneja una base de datos la cual se realizó en el sistema de base de datos "SQL Serve", a continiacion hago descripción de cada uno. La carpeta frontend está trabajada sobre Angular Material y usa una version de angular CLI 13.2.4 usando nodejs 14.17.1;
El archivo fronent viene con una gran colección de elementos que te ofrece múltiples accesos para el funcionamiento de la aplicación y es amigable con el entorno gráfico ya que la constitución de estos elementos vienen organizados para el mejor manejo de estos. 
El archivo backend está constituida por un conjunto de controladores y modelos los cuales brindan el correcto manejo de toda la aplicación, el frontend se comunica con el archivo backend por medio da las enviroments donde contienen las rutas de enlace con el back de modo que conecta con los metodos de este archivo.
La base de datos contiene toda la información de los miembros y administradores que se encuentran registrados actualmente.

## Links de descargas por orden:

+ [Nodejs](https://nodejs.org/dist/v14.17.1/node-v14.17.1-x64.msi)
+ [Angular Cli](https://angular.io/cli)
+ [SQL Serve](https://www.youtube.com/watch?v=YOaC_TyOrdk&t=251s) 
+ [C#](https://visualstudio.microsoft.com/es/downloads/) 

## Para iniciar:

Tenga en cuenta que usamos VisualStudio Code como nuestro editor de código fuente.

Extenciondes de VisualStudio Code para Angular:

-Para el frontend:
+ Angular Essentials.
+ Angular Schematics.
+ Angular 10 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout.




## Comandos de la terminal:

 //para usar el npm verifique que tenga la vercion del nodejs 14.17.1 y la version del npm debe ser 6.14.13.\\

 -En el frontend:
1. npm install -g @angular/cli
2. npm install
3. ng serve
4. npm install --save-dev @angular-devkit/build-angular  (Usar si al subir servicio lo requiera y luego usar ng sevre)
5. Navegar en `http://localhost:4200`

-En el backend:

1. Click en el botón iniciar 'IIS Extpress'


### Que incluye el archivo frontend

Este incluye los siguientes componentes:
```
frontend
├── .angular
├── .vscode
├── node_modules
├── src
│   ├── app
│   │   ├── screens
│   │   │   ├── home
│   │   │   │   ├── delete
│   │   │   │   │   ├── delete.component.css
│   │   │   │   │   ├── delete.component.html
│   │   │   │   │   ├── delete.component.spec.ts
│   │   │   │   │   └── delete.compotent.ts
│   │   │   │   ├── update-dialog
│   │   │   │   │   ├── update-dialog.component.css
│   │   │   │   │   ├── update-dialog.component.html
│   │   │   │   │   ├── update-dialog.component.spec.ts
│   │   │   │   │   └── update-dialog.compotent.ts
│   │   │   │   ├── home-routing.module.ts
│   │   │   │   ├── home.component.css
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.spec.ts
│   │   │   │   ├── home.compotent.ts
│   │   │   │   └── home.module.ts
│   │   │   ├── login
│   │   │   │   ├── login-routing.module.ts
│   │   │   │   ├── login.component.css
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.spec.ts
│   │   │   │   ├── login.compotent.ts
│   │   │   │   └── login.module.ts
│   │   │   └── users
│   │   │       ├── users-routing.module.ts
│   │   │       ├── users.component.css
│   │   │       ├── users.component.html
│   │   │       ├── users.component.spec.ts
│   │   │       ├── users.compotent.ts
│   │   │       └── users.module.ts
│   │   ├── shared
│   │   │   ├── interfaces
│   │   │   │   ├── admin.interface.ts
│   │   │   │   └── member.interface.ts
│   │   │   ├── pipes
│   │   │   │   ├── country.pipe.spec.ts
│   │   │   │   ├── country.pipe.ts
│   │   │   │   ├── email.pipe.spec.ts
│   │   │   │   ├── email.pipe.ts
│   │   │   │   ├── filter.pipe.spec.ts
│   │   │   │   ├── filer.pipe.ts
│   │   │   │   ├── first-last-name.pipe.spec.ts
│   │   │   │   ├── first-last-name.pipe.ts
│   │   │   │   ├── identification.pipe.spec.ts
│   │   │   │   ├── identification.pipe.ts
│   │   │   │   ├── others-names.pipe.spec.ts
│   │   │   │   ├── others-names.pipe.ts
│   │   │   │   ├── secondt-last-name.pipe.spec.ts
│   │   │   │   ├── secondt-last-name.pipe.ts
│   │   │   │   ├── type-id.pipe.spec.ts
│   │   │   │   └── type-id.pipe.ts
│   │   │   ├── services
│   │   │   │   ├── login.service.ts
│   │   │   │   └── users.servide.ts
│   │   │   ├── shred-routing.module.ts
│   │   │   └── shared.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets
│   │   ├── icons
│   │   │   └── cidenetLogo.png
│   │   ├── images
│   │   │   └── cidenet.png
│   │   └── .gitkeep
│   │ 
│   ├── environments
│   │   ├── .getkeep
│   │   ├── enviroment.prot.ts
│   │   └── enviroment.ts
│   ├── custom-theme.scss
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── style.css
│   └── test.ts
├── .browserslistrc
├── .editor.config
├── .gitgnore
├── angular.json
├── karma.conf.js
├── package-lock.json
├── package.json
├── proxy.conf.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json

```

### Que incluye el archivo backend

Este incluye los siguientes componentes:
```
backend
├── Properties
│   ├── Resources.resx	
│   │   ├── launSetting.json
│   │   └── Resources.Designer.cs
│   │   └── member
├── Controllers
│   ├── AdminsController.cs
│   └── UsersController.cs
├── Data 
│   └── BackendContext.cs
├── Model
│   ├── Admin.cs
│   └── sers.cs
├── appsettings.json
│   └── appsettings.Development.json
└── Program.cs

```

## Mis datos

Nombre: Juan Sebastian Llano Taborda

Correo: Llanotaborda@gmail.com

Contacto: 3007166045

 //Redes Sociales\\

Facebook: <https://www.facebook.com/juansebastian.llanotabordascout.5>

Instagram: <https://www.instagram.com/j_u_a_n__s_e_b_a_s_t_i_a_n/?hl=es-la>
