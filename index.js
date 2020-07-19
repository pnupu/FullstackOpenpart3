require('dotenv').config()
const express = require('express')
const { response, request } = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Contact = require('./models/contact')
const contact = require('./models/contact')


app.use(cors())
app.use(express.static('build'))
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


app.get('/api/persons', (request, response) => {
    Contact
        .find({})
        .then(contact => {
            response.json(contact)
            
        })
    
})

app.get('/info', (request, response, pituus) => {
    
    Contact
        .find({})
        .then(contact => {
            let pituus = contact.length
            let date = Date()
             response.send(`Phonebook has info for ${pituus} people <br></br>${date}`)
        })
    
})

app.get('/api/persons/:id', (request, response) => {
    Contact.findById(request.params.id)
        .then(contact => {
            if(contact){
                response.json(contact)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))      
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
    
    const contact = {
        name: body.name,
        number: body.number
    }

    Contact.findByIdAndUpdate(request.params.id, contact, { new: true })
        .then(updatedContact => {
            response.json(updatedContact)
        })
        .catch(error => next(error))
})


app.delete('/api/persons/:id', (request, response, next) => {
    Contact.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))   
})



app.post('/api/persons/', (request, response, next) => {
    
    const body = request.body
    

    if(body.name === undefined) {
        return response.status(400).send({ error: 'name missing'})
    }

    if(body.number === undefined ){
        return response.status(400).send({ error: 'number missing'})
    }

   
    

    const contact = new Contact({
        name: body.name,
        number: body.number
    })

    contact.save()
        .then(savedContact => {
            response.json(savedContact)
        })
        .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
  
app.use(unknownEndpoint)


const errorHandler = (error, request, response, next) => {
    console.log(error.message)
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError'){
        return response.status(400).json({ error: error.message})
    }

    next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

