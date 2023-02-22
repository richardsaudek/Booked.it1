import Audition_Info from '../api/models/Audition_Info.js'

export const getAuditions = async (req, res) => {
  console.log('hello')
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
    const auditionJSON = new Audition_Info(req.body)
    await auditionJSON.save()
    res.status(201).json(Audition_Info)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
export const updateAudition = async (req, res) => {
  try {
    const { id } = req.params
    const auditionJSON = await Audition_Info.findByIdAndUpdate(id, req.body)
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
      return res.status(200).send('Submission deleted!')
    }

    throw new Error('Submission not found')
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}