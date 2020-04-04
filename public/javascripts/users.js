import { h, Component, render } from 'preact';
import { html } from 'htm/preact';
import { Header, Footer } from 'shared';

class UsersPage extends Component {
  addTodo() {
    const { todos = [] } = this.state;
    this.setState({ todos: todos.concat(`Item ${todos.length}`) });
  }
  render({ page }, { todos = [] }) {
    return html`
      <div class="app">
        <${Header} name="ToDo's (${page})" />
        <ul>
          ${todos.map(todo => html`
            <li>${todo}</li>
          `)}
        </ul>
        <button onClick=${() => this.addTodo()}>Add Todo</button>
        <${Footer}>footer content here<//>
      </div>
    `;
  }
}

render(html`<${UsersPage} page="Users" />`, document.getElementById('app'));