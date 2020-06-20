import './heading.scss';

class heading {
    render(pageName) {
        const h1 = document.createElement('h1');
        const body = document.querySelector('body');
        h1.innerHTML = 'Webpack is Awesome. This is "' + pageName + '"page';
        body.appendChild(h1);
    }
}

export default heading;