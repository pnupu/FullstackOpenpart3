const express = require('express')
const { response, request } = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())


app.use(express.json())
morgan.token('person', (req, res) => {
    return JSON.stringify(req.body)
})



app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person', {
    skip: (req, res) => {
        return req.method !== "POST"
    }
}))
app.use(morgan('tiny', {
    skip: (req, res) => {
        return req.method === "POST"
    }
}))
let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5223523",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "1243-234345",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
    },
    {
        name: "Mylsse",
        number: "123456789",
        id: 5
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    let pituus = persons.length
    let date = Date()
    response.send(`Phonebook has info for ${pituus} people <br></br>${date}`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if(person){
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    console.log(persons)
    response.status(204).end
})

const generateId = () => {
    return Math.floor(Math.random() * 999)
}

app.post('/api/persons/', (request, response) => {
    
    const body = request.body
    

    if(!body.name){
        return response.status(400).json({
            error: 'name missing'
        })
    }
    if(!body.number){
        return response.status(400).json({
            error: 'number missing'
        })
    }

    persons.forEach((person) => {
        if(person.name === body.name){
            return response.status(400).json({
                error: 'name is already in database'
            })
        }
      })

    const person = {
        name: body.name,
        number: body.number,
        id: generateId
    }
    persons = persons.concat(person)
    response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})