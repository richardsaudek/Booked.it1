export const updateAudition = async (req, res) => {
  try {
    const projectName = req.params.name_of_project;
    const updatedAuditionInfo = req.body; // assuming the updated audition info is being sent in the request body
    
    const auditionJSON = await Audition_Info.findOneAndUpdate(
      { name_of_project: projectName },
      updatedAuditionInfo, // the updated data
      { new: true } // to return the updated document instead of the old one
    );

    res.status(200).json(auditionJSON);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}