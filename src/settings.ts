export interface BibliographySettings {
    mySetting: string;
    showRibbonIcon: boolean;
    schemaVersion: number;
}

export interface ISettings {
    mySetting: string;
    showRibbonIcon: boolean;
    schemaVersion: number;
}

export const DEFAULT_SETTINGS: BibliographySettings =
{
    mySetting: "",
    showRibbonIcon: false,
    schemaVersion: 1
}

export class BibliographyPluginSettings implements ISettings {
	public mySetting: string;
	public showRibbonIcon: boolean;
    public schemaVersion: number;

	constructor(){
		this.mySetting = ""
		this.showRibbonIcon = false;
        this.schemaVersion = 1;
	}
}


