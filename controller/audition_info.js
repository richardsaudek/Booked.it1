import mongoose from 'mongoose'
import Audition_Info from '../api/models/Audition_Info.js'

export const getAuditions = async (req, res) => {
  try {
    const auditionJSON = await Audition_Info.find()
    res.json(auditionJSON)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
export const getAudition = async (req, res) => {
  try {
    const { id } = req.params
    const auditionJSON = await Audition_Info.findById(id)

    if (auditionJSON) {
      return res.json(auditionJSON)
    }

    res.status(404).json({ message: 'Submission not found!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
export const createAudition = async (req, res) => {
  try {
    const auditionJSON = await Audition_Info.create(req.body)
    console.log(auditionJSON)
    res.status(201).json(auditionJSON)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
/** Makes mongoose happy */
export function parseObjectId(id) {
  try {
    return new mongoose.Types.ObjectId(id)
  } catch (error) {
    return null
  }
}

export const updateAudition = async (req, res) => {
  try {
    const id = req.params.id   
    const auditionJSON = await Audition_Info.findByIdAndUpdate({ _id: id }, req.body, { new: true })

    res.status(201).json(auditionJSON)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const deleteAudition = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Audition_Info.findByIdAndDelete(id)

    if (deleted) {
      return res.status(200).send('Submission deleted. Screw work. Go get lunch instead!')
    }

    throw new Error('Yikes! An error has occured!')
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}