import template from './home.module.html';
import { BaseComponent } from '../../base/base.component';

export class HomeModule extends BaseComponent{

    constructor() {
        super(template);

        this.sendNavigation = () => {
            this.dispatch('.my-button', 'test');
        };

    }
}