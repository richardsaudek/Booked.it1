import 'dotenv/config'
import mongoose from '../api/connection.js'
import data from './audition-info.json' assert { type: 'json' }
import Audition from '../api/models/Audition_Info.js'

// await mongoose.connect(process.env.DATABASE_URL || '')

const insertData = async () => {
  await Audition.deleteMany({})
  await Audition.insertMany(data)
  let test = await Audition.find({})
  console.log(test)
}
await insertData()
await mongoose.disconnect()
