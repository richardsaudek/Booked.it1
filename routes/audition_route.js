import { Router } from 'express'
import * as controller from '../controller/audition_info'

const router = Router()

router.get('/api', controller.getAuditions)
router.get('/api/_:id', controller.getAudition)
router.post('/api', controller.createAudition)
router.put('/api/_:id', controller.updateAudition)
router.delete('/api/_:id', controller.deleteAudition)

export default router
