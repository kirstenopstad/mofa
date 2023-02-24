import klee from './img/gen_images/img-FsXiqDunN0DT8nH9W7MK07GP.png'
import kandinsky from './img/gen_images/img-pTm4prSz6SkM3sjZo7LBT0gk.png'
import feininger from './img/gen_images/img-vujGHIheyP5efqoS37Urs2w3.png'
import malibu from './img/gen_images/img-6Esjc3yYlUqZwh7rHlYicdjy.png'
import bigSur from './img/gen_images/img-VFaITUC1FFtO8eyncpWBJJ12.png'
import portland from './img/gen_images/img-FZALK1vPHqTaGxEtrkiqqgqO.png'


const exhibitions = [
  { exhTitle: `Three of Four`,
    endDate: `soon`,
    description: `A poker game three ways`,
    id: 1
  },
  { exhTitle: `Almost Expressionists`,
    endDate: `March 15`,
    description: `Expressionist landscapes`,
    id: 2
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
]

const titles = [
  { artworkId: 1,
    title: `Fake Title Submission`,
    votes: 0,
  },
  { artworkId: 1,
    title: `Better Fake Title Submission`,
    votes: 2,
  },
  { artworkId: 1,
    title: `Middleing Fake Title Submission`,
    votes: 1,
  }
]
export { exhibitions, artworks, titles };