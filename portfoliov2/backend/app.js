 /* eslint-disable */ 
const express = require('express')
const app = express()
const port = 3000

app.get('/resume', (req, res) => {
  res.redirect("https://github.com/EmmanuelJYokoyama/Curriculo/blob/main/Currículo%20EmmanuelYokoyama.pdf")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
