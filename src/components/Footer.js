import { h } from 'hyperapp';

import MailingListSignUp from './MailingListSignUp';

export default ({ state: { links } }) => (
  <footer>
    {links.map(link => <a href={link.link}>{link.text}</a>)}
    <MailingListSignUp />
  </footer>
);
