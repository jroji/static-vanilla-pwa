export const initializeState = (routes, currentState = window.location.pathname) => {
    if(typeof routes[currentState] === 'string') {
        _importModule(routes,currentState);
    } else {
        _vinculateHTML(routes, currentState);
        window.onpopstate = function(e){
            initializeState(routes, window.location.pathname);
        };
    }
};

const _vinculateHTML = (routes, currentState) => {
    let shell = document.querySelector('#shell');
    let context;

    context = routes[currentState] || routes['*'];
    shell.innerHTML = context.template;

    let links = shell.querySelectorAll('a[internal-link]');

    _updateLinks(links, routes);

    context.bindedHTML = shell;
    window.context = Object.assign({}, context);
};

const _importModule = (routes, currentState) => {
    let route = routes[currentState].split('#');
    import('../modules' + route[0]).then( (data) => {
        routes[currentState] = new data[route[1]]();
        initializeState(routes, currentState);
    });
};

const _updateLinks = (links, routes) => {
    for(let idx = 0; idx < links.length; idx++) {
        links[idx].addEventListener('click', (event) => {
            event.preventDefault();
            window.history.pushState({}, 'foo', event.target.href);
            initializeState(routes, window.location.pathname)
        });
    }
};