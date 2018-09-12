import { h } from 'hyperapp';

export default ({ icon }) => (
  <div
    className="icon"
    oncreate={(e) => {
      e.innerHTML = icon;
    }}
  />
);
