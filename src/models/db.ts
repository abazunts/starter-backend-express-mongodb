import {appSettings} from "../settings/app-settings";
import mongoose from "mongoose";
import {ExampleSchema} from "./models";
import {ExampleType} from "../types/types";


mongoose.connect(appSettings.api.MONGO_URL
    + appSettings.api.DB_NAME
    + '?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const db = mongoose.connection;

db.on("error", err => {
    console.error("error: ", err);
});

db.once("open", () => {
    console.log("we are connected!")
});


interface ExampleModel extends ExampleType, mongoose.Document {}
export const ExampleCollection = mongoose.model<ExampleModel>("Example", ExampleSchema);

