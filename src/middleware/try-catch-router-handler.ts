import {Response} from "express";
export const withTryCatchRouterHandler = async (operation: any, res: Response) => {
    try {
        return await operation()
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

