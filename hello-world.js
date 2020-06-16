function helloWorld() {
    console.log(`hello-world.js - 2 - variable`, 'Hello Aleko');
}

/**
 * explicitely export this file so that it can be read in other files and can be built with webpack
 * the syntax used is ecmaScript modules which are supported in webpack by default
 */
export default helloWorld;