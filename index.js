const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 2000

app.use(cors())

app.get('/', (require, response) => {
    response.status(200).send("<h2>Trial Back End</h2>")
})

app.listen(PORT, () => console.log('Trial Backend Running', PORT))