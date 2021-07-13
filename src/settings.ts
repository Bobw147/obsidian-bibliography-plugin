export interface BibliographySettings {
    mySetting: string;
    showRibbonIcon: boolean;
    schemaVersion: number;
}

export const DEFAULT_SETTINGS: BibliographySettings = {
    mySetting: '-',
    showRibbonIcon: true,
    schemaVersion: 1,
}

