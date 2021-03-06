/**
 * import dependencies - else they won't work
 */
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import HelloWorldButton from './components/hello-world-button/hello-world-button.js'
import Heading from './components/heading/heading.js'
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; // webpack does not bundle bootstrap when used this way
import './index.scss';
// import React from 'react'; 

library.add(faSpinner);
dom.watch();

const heading = new Heading();
heading.render();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();


if(process.env.NODE_ENV === 'production') {
    console.log('production mode')
} else if(process.env.NODE_ENV === 'development') {
    console.log('development mode')
}
