import {SettingsType} from "./settings";
import {EnvironmentVariable} from "./settings-types";
import {EnvironmentSettings, EnvironmentsTypes} from "./environment-settings";
import _ from "lodash";

class APISettings {

    public readonly FRIEND_TOKEN: string;
    public readonly MONGO_URL: string;
    public readonly DB_NAME: string;

    constructor(private envVariables: EnvironmentVariable) {
        this.FRIEND_TOKEN = envVariables.FRIEND_TOKEN || '123'
        this.MONGO_URL = envVariables.MONGO_URI || "mongodb://localhost:27017/"
        this.DB_NAME = envVariables.DB_NAME || "Test"
    }
}

class AppSettings {
    constructor(public env: EnvironmentSettings, public api: APISettings, public readonly settings: SettingsType) {
    }
}

const env = new EnvironmentSettings((process.env.ENV || "DEVELOPMENT") as EnvironmentsTypes);
const api = new APISettings(process.env);

const settingsEnv: {settings: SettingsType} =
    env.isDevelopment() ? require("../settings.development")
        : env.isStaging() ? require("../settings.staging")
        : require("../settings")

const settingsDefault: {settings: SettingsType} = require("./../settings");

const resultSettings = _.merge(settingsDefault.settings, settingsEnv.settings);

export const appSettings = new AppSettings(env, api, resultSettings);