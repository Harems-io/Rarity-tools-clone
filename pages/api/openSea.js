// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function openSeaAPI(req, res) {
  res.status(200).json(
    {
      collections: [
        {
          featured: "true",
          imgHeadSrc: "https://projects.rarity.tools/static/images/headers/svinsfarm/header.jpg",
          name: "SVINS",
          addedDate: "13 Jul 2021",
          ownersAmount: "213",
          volume: "74.23",
          curency: "ETH",
          imgIconSrc: "https://lh3.googleusercontent.com/BEsmio4587tvd8RE12v6HDUy9jSSGMPoKRx_PO3tdK-7sigUg-86OcQxfJEWZyJVV2sfWN2rhgDVPQ-T6Vs-GfpHh0V0ulvun1Yb=s120",
          descRawHtml: "<p> <strong>SVINS</strong> – is the Largest <strong>NON-PROCEDURAL</strong> 😮 3D Diverse Collection of 1000 unique Limited Edition NFTs collectibles living on the Ethereum blockchain ever created, minted and attributed one by one by a single person without the help of Ai. </p><p>Each SVIN i...</p>"
        },
        {
          featured: "false",
          imgHeadSrc: "https://lh3.googleusercontent.com/QLSVo3VbidUSWlWmBw9uByy7mlJfptj07LcE9VBeE9ITnuyvV4l_4Pai0BFuhHwmNF-GuPHQddvRPGpmUBFipkNmTFZoq9IJirG82S0=s2500",
          name: "Long Neckie Ladies",
          addedDate: "30 Jul 2021",
          ownersAmount: "908",
          volume: "36.07",
          curency: "ETH",
          imgIconSrc: "https://lh3.googleusercontent.com/eV3XbDmvPumzQMiWECbJK8P0LY3YlRYM6k4Xn5QmYMRy0yRxi5hsLJcFNxAp4JxpjpzRIwxpDdi83CdUa0nWl4BdtZTarelmG5Vu=s120",
          descRawHtml: "<p>Long Neckie Ladies are a fine art, hand drawn, computer generated collectible of 3333 diverse females created by 12-year-old digital artist Nyla Hayes. Each Long Neckie features an elongated neck that is inspired by Nyla’s favorite dinosaur, the bron...</p>"
        },
        {
          featured: "false",
          imgHeadSrc: "https://lh3.googleusercontent.com/cpmhZkIc9dpFXCeOxaOpXBJ7YaMIDVjUPm48LAs1Lz57DzapGVzYUIm35aTTdFCk2LpB2uYk62WlimAIX_WE3IY1LHnczB66JTLLPQ=s2500",
          name: "Crazy Lizard Army",
          addedDate: "30 Jul 2021",
          ownersAmount: "1395",
          volume: "109.9",
          curency: "ETH",
          imgIconSrc: "https://lh3.googleusercontent.com/Qg1YzUN_XOtHrX_MnilRbm29CTA-oNscS9dkVbSGKrzoxHImq5lOrON7H-COBqekKo7ZDENj-8y2Gp7bXxJkhEwid_XiI-9LgTDBzg=s120",
          descRawHtml: "<p>The Crazy Lizard Army is made up of 10000 unique lizards. Become soldier in our army when you hold a lizard. In our army, there are all sorts of Lizards, some are good, some are evil, and some are CRAZY! Who knows which you will meet?<br /> Did you know yo...</p>"
        },
        {
          featured: "false",
          imgHeadSrc: "https://lh3.googleusercontent.com/y2HMjE2tc2dNZVP1EuDOE3IReS2plYMUm3yq2-jVp9_9L9D3H1IVHFbmalmXCoG2KYfy_R7LYK8c4Q8QPuzv41FmppRWLpyW02ii=s2500",
          name: "Pudgy Penguins",
          addedDate: "29 Jul 2021",
          ownersAmount: "1824",
          volume: "177.83",
          curency: "ETH",
          imgIconSrc: "https://lh3.googleusercontent.com/bcCd1TfusKK6wWjmshwmizmY9j7An3pp9kxopMxfIt-_I8WFnSIK-5gevOduoYK4Qpq2e3DyXgROKNfkP396W5ViEYXhxoyAZG3s_vY=s120",
          descRawHtml: "<p>Located in the freezing cold, arctic region of the metaverse you can find 8,888 cute chubby Pudgy Penguins sliding around on the ETH blockchain.</p><p>Come join the huddle today at <a href='https://pudgypenguins.io'>pudgypenguins.io</a></p>"
        },
        {
          featured: "true",
          imgHeadSrc: "https://projects.rarity.tools/static/images/headers/svinsfarm/header.jpg",
          name: "SVINS",
          addedDate: "13 Jul 2021",
          ownersAmount: "213",
          volume: "74.23",
          curency: "ETH",
          imgIconSrc: "https://lh3.googleusercontent.com/BEsmio4587tvd8RE12v6HDUy9jSSGMPoKRx_PO3tdK-7sigUg-86OcQxfJEWZyJVV2sfWN2rhgDVPQ-T6Vs-GfpHh0V0ulvun1Yb=s120",
          descRawHtml: "<p> <strong>SVINS</strong> – is the Largest <strong>NON-PROCEDURAL</strong> 😮 3D Diverse Collection of 1000 unique Limited Edition NFTs collectibles living on the Ethereum blockchain ever created, minted and attributed one by one by a single person without the help of Ai. </p><p>Each SVIN i...</p>"
        },
        {
          featured: "false",
          imgHeadSrc: "https://lh3.googleusercontent.com/QLSVo3VbidUSWlWmBw9uByy7mlJfptj07LcE9VBeE9ITnuyvV4l_4Pai0BFuhHwmNF-GuPHQddvRPGpmUBFipkNmTFZoq9IJirG82S0=s2500",
          name: "Long Neckie Ladies",
          addedDate: "30 Jul 2021",
          ownersAmount: "908",
          volume: "36.07",
          curency: "ETH",
          imgIconSrc: "https://lh3.googleusercontent.com/eV3XbDmvPumzQMiWECbJK8P0LY3YlRYM6k4Xn5QmYMRy0yRxi5hsLJcFNxAp4JxpjpzRIwxpDdi83CdUa0nWl4BdtZTarelmG5Vu=s120",
          descRawHtml: "<p>Long Neckie Ladies are a fine art, hand drawn, computer generated collectible of 3333 diverse females created by 12-year-old digital artist Nyla Hayes. Each Long Neckie features an elongated neck that is inspired by Nyla’s favorite dinosaur, the bron...</p>"
        },
        {
          featured: "false",
          imgHeadSrc: "https://lh3.googleusercontent.com/cpmhZkIc9dpFXCeOxaOpXBJ7YaMIDVjUPm48LAs1Lz57DzapGVzYUIm35aTTdFCk2LpB2uYk62WlimAIX_WE3IY1LHnczB66JTLLPQ=s2500",
          name: "Crazy Lizard Army",
          addedDate: "30 Jul 2021",
          ownersAmount: "1395",
          volume: "109.9",
          curency: "ETH",
          imgIconSrc: "https://lh3.googleusercontent.com/Qg1YzUN_XOtHrX_MnilRbm29CTA-oNscS9dkVbSGKrzoxHImq5lOrON7H-COBqekKo7ZDENj-8y2Gp7bXxJkhEwid_XiI-9LgTDBzg=s120",
          descRawHtml: "<p>The Crazy Lizard Army is made up of 10000 unique lizards. Become soldier in our army when you hold a lizard. In our army, there are all sorts of Lizards, some are good, some are evil, and some are CRAZY! Who knows which you will meet?<br /> Did you know yo...</p>"
        },
        {
          featured: "false",
          imgHeadSrc: "https://lh3.googleusercontent.com/y2HMjE2tc2dNZVP1EuDOE3IReS2plYMUm3yq2-jVp9_9L9D3H1IVHFbmalmXCoG2KYfy_R7LYK8c4Q8QPuzv41FmppRWLpyW02ii=s2500",
          name: "Pudgy Penguins",
          addedDate: "29 Jul 2021",
          ownersAmount: "1824",
          volume: "177.83",
          curency: "ETH",
          imgIconSrc: "https://lh3.googleusercontent.com/bcCd1TfusKK6wWjmshwmizmY9j7An3pp9kxopMxfIt-_I8WFnSIK-5gevOduoYK4Qpq2e3DyXgROKNfkP396W5ViEYXhxoyAZG3s_vY=s120",
          descRawHtml: "<p>Located in the freezing cold, arctic region of the metaverse you can find 8,888 cute chubby Pudgy Penguins sliding around on the ETH blockchain.</p><p>Come join the huddle today at <a href='https://pudgypenguins.io'>pudgypenguins.io</a></p>"
        },
      ],
      top10by7DayVol: [
        {
          href: "/cryptopunks",
          imgSrc: "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120",
          name: "CryptoPunks",
          amount: "25,443.71"
        },
        {
          href: "/vogu",
          imgSrc: "https://lh3.googleusercontent.com/4kPtQ8iep2Sw8MEV8TLfGuDsX0ql5pfniHZZGpwx3jp9D2ZRCE0coFxagGrhFH0sfVUezN1O-aRy9SZDong-N0RNsHgCg2rvX7LSJw=s120",
          name: "The Vogu Collective",
          amount: "3,232.51"
        },
        {
          href: "/stoner-cats-official",
          imgSrc: "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120",
          name: "Stoner Cats",
          amount: "2,920.05"
        },
        {
          href: "/boredapeyachtclub",
          imgSrc: "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120",
          name: "Bored Ape Yacht Club",
          amount: "2,551.6"
        },
        {
          href: "/veefriends",
          imgSrc: "https://lh3.googleusercontent.com/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg=s120",
          name: "VeeFriends",
          amount: "958.28"
        },
        {
          href: "/royalsocietyofplayers",
          imgSrc: "https://lh3.googleusercontent.com/pD7CaZQGBaVf-IwBi4KQdkFDlM_2bXyTgDXJCHp0Y98Ca1fNgm266WzrOCNZFT_DMs4zat7Zu8tDolatTuINQOb1jMjfhEYiXSnaoQ=s120",
          name: "Royal Society of Players",
          amount: "895.56"
        },
        {
          href: "/bored-ape-kennel-club",
          imgSrc: "https://lh3.googleusercontent.com/l1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1=s120",
          name: "Bored Ape Kennel Club",
          amount: "613.74"
        },
        {
          href: "/world-of-women-nft",
          imgSrc: "https://lh3.googleusercontent.com/a2j9kuLkcnP7SWCSLNSLxQ4LcnRACTr_fs2I38zRUlB9qLq9bweMNJnbrKVZxZRitCQd5WMRMGCqUdPQwhConm1kGrIvMuZRgNJX=s120",
          name: "World of Women",
          amount: "567.1"
        },
        {
          href: "/axie",
          imgSrc: "https://lh3.googleusercontent.com/_BYA3bhx1ebgDr3QsuQuh2OMSznmS_TkwJhikCtCVMh4RUcpn2gnJmmOHHA28gy0mKP50flV31iXsDBUr_zjBaXNJA=s120",
          name: "Axie Origins",
          amount: "542.34"
        },
        {
          href: "/thewickedcraniums",
          imgSrc: "https://lh3.googleusercontent.com/e5s2WcnoPKpVZ4MxRA6v1IYPcCmC_3LSDCTI-Cp_pAxu_J81v0iQUiOByr5gLdQjM083RHQZd_izPmTeB1w2P9r8YmjxHNJNRi4RRw=s120",
          name: "The Wicked Craniums",
          amount: "529.44"
        },
      ],
      allCollections: [
        {
          href: "/cryptopunks",
          imgSrc: "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120",
          name: "CryptoPunks",
          vol7day: "25,443.71",
          sales7day: "653",
          avgPrice7day: "38.96",
          totalSupply: "9,999",
          owners: "2,644",
          ownersPct: "26.44%",
          estMarketCap: "389,604.33",
          volAllTime: "228,876.90",
          salesAllTime: "13,818",
          addedDate: "2021/04/30"
        },
        {
          href: "/vogu",
          imgSrc: "https://lh3.googleusercontent.com/4kPtQ8iep2Sw8MEV8TLfGuDsX0ql5pfniHZZGpwx3jp9D2ZRCE0coFxagGrhFH0sfVUezN1O-aRy9SZDong-N0RNsHgCg2rvX7LSJw=s120",
          name: "The Vogu Collective",
          vol7day: "3,232.51",
          sales7day: "5,641",
          avgPrice7day: "0.57",
          totalSupply: "7,777",
          owners: "2,116",
          ownersPct: "27.21%",
          estMarketCap: "4,456.53",
          volAllTime: "3,232.51",
          salesAllTime: "5,641",
          addedDate: "2021/07/28"
        },
        {
          href: "/stoner-cats-official",
          imgSrc: "https://lh3.googleusercontent.com/7KkOAh6-6ORJVtcprl2iyvyJBuvk2UWuXdimcH7w82wRUPW4DsOtHmuptg7S9BsOlRQhhU2m6z1ec5ZnWhvFY05L1tpSUUIh35Q9=s120",
          name: "Stoner Cats",
          vol7day: "3,025.70",
          sales7day: "3,138",
          avgPrice7day: "0.96",
          totalSupply: "10,419",
          owners: "3,103",
          ownersPct: "29.78%",
          estMarketCap: "10,046.13",
          volAllTime: "3,025.70",
          salesAllTime: "3,138",
          addedDate: "2021/07/27"
        },
        {
          href: "/boredapeyachtclub",
          imgSrc: "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120",
          name: "Bored Ape YC",
          vol7day: "2,992.79",
          sales7day: "367",
          avgPrice7day: "8.15",
          totalSupply: "10,000",
          owners: "4,962",
          ownersPct: "49.62%",
          estMarketCap: "81,547.54",
          volAllTime: "42,994.20",
          salesAllTime: "17,229",
          addedDate: "2021/05/02"
        }
      ],
      newCollections: [
        {
          href: "/ruumz",
          imgSrc: "https://lh3.googleusercontent.com/CUQJJatR5l3WEhqDwd88-tfi-tlzgMyMYbXdAtt5YLaq808VG5mwI5Fli5-bZ3U7KZgiTqVGOhwFhybPe5nHa1JS2hW3qhI8736s=s120",
          name: "RUUMZ"
        },
        {
          href: "/spookies-nft",
          imgSrc: "https://lh3.googleusercontent.com/AZPmZ_3B4vjbbdSx2K2P4eQBCfj60ApxDjM97otHdgLeNZTPvdGvpSfOa8oKD9E_eRlz-RSiJ-83Lj9sIIKKNaTuArPq_ITFBqJ0hw=s120",
          name: "Spookies NFT"
        },
        {
          href: "/long-neckie-ladies",
          imgSrc: "https://lh3.googleusercontent.com/eV3XbDmvPumzQMiWECbJK8P0LY3YlRYM6k4Xn5QmYMRy0yRxi5hsLJcFNxAp4JxpjpzRIwxpDdi83CdUa0nWl4BdtZTarelmG5Vu=s120",
          name: "Long Neckie Ladies"
        },
        {
          href: "/crazy-lizard-army",
          imgSrc: "https://lh3.googleusercontent.com/Qg1YzUN_XOtHrX_MnilRbm29CTA-oNscS9dkVbSGKrzoxHImq5lOrON7H-COBqekKo7ZDENj-8y2Gp7bXxJkhEwid_XiI-9LgTDBzg=s120",
          name: "Crazy Lizard Army"
        },
        {
          href: "/pudgypenguins",
          imgSrc: "https://lh3.googleusercontent.com/bcCd1TfusKK6wWjmshwmizmY9j7An3pp9kxopMxfIt-_I8WFnSIK-5gevOduoYK4Qpq2e3DyXgROKNfkP396W5ViEYXhxoyAZG3s_vY=s120",
          name: "Pudgy Penguins"
        },
      ]
    }
  )
}
