import './hello-world-button.scss';

class HelloWorldButton {
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        button.classList.add('hello-world-button');
        const body = document.querySelector('body');
        button.onclick = function() {
            const p = document.createElement('p');
            p.innerHTML = 'Hello World';
            p.classList.add('hello-world-text');
            body.appendChild(p)
        };
        body.appendChild(button)
    }
}

/**
 * explicitely export this file so that it can be read in other files and can be built with webpack
 * the syntax used is ecmaScript modules which are supported in webpack by default
 */
export default HelloWorldButton;