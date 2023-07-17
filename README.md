## Create Module

```bash
$ nest g module tasks
```


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### NestJS Modules
      Each application has at least one module - the root module. That is the starting point of the application.
      Modules are an effective way to organize components by a closely related set of capabilities (e.g. per feature).
      It is a good practice to have a folder per module, containing the module's components.
      Modules are singletons, therefore a module can be imported by multiple other modules.

  #### Defining a module
          A module is defined by annotating a class with the `@Module` decorator.
          The decorator provides metadata that Nest uses to organize the application structure.

  #### @Module Decorator Properties
          providers: Array of providers to be available within the module via dependency injection.
          controllers: Array of controllers to be instantiated within the module.
          exports: Array of providers to export to other modules.
          imports: List of modules required by this module. Any exported provider by these modules will now be available in our module via dependency injection.

  #### NestJS Controllers
          Responsible for handling incoming requests and returning responses to the client.
          Bound to a specific path (for example, "/tasks" for the task resource).
          Contain handlers, which handle endpoints and request methods (GET, POST, DELETE etcetera).
          Can take advantage of dependency injection to consume providers within the same module.
  #### Defining a Controller
          Controllers are defined by decorating a class with the @Controller decorator.
          The decorator accepts a string, which is the path to be handled by the controller.
   ####  Defining a Handler 
          Handlers are simply methods within the controller class, decorated with decorators such as @Get, @Post, @Delete etcetera.

   ####  HTTP request incoming
            Request routed to Controller, handler is called with arguments.

            NestJS will parse the relevant request data and it will be available in the handler.

            Handler handles the request

            Perform operations such as communication with a service. For example, retrieving an item from the database.

            Handler returns response value

            Response can be of any type and even an exception. Nest will wrap the returned value as an HTTP response and return it to the client.
    