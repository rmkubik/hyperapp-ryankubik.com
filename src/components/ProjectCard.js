import { h } from 'hyperapp';

export default ({
  title, src, blurb, link,
}) => (
  <a class="card" href={link}>
    <h3>{title}</h3>
    <div>
      <img src={src} />
    </div>
    <p>{blurb}</p>
  </a>
);
