import {Router} from "express";
import {exampleRepository} from "../repository/example-repository";
import {withTryCatchRouterHandler} from "../middleware/try-catch-router-handler";

const exampleRouter = Router();

exampleRouter.use(() => {
    //you middleware
})

exampleRouter.get('/:id', async (req, res) => {
    return withTryCatchRouterHandler(async () => {
        const id = req.params.id
        return await exampleRepository.getById(id)
    }, res)
});

exampleRouter.post('/', async (req, res) => {
    return withTryCatchRouterHandler(async () => {
        return await exampleRepository.post({param: ''})
    }, res)
});

exampleRouter.put('/:id', async (req, res) => {
    return withTryCatchRouterHandler(async () => {
        const id = req.params.id
        return await exampleRepository.putById(id, {param: ''})
    }, res)
});

exampleRouter.delete('/', async (req, res) => {
    return withTryCatchRouterHandler(async () => {
        const id = req.params.id
        return await exampleRepository.deleteById(id)
    }, res)
});


export default exampleRouter