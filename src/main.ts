import { App, ButtonComponent, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { addIcons } from './icons';
import { BibliographyPluginSettings, BibliographySettings, DEFAULT_SETTINGS} from "./settings";
import { CitationPart, IReference, SourceType, buildReference, getInlineCitationTemplate} from './templates'

export default class BibliographyPlugin extends Plugin {
	// Make settings publicly available
	public settings: BibliographyPluginSettings = DEFAULT_SETTINGS;

//	constructor(app: App, plugin: Plugin){
//		super(app, plugin.manifest);
//		this.settings = new BibliographyPluginSettings();
//		console.log("Completed constructor");
//	};

	async onload() {
		console.log("loading Bibliography");
		// Load settings. Establish defaults on first access
		await this.loadSettings();

		this.addSettingTab(new BibliographyPluginSettingsTab(this.app, this));

		console.log("Added settings tab");
		
		// this.addStatusBarItem().setText('Status Bar Text');

		this.addCommand({
			id: 'create-citation',
			name: 'Create Citation',
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

	async loadSettings(){
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	/** Update plugin settings. */
	async updateSettings(settings: BibliographySettings) {
		Object.assign(this.settings, settings);
		await this.saveData(this.settings);
	}

	showBibliographyModal(){
		new BibliographyModal(this.app).open();
	}
}

class BookReference implements IReference{
    authorFirstname = 'John';
    authorSurname = 'Smithson';
    city = 'Nottingham';
    pagesUsed = '37-39';
    publisher = 'Hodder & Stoughton';
    title = 'Twiddling for boredom';
	yearPublished = '2021';
}

class CitationModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		let {contentEl} = this;
		console.log("Opening modal")
		contentEl.setText('Insert Citation');
		
		new ButtonComponent(contentEl)
			.setClass("citation-button")
			.setButtonText("Insert Citation")
			.onClick((value => {

				// Temp Start
				let bookRef = new BookReference();

				var inlineCitation: string = getInlineCitationTemplate("Book", bookRef);
				console.log(inlineCitation);
		
				// Temp Ends

				this.getEditor()!.replaceSelection(inlineCitation);
			}));
	}

	onClose() {
		let {contentEl} = this;
		contentEl.empty();
	}

	private getEditor(): Editor | undefined {
		return this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
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

class BibliographyPluginSettingsTab extends PluginSettingTab {
	plugin: BibliographyPlugin;

	constructor(app: App, plugin: BibliographyPlugin) {
		console.log("Creating Bibliography settings tab");
		super(app, plugin);
		console.log("Finished with super")
		this.plugin = plugin;
		console.log("Created Bibliogrpahy settings tab");
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
					await this.plugin.updateSettings(this.plugin.settings);
				})
			);


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
          		})
			);
	}
}