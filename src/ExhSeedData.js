import klee from './img/gen_images/img-FsXiqDunN0DT8nH9W7MK07GP.png'
import kandinsky from './img/gen_images/img-pTm4prSz6SkM3sjZo7LBT0gk.png'
import feininger from './img/gen_images/img-vujGHIheyP5efqoS37Urs2w3.png'
import malibu from './img/gen_images/img-6Esjc3yYlUqZwh7rHlYicdjy.png'
import bigSur from './img/gen_images/img-VFaITUC1FFtO8eyncpWBJJ12.png'
import portland from './img/gen_images/img-FZALK1vPHqTaGxEtrkiqqgqO.png'
import warhol1 from './img/gen_images/img-9Es9wzYwLVEnXmzC46GLln7Z.png'
import warhol2 from './img/gen_images/img-AE0EegNHIfRsHCV4z8Ibf68l.png'
import warhol3 from './img/gen_images/img-YC6tzwylSV6GC7NhgT43IK3T.png'
import renoir1 from './img/gen_images/img-h5DVe19ZoJWs0zIUikVAWkjZ.png'
import renoir2 from './img/gen_images/img-ibTXwK7qWcv82XcVFlH12wQ2.png'
import renoir3 from './img/gen_images/img-hDkf1LWx0ixe4K2mVHIKSxem.png'
import renoir4 from './img/gen_images/img-K171yV2R6StOfyfr6LyUEtd8.png'
import renoir5 from './img/gen_images/img-4fF51x68u2u7EQXwwvD2IFik.png'

const exhibitions = [
  { exhTitle: `Three of Four`,
    endDate: `Soon`,
    description: `A poker game three ways`,
    id: 1
  },
  { exhTitle: `Almost Expressionists`,
    endDate: `March 15`,
    description: `Expressionist landscapes`,
    id: 2
  },
  { exhTitle: `War Hall`,
    endDate: `April 15`,
    description: `Observe thrice daily`,
    id: 3
  },
  { exhTitle: `Thought That Was The Other Guy`,
    endDate: `May 15`,
    description: `Portraits of American eats`,
    id: 4
  },
]

const artworks = [
  { image: klee,
    prompt: `a poker game of fish, Paul Klee eqsue`,
    exhId: 1,
    id: 1
  },
  { image: feininger,
    prompt: `a poker game of fish, Lyonel Feininger eqsue`,
    exhId: 1,
    id: 2
  },
  { image: kandinsky,
    prompt: `a poker game of fish, Kandinsky eqsue`,
    exhId: 1,
    id: 3
  },
  { image: malibu,
    prompt: `malibu landscape in expressionist style`,
    exhId: 2,
    id: 4
  },
  { image: bigSur,
    prompt: `bigSur landscape in expressionist style`,
    exhId: 2,
    id: 5
  },
  { image: portland,
    prompt: `portland landscape in expressionist style`,
    exhId: 2,
    id: 6
  },
  { image: warhol1,
    prompt: `purple toothpaste in the style of Andy Warhol`,
    exhId: 3,
    id: 8
  },
  { image: warhol2,
    prompt: `purple toothpaste in the style of Andy Warhol`,
    exhId: 3,
    id: 9
  },
  { image: warhol3,
    prompt: `purple toothpaste in the style of Andy Warhol`,
    exhId: 3,
    id: 10
  },
  { image: renoir1,
    prompt: `painting of a diner at night in the style of Renoir`,
    exhId: 4,
    id: 11
  },
  { image: renoir2,
    prompt: `painting of a diner at night in the style of Renoir`,
    exhId: 4,
    id: 12
  },
  { image: renoir3,
    prompt: `painting of a diner at night in the style of Renoir`,
    exhId: 4,
    id: 13
  },
  { image: renoir4,
    prompt: `painting of a diner at night in the style of Renoir`,
    exhId: 4,
    id: 14
  },
  { image: renoir5,
    prompt: `painting of a diner at night in the style of Renoir`,
    exhId: 4,
    id: 15
  },
]

const titles = [
  { artworkId: 1,
    title: `Fake Title Submission`,
    votes: 0,
    id: 1,
  },
  { artworkId: 1,
    title: `Better Fake Title Submission`,
    votes: 2,
    id: 2,
  },
  { artworkId: 1,
    title: `Middleing Fake Title Submission`,
    votes: 1,
    id: 3,
  }
]
export { exhibitions, artworks, titles };