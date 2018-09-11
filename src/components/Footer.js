import { h } from 'hyperapp';

export default ({ state: { links } }) => (
  <footer>{links.map(link => <a href={link.link}>{link.text}</a>)}</footer>
);
