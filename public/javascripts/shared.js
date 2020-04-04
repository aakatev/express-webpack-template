import { html } from 'htm/preact';

const Header = ({ name }) => html`<h1>${name} List</h1>`
const Footer = props => html`<footer ...${props} />`

export {
  Header,
  Footer
}