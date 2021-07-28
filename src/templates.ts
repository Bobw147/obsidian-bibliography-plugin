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

export interface IReference{
    authorFirstname: string,
    authorSurname: string,
    city: string,
    pagesUsed: string,
    publisher: string,
    title: string,
    yearPublished: string,
}

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

export function getInlineCitation(sourceType: SourceType, refInfo: Partial<IReference>): string{
    if (inlineCitationMap.has(sourceType.toString())){
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
                if (refInfo.authorSurname == undefined || refInfo.authorSurname == '') {
                    if (refInfo.yearPublished == undefined || refInfo.yearPublished == '') {
                        return '()';
                    }
                    else {
                        return buildReference(dateOnlyTemplate, refInfo);
                    }
                } else {
                    if (refInfo.yearPublished == undefined || refInfo.yearPublished == '') {
                        return buildReference(authorOnlyTemplate, refInfo);
                    }
                    return buildReference(inlineCitationMap.get(sourceType.toString())!, refInfo);
                }
                break;

            case SourceType.Bible:
            case SourceType.DVD:
            case SourceType.Film:
            case SourceType.PressRelease:
            case SourceType.TVShow:
            case SourceType.Video:
                if (refInfo.title == undefined || refInfo.title == '') {
                    if (refInfo.yearPublished == undefined || refInfo.yearPublished == '') {
                        return '()';
                    } else {
                        return buildReference(dateOnlyTemplate, refInfo);
                    }
                } else {
                    if (refInfo.yearPublished == undefined || refInfo.yearPublished == '') {
                        return buildReference(titleOnlyTemplate, refInfo);
                    }
                    return buildReference(inlineCitationMap.get(sourceType.toString())!, refInfo);
                }
                break;
                
            case SourceType.CourtCase:
                if (refInfo.title == undefined || refInfo.title == '') {
                    if (refInfo.yearPublished == undefined || refInfo.yearPublished == '') {
                        return '()';
                    } else {
                        return buildReference(enclosedDateOnlyTemplate, refInfo);
                    }
                } else {
                    if (refInfo.yearPublished == undefined || refInfo.yearPublished == '') {
                        return buildReference(titleOnlyTemplate, refInfo);
                    }
                    return buildReference(inlineCitationMap.get(sourceType.toString())!, refInfo);
                }
                break;
    
            default:
                return '()';
        }
    }
    return '()';
}


function buildReference(template: CitationPart[], refDetails: Partial<IReference>) : string{
    let reference: string = '';

    template.forEach((part) => {
        switch(part){
            case CitationPart.AuthorFirstname:
                reference += refDetails.authorFirstname;
                break;

            case CitationPart.AuthorInitial:
                reference += refDetails.authorFirstname.trimStart()[0].toUpperCase();
                break;

            case CitationPart.AuthorSurname:
                reference += (refDetails.authorSurname != undefined) ? refDetails.authorSurname : '';
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
}