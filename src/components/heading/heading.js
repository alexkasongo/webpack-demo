import './heading.scss';
import $ from 'jquery';

class heading {
    render() {
        const h1 = $('<h1>');
        const body = $('body');
        h1.text('Webpack is wow');
        body.append(h1);
    }
}

export default heading;