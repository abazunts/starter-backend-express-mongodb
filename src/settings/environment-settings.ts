export type EnvironmentsTypes = "DEVELOPMENT" | "STAGING" | "PRODUCTION"

export class EnvironmentSettings {
    constructor(private env: EnvironmentsTypes) {
    }

    isProduction() {
        return this.env === 'PRODUCTION'
    }

    isStaging() {
        return this.env === 'STAGING'
    }

    isDevelopment() {
        return this.env === 'DEVELOPMENT'
    }
}
