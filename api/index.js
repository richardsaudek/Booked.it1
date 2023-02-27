import express from 'express'
import mongoose from 'mongoose'
import lifecycle from './middleware/lifecycle.js'
import router from './routes/audition_route.js'

const app = express()
app.use(express.json())

app.use(lifecycle({
  async setup() {
    console.log('Before handler')
    // @ts-ignore
    await mongoose.connect(process.env.DATABASE_URL)
  },
  async cleanup() {
    console.log('After handler')
    await mongoose.disconnect()
  }
}))

app.use(router)
export default app