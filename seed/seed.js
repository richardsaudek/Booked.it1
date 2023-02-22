import 'dotenv/config'
import mongoose from 'mongoose'
import data from './audition-info.json' assert { type: 'json' }
import Audition from '../api/models/Audition_Info.js'

mongoose.set('strictQuery', false)

await mongoose.connect(process.env.DATABASE_URL || '')

await Audition.deleteMany()
await Audition.insertMany(data)
await mongoose.disconnect()
