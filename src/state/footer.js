import nav from './nav';

const noMailingList = nav.links.filter(link => link.text !== 'Mailing List');

export default {
  links: noMailingList,
};
