const request = require('request')
const url ='https://newsapi.org/v2/everything?q=apple&from=2021-10-10&to=2021-10-10&sortBy=popularity&apiKey=0c6dc0edc82549fb893cb78ee8ba4297'
const url1 ='https://newsapi.org/v2/everything?q=tesla&from=2021-09-11&sortBy=publishedAt&apiKey=0c6dc0edc82549fb893cb78ee8ba4297'


const express = require('express')
const app = express()
const port = 3000
const path = require('path')
// app.get('/', (req, res) => {
//   res.send('<h3>Hello Worrrrrrrrld!</h3>')
// })
// app.get('/help', (req, res) => {
//     res.send({
//         name:'Omar',
//         age:25
// })
//   })

const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))
//////////////////////////////////////////// اجباري
app.set('view engine', 'hbs');

//home page
////////////////////////////////// بحط السطر دا لما اجي اغير مكان الviews
const pathViews = path.join(__dirname, '../templates/views')
app.set('views', pathViews)


////////////////////////////////////////////////////// عشاان استخدم ال hbs لازم اعنل require
const hbs = require('hbs')


const partialPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialPath)

//////////////////////////////////////////////beggin new code t show cards 
app.get('/', (req, res) => {
    request({ url, json: true }, (error, response)=>{
        
        if (error) {
            console.log('Error has Occured Please check it and try again')
        }
        else if (response.body.message) {
            console.log('Unable to find location')
        }
        else {
            console.log('Here' +response.body.articles)
        }
        res.render('index',{
            data: response.body.articles
        })
    })
})
////////////////////////////////////////////////////////// end 
app.get('/help', (req, res) => {
    res.render('help')
})
app.get('/about', (req, res) => {
    res.render('about')

})
app.listen(port, () => {
    console.log(`Saved Successfully`)
})