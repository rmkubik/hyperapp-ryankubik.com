import { h } from 'hyperapp';

export default ({ title, src, blurb }) => (
  <div class="card">
    <h3>{title}</h3>
    <div>
      <img src={src} />
    </div>
    <p>{blurb}</p>
  </div>
);
