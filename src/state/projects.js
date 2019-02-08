import eclipseThumbnailImage from "../../assets/images/projects/eclipse.png";
import trainsmissionThumbnailImage from "../../assets/images/projects/trainsmission.png";
import unstableThumbnailImage from "../../assets/images/projects/unstable-title-screen.gif";
import infiniteIconsThumbnailImage from "../../assets/images/projects/infinite_icons.png";
import socialNetworkThumbnailImage from "../../assets/images/projects/social_network.png";
import hikeintheWoodsThumbnailImage from "../../assets/images/projects/hike_in_the_woods.gif";
import lobsterbotomyThumbnailImage from "../../assets/images/projects/lobsterbotomy.gif";
import sweetSpookyThumbnailImage from "../../assets/images/projects/sweet_n_spooky.gif";
import voxelTerrainThumbnailImage from "../../assets/images/projects/terrain_gen.png";
import matchEmAllThumbnailImage from "../../assets/images/projects/matchem.png";
import aStarDemoThumbnailImage from "../../assets/images/projects/pathfinder.png";
import trainsmissionProductPageThumbnailImage from "../../assets/images/projects/trainsmission-site.png";
import editEveryDamnDayThumbnailImage from "../../assets/images/projects/calendar.png";
import robotsVsAliensThumbnailImage from "../../assets/images/projects/robovsalien.png";
import nightSkyThumbnailimage from "../../assets/images/projects/night-sky.gif";
import simpleDungeonGeneratorThumbnailImage from "../../assets/images/projects/simple-dungeon-generator.gif";
import bandYoureDealtThumbnailImage from "../../assets/images/projects/band-youre-dealt.jpg";
import jazzmanThumbnailImage from "../../assets/images/projects/jazzman.jpg";
import shoemonThumbnailImage from "../../assets/images/projects/shoemon-boot.png";
import langangaThumbnailImage from "../../assets/images/projects/langanga-title.png";
import wildfireThumbnailImage from "../../assets/images/projects/conways-wildfire.gif";
import shelloWorldImage from "../../assets/images/projects/shello-world-title.png";
import wildfireImage from "../../assets/images/projects/wildfire-success-modal.gif";

