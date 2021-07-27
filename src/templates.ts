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
    Website,
    Video,
    Authorless,
}

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
/*
var inlineCitationTemplates:number[][] = [
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Archive 
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Artwork
    [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],          // Bible 
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Blog
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Book
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // BookChapter
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // ConferenceProceedings
    [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.OpenSquareBracket, CitationPart.YearPublished, CitationPart.CloseBracket, CitationPart.CloseBracket],  // CourtCase
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // DictionaryEntry
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Dissertation
    [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],          // DVD
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // EBook
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // EditedBook
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Email
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // EncyclopediaArticle
    [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],          // Film 
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // GovernmentPublication
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Interview
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Journal
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Lecture
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Magazine
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Newspaper
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // OnlineImage
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // OnlineVideo
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Patent
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Podcast
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Presentation
    [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],          // PressRelease 
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Report
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Software
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Song
    [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],          // TVShow 
    [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],  // Website
    [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket],          // Video

    // Special handlers for inline citations
    [CitationPart.OpenBracket, CitationPart.YearPublished, CitationPart.CloseBracket],                                                                      // Authorless
];

function getTemplate(sourceType: SourceType):number[]{
    return inlineCitationTemplates[sourceType];
}
*/

var inlineCitationMap = new Map([
    [SourceType.Archive.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Artwork.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Bible.toString(), [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Blog.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Book.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.BookChapter.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.ConferenceProceedings.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.CourtCase.toString(), [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.OpenSquareBracket, CitationPart.YearPublished, CitationPart.CloseBracket, CitationPart.CloseBracket]],
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
    [SourceType.Website.toString(), [CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],
    [SourceType.Video.toString(), [CitationPart.OpenBracket, CitationPart.Title, CitationPart.Comma, CitationPart.Space, CitationPart.YearPublished, CitationPart.CloseBracket]],

    // Special handlers for inline citations
    [SourceType.Authorless.toString(), [CitationPart.OpenBracket, CitationPart.YearPublished, CitationPart.CloseBracket]],                                                                      // Authorless

]);

export function getInlineCitation(sourceType: SourceType, refInfo: Partial<IReference>): string{
    if (inlineCitationMap.has(sourceType.toString())){
        switch (sourceType){
            case SourceType.Archive:
            case SourceType.Book:
                if (refInfo.authorSurname == undefined || refInfo.authorSurname == '') {
                    return buildReference(inlineCitationMap.get(SourceType.Authorless.toString())!, refInfo);
                } else {
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