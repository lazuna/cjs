/*
 Helmet helps you secure your Express apps by setting various HTTP headers. It’s not a silver bullet, but it can help!
*/

// Quick example:

const express = require('express')
const helmet = require('helmet')

const app = express()

app.use(helmet())
