import { h, Component, render } from 'preact';
import { html } from 'htm/preact';
import { Navbar } from './shared';

class UsersPage extends Component {
  addUser() {
    const { users = [] } = this.state;
    this.setState({ users: users.concat(`User ${users.length}`) });
  }
  render({ page }, { users = [] }) {
    return html`
      <${Navbar}/>
      <div class="container">
        <div class="notification">
          <h3 class="title">Welcome to Users page!</h3>
          <p class="subtitle">Click a button to add more users!</p>
          <ul>
            ${users.map(user => html`
              <li>${user}</li>
            `)}
          </ul>
          <div class="buttons">
            <button class="button is-success" onClick=${() => this.addUser()}>Add User</button>
            <a class="button is-link is-light" href="/">Go back Home</a>
          </div>
        </div>        
      </div>
    `;
  }
}

render(html`<${UsersPage} />`, document.getElementById('app'));