export default {
  shelloWorld: {
    title: "Make for the Waves!",
    thumbnail: {
      blurb:
        "Race down the beach as a baby turtle using your phone as a controller! Built using Air Console, an in browser console that allowed your friends to play games together with your phones as controllers. This was build for Global Game Jam 2019.",
      src: shelloWorldImage
    },
    link: "https://globalgamejam.org/2019/games/make-waves",
    links: [
      {
        description:
          'Read my retrospective about making "Make for the Waves!" on my blog.',
        href: "https://ryankubik.com/blog/deliberate-game-jamming/"
      },
      {
        description:
          "A video of the gameplay on the last day of the jam posted on Twitter",
        href: "https://twitter.com/ryrykubes/status/1089723719453310976"
      }
    ]
  },
  eclipse: {
    title: "Eclipse",
    thumbnail: {
      blurb: "Enjoy the view! Created in an evening for Ludum Dare 42.",
      src: eclipseThumbnailImage
    },
    link: "https://law5guy.itch.io/eclipse"
  },
  trainsmission: {
    title: "Trainsmission",
    thumbnail: {
      src: trainsmissionThumbnailImage,
      blurb:
        "Can you get to the bottom of the murder mystery? Built in 48 hours for Global Game Jam 2018 in Unity."
    },
    link: "https://law5guy.itch.io/trainsmission",
    links: [
      {
        description: "Official submission page.",
        href: "https://globalgamejam.org/2018/games/trainsmission-0"
      }
    ]
  },
  unstable: {
    title: "Unstable",
    thumbnail: {
      src: unstableThumbnailImage,
      blurb:
        "Adventure through a series of different worlds to find your way back home. Built with Phaser and published on Kongregate."
    },
    link: "https://unstablegame.com",
    links: [
      {
        description: "A blog post with an early look at how Unstable evolved.",
        href:
          "https://medium.com/@ryrykubes/core-mechanics-game-design-in-unstable-8dae1bcfae40"
      },
      {
        description:
          "The original early version of Unstable created for Jamuary with the Lostcast community.",
        href: "https://law5guy.itch.io/unstable"
      }
    ]
  },
  infiniteIcons: {
    title: "Infinite Icons",
    thumbnail: {
      src: infiniteIconsThumbnailImage,
      blurb:
        "Your desktop is getting out of control! Build in 48 hours using React for Ludum Dare 40."
    },
    link: "https://law5guy.itch.io/infinite-desktop-icons",
    links: [
      {
        description: "Official submission page",
        href: "https://ldjam.com/events/ludum-dare/40/infinite-desktop-icons"
      },
      {
        description:
          "A devlog chronicling the development of Infinite Icons over the jam weekend",
        href:
          "https://ldjam.com/events/ludum-dare/40/infinite-desktop-icons/ld-40-devlog-infinite-desktop-icons"
      }
    ]
  },
  wildfire: {
    title: "Wildfire",
    thumbnail: {
      src: wildfireImage,
      blurb:
        "A mix up of Conway's Game of Life with a tile swapping mechanic. Save as many houses as you can from being destroyed in the fire. This project was originally created in an evening as a late entry to Ludum Dare 41. Its currently being rebuilt as a polished game using Redux to stitch together Phaser & React. "
    },
    link: "",
    links: [
      {
        description:
          "Experimentation with randomly generating levels shared on Twitter",
        href: "https://twitter.com/ryrykubes/status/1093224809541128192"
      },
      {
        description:
          "The level editor in the remake version demoed on Twitter with old sprites",
        href: "https://twitter.com/ryrykubes/status/1084138688668405760"
      },
      {
        description: "Play the original version of the idea from Ludum Dare 41",
        href: "https://law5guy.itch.io/wildfire"
      }
    ]
  },
  trainsmissionProductPage: {
    title: "Trainsmission Product Page",
    thumbnail: {
      src: trainsmissionProductPageThumbnailImage,
      blurb: "Promotional site for Global Game Jam 2018 game, Trainsmission."
    },
    link: "http://www.trainsmission.com"
  },
  jazzman: {
    title: "The Jazzman",
    thumbnail: {
      src: jazzmanThumbnailImage,
      blurb:
        "An escape-room game for a small group of people where the goal is to translate, crack, and solve a variety of puzzles. The Jazzman is a physical suitcase with puzzling journal entires left behind by a crazed investigator. It has an web-site companion built in Hyperapp. Built in a week for PIGSquad Summer Slow Jams 2018 for the theme Location."
    },
    link: "https://conto.itch.io/jazzman"
  },
  shoemon: {
    title: "Shoé-mon",
    thumbnail: {
      src: shoemonThumbnailImage,
      blurb:
        "A parody of the monster catching genre of games built in a week for PIGSquad's Summer Slow Jams for the theme Boot Leg. This project was built using Hyperapp."
    },
    link: "https://law5guy.itch.io/shoes"
  },
  langanga: {
    title: "Langanga",
    thumbnail: {
      src: langangaThumbnailImage,
      blurb:
        "Langanga is a narrative platformer made in a week for the PIGSquad Summer Slow Jams. Built using Game Maker Studio."
    },
    link: "https://law5guy.itch.io/langanga"
  },
  bandYoureDealt: {
    title: "The Band You're Dealt",
    thumbnail: {
      src: bandYoureDealtThumbnailImage,
      blurb:
        "A card game for 3 - 6 players! Draw band members, and battle to be the best band in town."
    },
    link: "https://wesdoes.itch.io/the-band-youre-dealt"
  },
  hikeintheWoods: {
    title: "A Hike in the Woods",
    thumbnail: {
      src: hikeintheWoodsThumbnailImage,
      blurb:
        "Wander around in the woods to try and get back to your tent. This was built for JS13k, a competition to build a web game in under 13kb. It was built on top of HTML5 Canvas with no external libraries."
    },
    link: "http://js13kgames.com/entries/a-hike-in-the-woods"
  },
  socialNetwork: {
    title: "A Social Network",
    thumbnail: {
      src: socialNetworkThumbnailImage,
      blurb:
        "A little social network simulation. Connect all of the computers and people! This project was built using Phaser."
    },
    link: "https://ldjam.com/events/ludum-dare/38/a-social-network",
    links: [
      {
        description:
          "I shared a post-mortem looking at how I could improve in the future",
        href: "https://medium.com/@ryrykubes/tools-tech-1e49c3a080d7"
      }
    ]
  },
  lobsterbotomy: {
    title: "Lobsterbotomy",
    thumbnail: {
      src: lobsterbotomyThumbnailImage,
      blurb:
        "Can you find love controlling your human as you get back in the dating game? This project was built using LIBGDX."
    },
    link: "https://wvugamedevelopers.itch.io/lobsterbotomy"
  },
  simpleDungeonGenerator: {
    title: "Simple Dungeon Generator",
    thumbnail: {
      src: simpleDungeonGeneratorThumbnailImage,
      blurb:
        "Randomly distributed rooms as a Rogulike dungeong generation experiment build on CodePen."
    },
    link: "https://codepen.io/rmkubik/pen/rrKZYr"
  },
  sweetSpooky: {
    title: "Sweet & Spooky",
    thumbnail: {
      src: sweetSpookyThumbnailImage,
      blurb:
        "Explore as far as you can into this spooky mansion in this fast paced shooter. This project was built for Game Maker 48 jam in Game Maker Studio."
    },
    link: "http://www.gm48.net/game/?id=331"
  },
  voxelTerrain: {
    title: "Procedural Voxel Terrain Generator",
    thumbnail: {
      src: voxelTerrainThumbnailImage,
      blurb:
        "Fly around procedurally generated terrain inside a custom built voxel engine. This project was built on top of LIBGDX as an experiment over a long weekend."
    },
    link: ""
  },
  matchEmAll: {
    title: "Gotta Match 'Em All",
    thumbnail: {
      src: matchEmAllThumbnailImage,
      blurb:
        "Match all the pokemon copies together in this Pokemon inspired concentration game. Built with Phaser."
    },
    link: "https://r-k.io/matchem/"
  },
  aStarDemo: {
    title: "A* Pathfinding Demo",
    thumbnail: {
      src: aStarDemoThumbnailImage,
      blurb:
        "Place piles of gold and flood tiles to entice adventurers to move around the map. Built with Phaser."
    },
    link: "https://law5guy.itch.io/astar-pathfinder-demo"
  },
  // editEveryDamnDay: {
  //   title: "Edit Every Damn Day Calendar",
  //   thumbnail: {
  //     src: editEveryDamnDayThumbnailImage,
  //     blurb: "30 seconds of video edited every day by @AldenRoth2 on Instagram"
  //   },
  //   link: "https://github.com/rmkubik/eedd-calendar"
  // },
  robotsVsAliens: {
    title: "Robots vs. Aliens Twitter Bot",
    thumbnail: {
      src: robotsVsAliensThumbnailImage,
      blurb:
        "A simulation of robots fighting aliens hourly. Build using a Python script deployed to Heroku. The script runs hourly, advances an internal simulation, tweets the result to Twitter, and persists state in between script executions using MemCachier."
    },
    link: "https://github.com/rmkubik/robovsalien"
  },
  nightSky: {
    title: "Ascii Night Sky",
    thumbnail: {
      src: nightSkyThumbnailimage,
      blurb:
        "A gently twinkling night sky with randomly distributed stars built on CodePen."
    },
    link: "https://codepen.io/rmkubik/pen/bMZBMw?editors=0110"
  }
};
