import writingIconImage from '../../assets/images/icons/pencil.svg';
import githubIconImage from '../../assets/images/icons/github.svg';
import twitterIconImage from '../../assets/images/icons/twitter.svg';
import envelopeIconImage from '../../assets/images/icons/envelope-closed.svg';
import envelopeOpenIconImage from '../../assets/images/icons/envelope-open.svg';

export default {
  title: {
    text: 'Ryan Kubik',
    link: '/',
  },
  links: [
    {
      text: 'Blog',
      link: '/blog',
      icon: writingIconImage,
    },
    {
      text: 'Github',
      link: 'https://github.com/rmkubik',
      icon: githubIconImage,
    },
    {
      text: 'Twitter',
      link: 'https://twitter.com/ryrykubes',
      icon: twitterIconImage,
    },
    {
      text: 'Email',
      link: 'mailto:rmkubik@me.com',
      icon: envelopeIconImage,
    },
    {
      text: 'Mailing List',
      link: '#mc_embed_signup',
      icon: envelopeOpenIconImage,
    },
  ],
};
