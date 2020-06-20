import Kiwi from './kiwi.jpg';
import './kiwi-image.scss';

class KiwiImage {
    render() {
        const img = document.createElement('img');
        img.src = Kiwi;
        img.alt = 'kiwi fruit';
        img.classList.add('kiwi-image');

        const bodyDomElemenet = document.querySelector('body');
        bodyDomElemenet.appendChild(img);
    }
}

export default KiwiImage;