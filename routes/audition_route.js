import { Router } from 'express'
import * as controller from '../controller/audition_info.js'

const router = Router()

router.get('/api', controller.getAuditions)
router.get('/api/:id', controller.getAudition)
router.post('/api', controller.createAudition)
router.put('/api', controller.updateAudition)
router.delete('/api/:id', controller.deleteAudition)

export default router
