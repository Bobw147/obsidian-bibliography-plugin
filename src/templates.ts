// templates.ts

export enum SourceType {
    Archive,
    Artwork,
    Bible,
    Blog,
    Book,
    BookChapter,
    ConferenceProceedings,
    CourtCase,
    DictionaryEntry,
    Dissertation,
    DVD,
    EBook,
    EditedBook,
    Email,
    EncyclopediaArticle,
    Film,
    GovernmentPublication,
    Interview,
    Journal,
    Lecture,
    Magazine,
    Newspaper,
    OnlineImage,
    OnlineVideo,
    Patent,
    Podcast,
    Presentation,
    PressRelease,
    Report,
    Software,
    Song,
    TVShow,
    Video,
    Website,
}

let sourceTypeToString: string[] = [
    'Archive',
    'Artwork',
    'Bible',
    'Blog',
    'Book',
    'BookChapter',
    'ConferenceProceedings',
    'CourtCase',
    'DVD',
    'EBook',
    'EditedBook',
    'Email',
    'EncyclopediaArticle',
    'Film',
    'GovernmentPublication',
    'Interview',
    'Journal',
    'Lecture',
    'Magazine',
    'Newspaper',
    'OnlineImage',
    'OnlineVideo',
    'Patent',
    'Podcast',
    'Presentation',
    'PressRelease',
    'Report',
    'Software',
    'Song',
    'TVShow',
    'Video',
    'Website',
];


enum CitationPart {
    AuthorFirstname,
    AuthorInitial,
    AuthorSurname,
    City,
    CloseBracket,
    CloseSquareBracket,
    Colon,
    Comma,
    Dot,
    OpenBracket,
    OpenSquareBracket,
    PagesUsed,
    Publisher,
    Space,
    Title,
    YearPublished,
}

enum CitationMode {
    Inline,
    Full
}

enum DateMode {
    Plain,
    Bracketed
}

export interface IAuthorInfo {
    authorFirstname: string,
    authorSurname: string,
    authorInitial?: () => string 
}

export interface IReference {
    authorInfo: Partial<IAuthorInfo>[],
    city: string,
    pagesUsed: string,
    publisher: string,
    title: string,
    yearPublished: string,
}
/*
var inlineCitationMap = new Map([
    [SourceType.Archive.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Artwork.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Bible.toString(), [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Blog.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Book.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.BookChapter.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.ConferenceProceedings.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.CourtCase.toString(), [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.OpenSquareBracket, CitationPart.YearPublished, CitationPart.CloseSquareBracket, CitationPart.CloseBracket]],
    [SourceType.DictionaryEntry.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Dissertation.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.DVD.toString(), [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.EBook.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.EditedBook.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Email.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.EncyclopediaArticle.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Film.toString(), [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.GovernmentPublication.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Interview.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Journal.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Lecture.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Magazine.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Newspaper.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.OnlineImage.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.OnlineVideo.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Patent.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Podcast.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Presentation.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.PressRelease.toString(), [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Report.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Software.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Song.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.TVShow.toString(), [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Video.toString(), [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Website.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
]);

// Special templates to handle inconsistent citation formats
const authorOnlyTemplate = [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.CloseBracket]
const dateOnlyTemplate = [CitationPart.OpenBracket, CitationPart.YearPublished, CitationPart.CloseBracket];
const titleOnlyTemplate = [CitationPart.OpenBracket, CitationPart.Title, CitationPart.CloseBracket]
const enclosedDateOnlyTemplate = [CitationPart.OpenBracket, CitationPart.OpenSquareBracket, CitationPart.YearPublished, CitationPart.CloseSquareBracket, CitationPart.CloseBracket];
*/

