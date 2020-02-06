# Instrunctions

  

### Installing

  

```

npm install

```

  

## Development Server

  

```

gatsby develop

```

  

or

  

```

npm start

```

  

## Build

  

```

gatsby build

```

  

## Production Server

  

```

gatsby serve

```

  

## Tests

  

```

npm t

```

  

# Documentation

  

## Libraries

  

* Gatsby - it's a free and open source framework based on React that helps developers build blazing fast websites and apps. I use it because it comes with the well-configured development environment

  

* Axios - it's a free library to make AJAX requests

  

* Jest - it's a good library to do some tests

  

* Helmet - it's a library to change the content of the HEAD tag, like title and favicon

  

## The Main file

  

The main file is located in src/pages/index.js. In this file we import all the components that the application uses. Here I use a main component that control the state of the application, and pass properties to child components

  

## Components

  

The components are located in src/components/. Note that each component has its own style imports and other components as well.

  

## Test components

  

The test components are located in \__tests__. Here I did some basic tests, like checking if the props are receiving an array

  

## Styles

  

All the styles are located in src/styles/

  

## Pages

  

All pages are located in src/pages/. Here we have only two pages, index and 404. if you need more pages, add to this folder

  

If you need more information about __components__, __props__, __state__, __import__ and __export__, see the [React.js docs](https://reactjs.org/tutorial/tutorial.html)