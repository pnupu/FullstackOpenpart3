const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}





const password = process.argv[2]

const url =
  `mongodb+srv://ilkka:${password}@cluster0.amhoa.mongodb.net/cluster0?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const contactSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Contact = mongoose.model('Contact', contactSchema)

const contact = new Contact({
  name: process.argv[3],
  number: process.argv[4]

})
if (process.argv.length === 3) {
    console.log('phonebook:')
    Contact
        .find({})
        .then(result => {
        mongoose.connection.close()
        result.forEach(contact => {
            
            console.log(`${contact.name} ${contact.number}`)
            
        })
        
    })
    
}

if (process.argv.length === 5) {
    
    contact.save().then(result => {
        console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`)
        mongoose.connection.close()
    })
}
