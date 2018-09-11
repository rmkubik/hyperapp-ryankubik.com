import { h } from 'hyperapp';

export default ({ state: { title, links } }) => (
  <nav>
    <h1>
      <a href={title.link}>{title.text}</a>
    </h1>
    {links.map(link => <a href={link.link}>{link.text}</a>)}
  </nav>
);
