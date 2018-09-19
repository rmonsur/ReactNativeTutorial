
//three steps
//Import a lib to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create a component
// JS function and return object that describes what the component looks like on screen

const App = () => (
       //Dialect of JS called JSX which follows the same semantics as HTML
       // JSX is still JS - its syntactical sugar 

       //Text tag is a primitive that needs to be imported from react-native
       // to preevent error throwing by ES6 Lint is a style called import- destructuring
        <Text>Some Text</Text>
);

// Render the component
// Register at least one component to the application
// The name of the project should match the string in the first parameter
// We are registering the 'App' component 
AppRegistry.registerComponent('ReactTutorial', ()=> App)
