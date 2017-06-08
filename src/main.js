import { routes } from './main.routes';
import { initializeState } from "./base/base.app";

initializeState(routes);

document.addEventListener('test', function() {
    alert('event from below');
})