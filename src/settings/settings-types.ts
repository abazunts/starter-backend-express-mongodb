export type EnvironmentVariable = { [key: string]: string | undefined }

export enum ResultCode {
    Success = 0,
    Error = 1
}

export class Result<T> {
    constructor(private resultCode: ResultCode, private messages: string[], private data: T) {
    }
}

