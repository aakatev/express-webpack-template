import { html } from 'htm/preact';

const Navbar = () => html`
<nav class="navbar is-success" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      Webpack Express Template
    </a>
  </div>
</nav>`;

export {
  Navbar
}