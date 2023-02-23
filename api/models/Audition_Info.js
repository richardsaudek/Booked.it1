import mongoose from '../connection.js'
//set defaults 
const auditionSchema = new mongoose.Schema(
  {
    name_of_project: {
      type: String, default: 'Project'
    },
    type_of_project: {
      type: String, default: 'Type of Project'
    },
    date: {
      type: String, default: 'Date'
    },
    location: {
      type: String, default: 'Address'
    },
    union_status: Boolean,
    casting_office: {
      type: String, default: 'Enter the Casting Office'
    },
    casting_dir: {
      type: String, default: 'Who is the CD?'
    },
    casting_associate: {
      type: String, default: 'Who is the Casting Associate?'
    },
    prep: {
      type: String, default: 'What do you need to prepare?'
    },
    post_aud_notes: {
      type: String, default: 'How did it go?'
    }
  }
)

// const Audition = mongoose.model('Audition', auditionSchema)
export default mongoose.model('Audition', auditionSchema)