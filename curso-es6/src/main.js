class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.listEl = document.getElementById('repo-list');
    this.registerHandlers();
  }
  
  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }
  
  addRepository(){
    event.preventDefault();
    this.repositories.push({ 
      name: 'rocketseat',
      description: 'tire sua ideia do papel e de vida a sua startup',
      avatar_url: 'https://avatars0.githubusercontent.com/u/28929274',
      html_url: 'https://github.com/Rocketseat/',
    });
    console.log(this.repositories);
    this.render();
  }

  render() {
    this.listEl.innerHTML = '';
    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titlegEl = document.createElement('strong');
      titlegEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement('strong');
      let titlegEl = document.createElement('strong');
      titlegEl.appendChild(document.createTextNode(repo.name));.appendChild(document.createTextNode(repo.name));

      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);
    });
  }
}

new App();