    const express = require('express')
    const app = express()
    const port = process.env.PORT || 3000

    
    const path = require ("path")
    const publicDirectory =  path.join(__dirname , '../public')
    app.use (express.static (publicDirectory))


    app.set('view engine', 'hbs');
    const viewsDirectory = path.join (__dirname , "../temp1/views" )
    app.set( "views" , viewsDirectory)

    var hbs = require ('hbs')
    const partialsPath = path.join (__dirname , "../temp1/partials")
    hbs.registerPartials(partialsPath)


    app.get('/' , (req , res) => {
        res.render('index' , {
            title: "HOME",
            desc : "Welcome to our website to check the weather"
        })
    })

    app.get('/weather' , (req , res) => {
        res.render('weather' , {
            title : "Weather",
            country : "Egypt",
            latitude: 26.4941838299718,
            longitude: 29.871903452398,
            weather: "Clear",
            temperature: 28
        })
    })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
    
