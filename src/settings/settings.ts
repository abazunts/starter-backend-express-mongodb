export type SettingsType = typeof settings
export type SettingsPartial = {
    [P in keyof SettingsType]?: Partial<SettingsType[P]>;
};


export const settings = {
    common: {},
}

