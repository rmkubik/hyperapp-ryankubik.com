import { h } from 'hyperapp';

export default ({ id, title, projects }) => (
  <section id={id}>
    <h2>{title}</h2>
    <div>
      <h3>Unstable</h3>
      <img src="https://via.placeholder.com/400x300" />
      <p>Blurb about Unstable</p>
    </div>
    <div>
      <h3>Trainsmission</h3>
      <img src="https://via.placeholder.com/400x400" />
      <p>Blurb about Trainsmission</p>
    </div>
    <div class="card">
      <h3>Eclipse</h3>
      <img src="https://via.placeholder.com/300x400" />
      <p>Blurb about Eclipse</p>
    </div>
  </section>
);
