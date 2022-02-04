const mongoose = require('mongoose')
const express = require('express')


const app = express()
const DATABASE = "mongodb://mymongo:27017/dummyTest"

mongoose
	.connect(DATABASE)
	.then(()=> {
		console.log("DB connected!")
	})
	.catch(()=> {
		console.log("Error in DB connection!")
	}
)

app.get("/", (req, res) => {
	res.json({
		message: "you are visiting ROOT route"
	})
})

app.listen(8000, ()=> {
	console.log("port running on 8000")
})