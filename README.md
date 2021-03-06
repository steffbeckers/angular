# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Ran commands for NgRx and modules

NgRx
https://ngrx.io/guide/schematics
`npm install @ngrx/schematics @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools`

`ng generate @ngrx/schematics:store State --root --statePath store --module app.module.ts`

`ng generate @ngrx/schematics:effect store/App --root --module app.module.ts --group`

`ng generate module admin --route admin --module app.module.ts`

`ng generate @ngrx/schematics:feature admin/store/Admin --module admin/admin.module.ts --group`

`ng generate module auth --route auth --module app.module.ts`

`ng generate @ngrx/schematics:feature auth/store/Auth --module auth/auth.module.ts --group`

`ng generate @ngrx/schematics:action auth/store/Login --group --creators --api`

`ng generate @ngrx/schematics:feature store/UI --module app.module.ts --group`

`ng generate module todos --route todos --module app.module.ts`

`ng generate @ngrx/schematics:feature todos/store/Todos --module todos/todos.module.ts --group`

`ng generate @ngrx/schematics:effect store/App --module app.module.ts --group`

`npm install @ngrx/router-store`

`npm install @ngrx/entity`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
