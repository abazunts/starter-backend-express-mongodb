import {ExampleCollection} from "../models/db";
import {Result, ResultCode} from "../settings/settings-types";
import {ExampleType} from "../types/types";
import {withTryCatchRepoHandler} from "../middleware/try-catch-repository-handler";

export const exampleRepository = {

    async getById(id: string) {
        return withTryCatchRepoHandler(async () => {
            return  await ExampleCollection.findById(id) as ExampleType
        })
    },

    async putById(id: string, {...restParams}) {
        return withTryCatchRepoHandler(async () => {
            const example = await ExampleCollection.findByIdAndUpdate(id, {}, {new: true}) as ExampleType
            return new Result<ExampleType>(ResultCode.Success, [], example)
        })
    },

    async deleteById(id: string) {
        return withTryCatchRepoHandler(async () => {
            await ExampleCollection.findByIdAndDelete(id)
            return new Result<null>(ResultCode.Success, [], null)
        })
    },

    async post({...restParams}) {
        return withTryCatchRepoHandler(async () => {
            const example = await new ExampleCollection({}).save()
            return new Result<ExampleType>(ResultCode.Success, [], example)
        })
    },

}
