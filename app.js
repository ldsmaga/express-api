const express = require('express')
const app = express()
const port = 3000

const userRoute = require('./routes/User');

app.use('/user', userRoute)

app.listen(port, () => {
    console.log(`Application running on port http://localhost:${port}`)
})