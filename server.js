const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const day = {
    'day1':{
        'quote': 'There is no traffic on that extra mile!',
        'target': 'Legs & Abs',
        'exercise': 'squats',
        'duration': '45 minutes' 
},

    'day2':{
        'quote': 'Overnight Success does not come overnight!',
        'target': 'Upper Body',
        'exercise': 'bench',
        'duration': '45 minutes' 
},
    'day3':{
        'quote': 'Overnight Success does not come overnight!',
        'target': 'Cardio',
        'exercise': 'treadmill',
        'duration': '45 minutes' 
},

}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:dayTarget', (request, response)=>{
    const dayTarget = request.params.dayTarget.toLowerCase()
    if(day[dayTarget]){
        response.json(day[dayTarget])
    }else{
        response.json(day['legs & abs'])
    }
    //response.json(day)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! go catch it!`)
})