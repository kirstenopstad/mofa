import klee from './img/gen_images/img-FsXiqDunN0DT8nH9W7MK07GP.png'

const exhibitions = [
  { exhTitle: `Three of Four`,
    endDate: `soon`,
    description: `A poker game three ways`,
    id: 1
  },
  { exhTitle: `Almost Expressionists`,
    endDate: `March 15`,
    description: `Expressionist selifies`,
    id: 2
  },
]

const artworks = [
  { image: klee,
    prompt: `a poker game of fish, Paul Klee eqsue`,
    exhibitionId: 1,
    id: 1
  },
  { image: `https://oaidalleapiprodscus.blob.core.windows.net/private/org-IyCMwj0RWWvhDkV14UomDgos/user-9EsOmgI1HmI0SzBiND2o5SSU/img-W4W5XnG9V8MRpnukVD25F1LC.png?st=2023-02-17T23%3A02%3A43Z&se=2023-02-18T01%3A02%3A43Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-17T19%3A37%3A34Z&ske=2023-02-18T19%3A37%3A34Z&sks=b&skv=2021-08-06&sig=ddN1fjjcnW8VEq%2BXURzGa2iPkrepAE0CEpm1sS1K2EE%3D`,
    prompt: `a poker game of fish, Lyonel Feininger eqsue`,
    exhibitionId: 1,
    id: 2
  },
  { image: `https://oaidalleapiprodscus.blob.core.windows.net/private/org-IyCMwj0RWWvhDkV14UomDgos/user-9EsOmgI1HmI0SzBiND2o5SSU/img-bjB31IjEIVkEkNZHFIKGj0cw.png?st=2023-02-17T23%3A03%3A53Z&se=2023-02-18T01%3A03%3A53Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-17T19%3A34%3A20Z&ske=2023-02-18T19%3A34%3A20Z&sks=b&skv=2021-08-06&sig=J6LXoZ4gzQhc4V6h1Qd2GKCuFd5UCCh2j/gVMfpNZfI%3D`,
    prompt: `a poker game of fish, Kandinsky eqsue`,
    exhibitionId: 1,
    id: 3
  },
  { image: `https://oaidalleapiprodscus.blob.core.windows.net/private/org-IyCMwj0RWWvhDkV14UomDgos/user-9EsOmgI1HmI0SzBiND2o5SSU/img-H3DJXDk69gLcE4quxIgVRhkO.png?st=2023-02-17T23%3A10%3A28Z&se=2023-02-18T01%3A10%3A28Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-17T19%3A34%3A06Z&ske=2023-02-18T19%3A34%3A06Z&sks=b&skv=2021-08-06&sig=PD2IukriR%2BmlXMU7JYjAatfJaPxDZHCqlTKQuTVFUZE%3D`,
    prompt: `shelves, books & plants in expressionistic style`,
    exhibitionId: 2,
    id: 4
  },
  { image: `https://oaidalleapiprodscus.blob.core.windows.net/private/org-IyCMwj0RWWvhDkV14UomDgos/user-9EsOmgI1HmI0SzBiND2o5SSU/img-CDbvcJmUd8S7OqQ1d72a0sAa.png?st=2023-02-17T23%3A11%3A37Z&se=2023-02-18T01%3A11%3A37Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-17T19%3A35%3A42Z&ske=2023-02-18T19%3A35%3A42Z&sks=b&skv=2021-08-06&sig=aXr/dmhoNTTc74sBWwNLh5zAQ2TM0xFI5fcNhYuHFD4%3D`,
    prompt: `self portrait in expressionistic style`,
    exhibitionId: 2,
    id: 5
  },
  { image: `https://oaidalleapiprodscus.blob.core.windows.net/private/org-IyCMwj0RWWvhDkV14UomDgos/user-9EsOmgI1HmI0SzBiND2o5SSU/img-RR8eybiPFWzmtYtU0dcRKZUX.png?st=2023-02-17T23%3A12%3A40Z&se=2023-02-18T01%3A12%3A40Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-17T19%3A34%3A01Z&ske=2023-02-18T19%3A34%3A01Z&sks=b&skv=2021-08-06&sig=neY0kbSMVBE//AZ9lEAHHtKVD9l4ryoxdMk%2BZ5tAgX4%3D`,
    prompt: `portland landscape in expressionistic style`,
    exhibitionId: 2,
    id: 6
  },
]

const titles = [
  { ImageId: 1,
    Title: `Fake Title Submission`,
    Votes: 0,
  },
  { ImageId: 1,
    Title: `Better Fake Title Submission`,
    Votes: 2,
  },
  { ImageId: 1,
    Title: `Middleing Fake Title Submission`,
    Votes: 1,
  }
]
export { exhibitions, artworks, titles };