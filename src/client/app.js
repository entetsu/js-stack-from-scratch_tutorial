import 'babel-polyfill';
import Dog from '../shared/dog';

const browserHeisenberg = new Dog('Browser Heisenberg');

document.querySelector('.app').innerText = browserHeisenberg.bark();
