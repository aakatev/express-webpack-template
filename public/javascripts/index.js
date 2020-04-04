import { h, Component, render } from 'preact';
import { html } from 'htm/preact';
import { Navbar } from './shared';

class IndexPage extends Component {
  render() {
    return html`
      <${Navbar}/>
      <div class="container">
        <div class="notification">
          <h3 class="title">Welcome to Home Page!</h3>
          <p class="subtitle">This application uses Express and Webpack!</p>
          <div class="buttons">
            <a class="button is-link is-light" href="/users">See Users</a>
          </div>
        </div>
      </div>
    `;
  }
}
render(html`<${IndexPage}/>`, document.getElementById('app'));