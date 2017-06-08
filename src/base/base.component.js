'use strict';

export class BaseComponent {

    constructor(template, css) {
        this.template = template;
        this.bindedHTML;

        if(css) {
            this.template = `<style>${css[0][1]}</style>${this.template}`;
        }

        this.dispatch = (selector, eventName) => {
            var event = document.createEvent('Event');

            event.initEvent(eventName, true, true);

            this.bindedHTML
                .querySelector(selector)
                .dispatchEvent(event);
        }
    }

};