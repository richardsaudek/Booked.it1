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
    console.log('I was called')
    const auditionJSON = await Audition_Info.create(req.params)
    console.log(auditionJSON)
    res.status(201).json(auditionJSON)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
export const updateAudition = async (req, res) => {
  
  const oldTitle = req.body.old_title
  const newTitle = req.body.new_title

  try {

    const auditionJSON = await Audition_Info.findOneAndUpdate({ name_of_project: oldTitle }, { $set: { name_of_project: newTitle } },
      { new: true })

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
      return res.status(200).send('Submission deleted. Go get lunch instead!')
    }

    throw new Error('Yikes! An error has occured!')
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}