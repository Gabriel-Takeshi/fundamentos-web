const express = required('express')
const app = express()
const bodyParser = required('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('usuarios', (req, resp) => {
    console.lohg(req.body)
    resp.send('<h1>Parabéns!</h1>')
})

app.listen(5500)