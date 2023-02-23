import express from 'express'
import mongoose from 'mongoose'
import lifecycle from '/Users/richardsaudek/dev work/Booked.it1/api/middleware/lifecycle.js'
import router from '../routes/audition_route.js'

const app = express()
app.use(express.json())

app.use(lifecycle({
  async setup() {
    console.log('Before handler')
    // Put your database connection here. e.g.
    // @ts-ignore
    await mongoose.connect(process.env.DATABASE_URL)
  },
  async cleanup() {
    console.log('After handler')
    // Put your database disconnection here. e.g.
    await mongoose.disconnect()
  }
}))

app.use(router)
export default app