import { h } from "hyperapp";

export default ({ title, src, blurb, link, links = [] }) => (
  <article>
    <a class="card" href={link}>
      <h3>{title}</h3>
      <div>
        <img src={src} />
      </div>
    </a>
    <p>{blurb}</p>
    <ul>
      {links.map(aLink => (
        <li>
          <a href={aLink.href}>{aLink.description}</a>
        </li>
      ))}
    </ul>
  </article>
);
