import template from './test.module.html';
import css from './test.module.css';

import { BaseComponent } from '../../base/base.component';

export class TestModule extends BaseComponent{

    constructor() {
        super(template, css);
    }
}