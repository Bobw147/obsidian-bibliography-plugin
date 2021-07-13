import { App, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { addIcons } from './icons';
import { BibliographySettings, DEFAULT_SETTINGS} from "./settings";


export default class BibliographyPlugin extends Plugin {
	settings: BibliographyPluginSettings;

	async onload() {
		// Load settings. Establish defaults on first access
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

		this.addCommand({
			id: 'bibliography-editor',
			name: 'View/Edit Bibliography',

			checkCallback: (checking: boolean) => {
				if (! checking) {
					new BibliographyModal(this.app).open();
				}
				return true;
			}
		});

		addIcons();

		if (this.settings.showRibbonIcon) {
			this.addRibbonIcon('bookmark', 'View Library',() => {
				this.showBibliographyModal();
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

	showBibliographyModal(){
		new BibliographyModal(this.app).open();
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
};

class BibliographyModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		let {contentEl} = this;
		console.log("Opening Bibliography modal")
		contentEl.setText('View/Edit Bibliography');
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


    	new Setting(containerEl)
      		.setName('Show icon in sidebar')
      		.setDesc(
        		'When on, a button which opens the Bibliography viewer/editor will be added to the ribbon bar. ' +
          		'The viewer/editor can also be opened with a Hotkey. Changes only take effect on reload.',
      		)
      		.addToggle((toggle) =>
        		toggle.setValue(this.plugin.settings.showRibbonIcon)
          	.onChange((value) => {
            	this.plugin.settings.showRibbonIcon = value;
            	this.plugin.saveData(this.plugin.settings);
            	this.display();
          }),
      );

	}
}
