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
}

export enum CitationPart {
    AuthorFirstname,
    AuthorInitial,
    AuthorSurname,
    City,
    CloseBracket,
    Comma,
    Dot,
    OpenBracket,
    PagesUsed,
    Publisher,
    Space,
    Title,
    YearPublished,
}

export var inlineCitationTemplates:number[][] = [
[CitationPart.OpenBracket, CitationPart.AuthorSurname, CitationPart.AuthorInitial, CitationPart.YearPublished, CitationPart.CloseBracket],
[CitationPart.OpenBracket, CitationPart.AuthorFirstname, CitationPart.AuthorSurname, CitationPart.AuthorInitial, CitationPart.YearPublished, CitationPart.CloseBracket],
];

export function getTemplate(sourceType: SourceType):number[]{
    return inlineCitationTemplates[sourceType];
}
