// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

module.exports = async (req, res) => {
  const url = "https://api.opensea.io/api/v1/collections?offset=0&limit=10";
  const options = { method: "GET" };

  const data = await fetch(url, options)
    .then(res2 => res2.json())
    .catch(err => console.error("error:" + err))

  res.status(200).json({allCollections: data["collections"]})
}
