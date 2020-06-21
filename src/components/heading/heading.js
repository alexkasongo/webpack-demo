import './heading.scss';
import $ from 'jquery';

class heading {
    render() {
        const h1 = document.createElement('h1');
        const body = document.querySelector('body');
        h1.innerHTML = 'Webpack is Awesome';
        body.appendChild(h1);
    }
}

export default heading;