export function getInlineCitation(sourceType: SourceType, refInfo: Partial<IReference>): string{
    if (true){
        let reference = '(';
        let date = '';
        let title = '';
        switch (sourceType){
            case SourceType.Archive:
            case SourceType.Artwork:
            case SourceType.Blog:
            case SourceType.Book:
            case SourceType.BookChapter:
            case SourceType.ConferenceProceedings:
            case SourceType.DictionaryEntry:
            case SourceType.Dissertation:
            case SourceType.EBook:
            case SourceType.EditedBook:
            case SourceType.Email:
            case SourceType.EncyclopediaArticle:
            case SourceType.GovernmentPublication:
            case SourceType.Interview:
            case SourceType.Journal:
            case SourceType.Lecture:
            case SourceType.Magazine:
            case SourceType.Newspaper:
            case SourceType.OnlineImage:
            case SourceType.OnlineVideo:
            case SourceType.Patent:
            case SourceType.Podcast:
            case SourceType.Presentation:
            case SourceType.Report:
            case SourceType.Software:
            case SourceType.Song:
            case SourceType.Website:
                let author = buildAuthorInfo(CitationMode.Inline, refInfo);
                date = buildYearPublished(DateMode.Plain, refInfo);
                if (author != ''){
                    reference += author;
                    if (date != ''){
                        reference += ', ' + date;
                    }
                } else {
                    if (date != ''){
                        reference += date;
                    }
                }
                return reference + ')';

            case SourceType.Bible:
            case SourceType.DVD:
            case SourceType.Film:
            case SourceType.PressRelease:
            case SourceType.TVShow:
            case SourceType.Video:
                title = buildTitle(refInfo);
                date = buildYearPublished(DateMode.Plain, refInfo);
                if (title != ''){
                    reference += title;
                    if (date != ''){
                        reference += ', ' + date;
                    }
                } else {
                    if (date != ''){
                        reference += date;
                    }
                }
                return reference + ')';

                
            case SourceType.CourtCase:
                title = buildTitle(refInfo);
                date = buildYearPublished(DateMode.Bracketed, refInfo);
                if (title != ''){
                    reference += title;
                    if (date != ''){
                        reference += ', ' + date;
                    }
                } else {
                    if (date != ''){
                        reference += date;
                    }
                }
                return reference + ')';
     
            default:
                return '()';
        }
    }
    return '()';
}

/*
function buildReference(template: CitationPart[], refDetails: Partial<IReference>) : string{
    let reference: string = '';

    template.forEach((part) => {
        switch(part){
            case CitationPart.AuthorFirstname:
                reference += refDetails.authorInfo[0].authorFirstname;
                break;

            case CitationPart.AuthorInitial:
                reference += refDetails.authorInfo[0].authorFirstname.trimStart()[0].toUpperCase();
                break;

            case CitationPart.AuthorSurname:
                reference += (refDetails.authorInfo[0].authorSurname != undefined) ? refDetails.authorInfo[0].authorSurname : '';
                break;

            case CitationPart.City:
                reference += refDetails.city;
                break;

            case CitationPart.CloseBracket:
                reference += ')';
                break;

            case CitationPart.CloseSquareBracket:
                reference += ']';
                break;

            case CitationPart.Colon:
                reference += ':';

            case CitationPart.Comma:
                reference += ','
                break;

            case CitationPart.Dot:
                reference += '.'
                break;

            case CitationPart.OpenBracket:
                reference += '('
                break;

            case CitationPart.OpenSquareBracket:
                reference += '['
                break;

            case CitationPart.PagesUsed:
                reference += refDetails.pagesUsed;
                break;

            case CitationPart.Publisher:
                reference += refDetails.publisher;
                break;

            case CitationPart.Space:
                reference += ' '
                break;

            case CitationPart.Title:
                reference += refDetails.title;
                break;

            case CitationPart.YearPublished:
                reference += refDetails.yearPublished;
                break;
        }
    });
    return reference;
};
*/

function buildAuthorInfo(mode: CitationMode, refInfo: Partial<IReference>): string {
    let authorList = '';
    if (refInfo.authorInfo != undefined){
        refInfo.authorInfo.forEach((element, index) => {
            if (element.authorSurname != undefined && element.authorSurname != ''){
                if (mode == CitationMode.Inline){
                    if (index > 0){
                        authorList += index < (refInfo.authorInfo.length - 1) ? ', ' : ' & ';
                    }
                    authorList += element.authorSurname;
                }
            }
        });
    }
    return authorList;
/*
    if (refInfo.authorInfo != undefined && refInfo.authorInfo.length != 0){
        if (refInfo.authorInfo[0].authorSurname != undefined && refInfo.authorInfo[0].authorSurname != '') {
            authorInfo = refInfo.authorInfo[0].authorSurname;
            if (mode == CitationMode.Full) {
                authorInfo += refInfo.authorInfo[0].authorFirstname[0] + '.,';
     
            }
        }
    }
    return authorInfo;
*/
};

function buildTitle(refInfo: Partial<IReference>): string {
    let title = '';
    if (refInfo.title != undefined){
        title = refInfo.title;
    }
    return title;
};

function buildYearPublished(mode: DateMode, refInfo: Partial<IReference>): string {
    let date = '';
    if (refInfo.yearPublished != undefined && refInfo.yearPublished != ''){
        date = refInfo.yearPublished;
        if (mode == DateMode.Bracketed){
            date = '[' + date + ']';
        }
    }
    return date;
};

export function getFullCitation(sourceType: SourceType, refInfo: IReference): string {
    
    return '';
};