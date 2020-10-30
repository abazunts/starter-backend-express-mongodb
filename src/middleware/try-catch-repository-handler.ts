import {Result, ResultCode} from "../settings/settings-types";

export const withTryCatchRepoHandler = async (operation: any) => {
    try {
        return await operation()
    } catch (err) {
        console.log(err)
        return new Result<null>(ResultCode.Error, [], null)
    }
}

