import api from './api';

class App {
    constructor() {
        this.repositories = [];

        this.formElement = document.querySelector('#repo-form');
        this.listElement = document.querySelector('#repo-list');
        this.inputElement = document.querySelector('input[name=repository]');

        this.registerHandlers();
    }


    //Function that register the events...
    // the function will listen to all events that are listed
    registerHandlers() {
        this.formElement.onsubmit = event => this.addReporitory(event);
    }

    setLoading(loading = true) {
        if (loading) {
            let loadingElement = document.createElement('span');
            loadingElement.appendChild(document.createTextNode('Carregando...'));
            loadingElement.setAttribute('id', 'loading');

            this.formElement.appendChild(loadingElement);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addReporitory(event) {
        event.preventDefault();

        try {
            const repositorieInput = this.inputElement.value;

            if (repositorieInput === 0)
                return;

            this.setLoading();


            const response = await api.get(`/repos/${repositorieInput}`);

            const { name, description, html_url, owner: { avatar_url } } = response.data;


            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });

            this.inputElement.value = '';

            this.render();
        } catch (error) {
            alert('Repositório não encontrado!');
        }

        this.setLoading(false);
    }

    render() {
        this.listElement.innerHTML = '';

        this.repositories.forEach(repositorie => {
            let imgElement = document.createElement('img');
            imgElement.setAttribute('src', repositorie.avatar_url);

            let titleElement = document.createElement('strong');
            titleElement.appendChild(document.createTextNode(repositorie.name));

            let descriptionElement = document.createElement('p');
            descriptionElement.appendChild(document.createTextNode(repositorie.description));

            let linkElement = document.createElement('a');
            linkElement.setAttribute('target', 'blank');
            linkElement.setAttribute('href', repositorie.html_url);
            linkElement.appendChild(document.createTextNode('Acessar'))

            let listItemElement = document.createElement('li');
            listItemElement.appendChild(imgElement);
            listItemElement.appendChild(titleElement);
            listItemElement.appendChild(descriptionElement);
            listItemElement.appendChild(linkElement);

            this.listElement.appendChild(listItemElement);
        });
    }

}

new App;