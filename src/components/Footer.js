import { h } from 'hyperapp';

import MailingListSignUp from './MailingListSignUp';

export default ({ state: { links } }) => (
  <footer>
    {links.map(link => (
      <div>
        <a href={link.link}>{link.text}</a>
      </div>
    ))}
    <MailingListSignUp />
  </footer>
);
