import { h } from 'hyperapp';

export default ({ title, src, blurb }) => (
  <div class="card">
    <h3>{title}</h3>
    <img src={src} />
    <p>{blurb}</p>
  </div>
);
