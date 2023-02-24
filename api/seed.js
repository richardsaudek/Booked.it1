import 'dotenv/config'
import mongoose from 'mongoose'
import data from './audition-info.json' assert { type: 'json' }
import Audition from './models/Audition_Info.js'

mongoose.connect(process.env.DATABASE_URL || '')

async function insertData() {
  await Audition.deleteMany({})
  await Audition.insertMany(data)
  let test = await Audition.find({})
  console.log(test)
}
await insertData()
await mongoose.disconnect()