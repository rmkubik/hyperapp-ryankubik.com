import ld40DevLogThumbnailImage from '../../assets/images/writing/ld40devlog.gif';
import ld38PostMortemThumbnailImage from '../../assets/images/writing/ld38postmortem.png';
import coreMechanicsUnstableThumbnailImage from '../../assets/images/writing/coreMechanicsUnstable.png';
import tldrThumbnailImage from '../../assets/images/writing/tldr-standup.png';
import tilThumbnailImage from '../../assets/images/writing/til-pick-random.png';

export default {
  til: {
    link: 'https://github.com/rmkubik/til',
    title: 'TIL',
    thumbnail: {
      blurb:
        "Today I Learned: A collection of random things I have picked up that I've recorded so I can find them again later.",
      src: tilThumbnailImage,
    },
  },
  ld40DevLog: {
    title: 'LD 40 Devlog - Infinite Desktop Icons',
    thumbnail: {
      blurb:
        'The theme is “The More You Have, the Worse it Gets”! Of the other top themes, this was not one of the ones I was very excited about. I spent the most of Friday night brainstorming to try and come up with a game idea...',
      src: ld40DevLogThumbnailImage,
    },
    link:
      'https://ldjam.com/events/ludum-dare/40/infinite-desktop-icons/ld-40-devlog-infinite-desktop-icons',
  },
  ld38PostMortem: {
    title: 'LD38 Postmortem',
    thumbnail: {
      blurb:
        'Working alone is harder than working on a team. You really find out what your personal weak points are. I didn’t have much appreciation for developing skills outside of my wheelhouse. Its very easy to discard other skills when you’re working with talented people who can handle those departments, but a solo jam is a whole different animal...',
      src: ld38PostMortemThumbnailImage,
    },
    link: 'https://ldjam.com/events/ludum-dare/38/a-social-network/ld38-postmortem',
  },
  tldr: {
    link: 'https://github.com/rmkubik/tldr',
    title: 'TLDR',
    thumbnail: {
      blurb: "Too Long Didn't Read: Summaries, Notes, and Takeaways of Videos, Articles, and Books",
      src: tldrThumbnailImage,
    },
  },
  coreMechanicsUnstable: {
    link: 'https://medium.com/@ryrykubes/core-mechanics-game-design-in-unstable-8dae1bcfae40',
    title: 'Core Mechanics & Game Design in Unstable',
    thumbnail: {
      blurb:
        'I’m going to take a look at the design of a project I’ve been working on off and on for a while now. It was originally created as part of a month long game jam in January. Unstable began its life as a digital art piece...',
      src: coreMechanicsUnstableThumbnailImage,
    },
  },
};
