import { h } from 'hyperapp';

import Icon from './Icon';

export default ({ state: { title, links } }) => (
  <nav id="nav">
    <h1>
      <a href={title.link}>{title.text}</a>
    </h1>
    {links.map(link => (
      <a href={link.link}>
        <Icon icon={link.icon} />
        {link.text}
      </a>
    ))}
  </nav>
);
