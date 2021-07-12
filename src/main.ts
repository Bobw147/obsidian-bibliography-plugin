import { App, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { addIcons } from './icons';
import { BibliographySettings, DEFAULT_SETTINGS} from "./settings";


export default class BibliographyPlugin extends Plugin {
	settings: BibliographyPluginSettings;

	async onload() {
		console.log('loading plugin');

		this.settings = Object.assign(DEFAULT_SETTINGS, await this.loadData() ?? {});

		this.addSettingTab(new BibliographyPluginSettingsTab(this.app, this));

		// this.addStatusBarItem().setText('Status Bar Text');

		this.addCommand({
			id: 'create-citation',
			name: 'Create Citation',
			// callback: () => {
			// 	console.log('Simple Callback');
			// },
			checkCallback: (checking: boolean) => {
				let leaf = this.app.workspace.activeLeaf;
				if (leaf) {
					if (!checking) {
						new CitationModal(this.app).open();
					}
					return true;
				}
				return false;
			}
		});

		addIcons();

		if (this.settings.showRibbonIcon) {
			this.addRibbonIcon('bookmark', 'View Library',() => {
				this.toggleBibliographyView();
			});
		}
	
		this.registerCodeMirror((cm: CodeMirror.Editor) => {
			console.log('codemirror', cm);
		});

		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {
		console.log('unloading plugin');
	}

	/** Update plugin settings. */
	async updateSettings(settings: Partial<BibliographySettings>) {
		Object.assign(this.settings, settings);
		await this.saveData(this.settings);
	}

	toggleBibliographyView = async (): Promise<void> => {
		checkCallback: (checking: boolean) => {
			let leaf = this.app.workspace.activeLeaf;
			
			if (!checking) {
				new CitationModal(this.app).open();
			}
			return true;

		}
	}
}


class CitationModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		let {contentEl} = this;
		console.log("Opening modal")
		contentEl.setText('Insert Citation');
	}

	onClose() {
		let {contentEl} = this;
		contentEl.empty();
	}
}

class BibliographyPluginSettings {
	mySetting: string;
	public showRibbonIcon: boolean;

	constructor(){
		this.showRibbonIcon = true;
	}
}

class BibliographyPluginSettingsTab extends PluginSettingTab {
	plugin: BibliographyPlugin;

	constructor(app: App, plugin: BibliographyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		let {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'Bibliography Settings.'});

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					await this.plugin.updateSettings({ mySetting: value });
				}));
	}
}
