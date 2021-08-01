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

      ]
    }
  )
}
