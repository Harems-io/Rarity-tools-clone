# Next.js site

Live example on: https://harems-io-rarity-tools.vercel.app/

## Pages

Currently only the home page that can be modified thru `/pages/index.js`

## Data

Currently there is dummy data located in `/pages/api`.  In the next iteration, the data will be pulled from OpenSea

## Styles

Most of styling achieved thru TailwindCSS, which is configurable thru `tailwind.config.js`.  Importantly, through setting the `purge: ` attribute in the `tailwind.config.js`, unused css classes are not included in the built site.

However, there is also some global scss classes in the `/styles` directory.

The global styles are added by importing in `/pages/_app.js`
