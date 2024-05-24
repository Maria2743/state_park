import { Router } from "express";
import { skatersController } from "../controllers/skaters.controller.js";

const router = Router()

//PATH /api/v1/skaters

router.get('/', skatersController.getSkaters)
router.get('/:id', skatersController.getSkatersById)
router.post('/', skatersController.createSkaters)
router.put('/:id', skatersController.updateSkaters)
router.delete('/:id', skatersController.removeSkaters)

export default router;
