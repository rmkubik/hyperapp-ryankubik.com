import { h } from 'hyperapp';

import MailingListSignUp from './MailingListSignUp';
import Icon from './Icon';

import upArrowImage from '../../assets/images/icons/chevron-top.svg';

export default () => (
  <footer>
    {/* links.map(link => (
      <div>
        <a href={link.link}>{link.text}</a>
      </div>
  )) */}
    <MailingListSignUp />
    <a href="#nav">
      <Icon icon={upArrowImage} />
    </a>
  </footer>
);
