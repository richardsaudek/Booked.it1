import mongoose from '../connection.js'

const auditionSchema = new mongoose.Schema(
  {
    _id: String,
    name_of_project: String,
    type_of_project: String,
    date: String,
    location: String,
    union_status: Boolean,
    casting_office: String,
    casting_dir: String,
    casting_associate: String,
    prep: String,
    post_aud_notes: String
  }
)

// const Audition = mongoose.model('Audition', auditionSchema)
export default mongoose.model('Audition', auditionSchema)