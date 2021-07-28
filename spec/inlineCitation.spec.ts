import {getInlineCitation, IReference, SourceType} from '../src/templates';

interface ITestResult extends Partial<IReference>{
    expected: string
};

const authorInlineRef: ITestResult = {
    authorSurname: 'Wilson',
    yearPublished: '2021',
    expected: '(Wilson, 2021)'
};

const emptyAuthorInlineRef: ITestResult = {
    authorSurname: '',
    yearPublished: '2021',
    expected: '(2021)'
};

const undefinedAuthorInlineRef: ITestResult = {
    yearPublished: '2021',
    expected: '(2021)'
};

const emptyDateAuthorInlineRef: ITestResult = {
    authorSurname: 'Wilson',
    expected: '(Wilson)'
};

const undefinedDateAuthorInlineRef: ITestResult = {
    authorSurname: 'Wilson',
    yearPublished: '',
    expected: '(Wilson)'
};

const titleInlineRef: ITestResult = {
    title: 'A Chronic Feeling Of Deja Vu',
    yearPublished: '2021',
    expected: '(A Chronic Feeling Of Deja Vu, 2021)'
};

const emptyTitleInlineRef: ITestResult = {
    title: '',
    yearPublished: '2021',
    expected: '(2021)'
};

const undefinedTitleInlineRef: ITestResult = {
    yearPublished: '2021',
    expected: '(2021)'
};

const emptyDateTitleInlineRef: ITestResult = {
    title: 'A Chronic Feeling Of Deja Vu',
    yearPublished: '',
    expected: '(A Chronic Feeling Of Deja Vu)'
};

const undefinedDateTitleInlineRef: ITestResult = {
    title: 'A Chronic Feeling Of Deja Vu',
    yearPublished: '',
    expected: '(A Chronic Feeling Of Deja Vu)'
};

const courtCaseInlineRef: ITestResult = {
   expected: '(A Chronic Feeling Of Deja Vu, [2021])'
};

const courtCaseEmptyTitleInlineRef: ITestResult = {
    expected: '([2021])'
};

const courtCaseUndefinedTitleInlineRef: ITestResult = {
    expected: '([2021])'
};

const undefinedInlineRef: ITestResult = {
    expected: '()'
}

describe('buildInlineCitation', () => {
    it.each`
        sourceType                              | refData                       | result
        ${SourceType.Archive}                   | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Artwork}                   | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Blog}                      | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Book}                      | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.BookChapter}               | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.ConferenceProceedings}     | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.DictionaryEntry}           | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Dissertation}              | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.EBook}                     | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.EditedBook}                | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.EncyclopediaArticle}       | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Email}                     | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.GovernmentPublication}     | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Interview}                 | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Journal}                   | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Lecture}                   | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Magazine}                  | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Newspaper}                 | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.OnlineImage}               | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.OnlineVideo}               | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Patent}                    | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Podcast}                   | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Presentation}              | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Report}                    | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Software}                  | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Song}                      | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Website}                   | ${authorInlineRef}            | ${authorInlineRef.expected}
        ${SourceType.Archive}                   | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Artwork}                   | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Blog}                      | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Book}                      | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.BookChapter}               | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.ConferenceProceedings}     | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.DictionaryEntry}           | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Dissertation}              | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.EBook}                     | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.EditedBook}                | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.EncyclopediaArticle}       | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Email}                     | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.GovernmentPublication}     | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Interview}                 | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Journal}                   | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Lecture}                   | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Magazine}                  | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Newspaper}                 | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.OnlineImage}               | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.OnlineVideo}               | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Patent}                    | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Podcast}                   | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Presentation}              | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Report}                    | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Software}                  | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Song}                      | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Website}                   | ${emptyAuthorInlineRef}       | ${emptyAuthorInlineRef.expected}
        ${SourceType.Archive}                   | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Artwork}                   | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Blog}                      | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Book}                      | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.BookChapter}               | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.ConferenceProceedings}     | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.DictionaryEntry}           | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Dissertation}              | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.EBook}                     | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.EditedBook}                | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.EncyclopediaArticle}       | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Email}                     | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.GovernmentPublication}     | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Interview}                 | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Journal}                   | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Lecture}                   | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Magazine}                  | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Newspaper}                 | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.OnlineImage}               | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.OnlineVideo}               | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Patent}                    | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Podcast}                   | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Presentation}              | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Report}                    | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Software}                  | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Song}                      | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Website}                   | ${undefinedAuthorInlineRef}   | ${undefinedAuthorInlineRef.expected}
        ${SourceType.Archive}                   | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Artwork}                   | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Blog}                      | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Book}                      | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.BookChapter}               | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.ConferenceProceedings}     | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.DictionaryEntry}           | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Dissertation}              | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.EBook}                     | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.EditedBook}                | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.EncyclopediaArticle}       | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Email}                     | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.GovernmentPublication}     | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Interview}                 | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Journal}                   | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Lecture}                   | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Magazine}                  | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Newspaper}                 | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.OnlineImage}               | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.OnlineVideo}               | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Patent}                    | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Podcast}                   | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Presentation}              | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Report}                    | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Software}                  | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Song}                      | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Website}                   | ${emptyDateAuthorInlineRef}            | ${emptyDateAuthorInlineRef.expected}
        ${SourceType.Archive}                   | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Artwork}                   | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Blog}                      | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Book}                      | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.BookChapter}               | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.ConferenceProceedings}     | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.DictionaryEntry}           | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Dissertation}              | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.EBook}                     | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.EditedBook}                | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.EncyclopediaArticle}       | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Email}                     | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.GovernmentPublication}     | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Interview}                 | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Journal}                   | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Lecture}                   | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Magazine}                  | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Newspaper}                 | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.OnlineImage}               | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.OnlineVideo}               | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Patent}                    | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Podcast}                   | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Presentation}              | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Report}                    | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Software}                  | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Song}                      | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Website}                   | ${undefinedDateAuthorInlineRef}            | ${undefinedDateAuthorInlineRef.expected}
        ${SourceType.Archive}                   | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Artwork}                   | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Blog}                      | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Book}                      | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.BookChapter}               | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.ConferenceProceedings}     | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.DictionaryEntry}           | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Dissertation}              | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.EBook}                     | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.EditedBook}                | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.EncyclopediaArticle}       | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Email}                     | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.GovernmentPublication}     | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Interview}                 | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Journal}                   | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Lecture}                   | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Magazine}                  | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Newspaper}                 | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.OnlineImage}               | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.OnlineVideo}               | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Patent}                    | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Podcast}                   | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Presentation}              | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Report}                    | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Software}                  | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Song}                      | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Website}                   | ${undefinedInlineRef}            | ${undefinedInlineRef.expected}
        ${SourceType.Bible}                     | ${titleInlineRef}             | ${titleInlineRef.expected}
        ${SourceType.CourtCase}                 | ${titleInlineRef}             | ${courtCaseInlineRef.expected}
        ${SourceType.DVD}                       | ${titleInlineRef}             | ${titleInlineRef.expected}
        ${SourceType.Film}                      | ${titleInlineRef}             | ${titleInlineRef.expected}
        ${SourceType.PressRelease}              | ${titleInlineRef}             | ${titleInlineRef.expected}
        ${SourceType.TVShow}                    | ${titleInlineRef}             | ${titleInlineRef.expected}
        ${SourceType.Video}                     | ${titleInlineRef}             | ${titleInlineRef.expected}
        ${SourceType.Bible}                     | ${emptyTitleInlineRef}        | ${emptyTitleInlineRef.expected}
        ${SourceType.CourtCase}                 | ${emptyTitleInlineRef}        | ${courtCaseEmptyTitleInlineRef.expected}
        ${SourceType.DVD}                       | ${emptyTitleInlineRef}        | ${emptyTitleInlineRef.expected}
        ${SourceType.Film}                      | ${emptyTitleInlineRef}        | ${emptyTitleInlineRef.expected}
        ${SourceType.PressRelease}              | ${emptyTitleInlineRef}        | ${emptyTitleInlineRef.expected}
        ${SourceType.TVShow}                    | ${emptyTitleInlineRef}        | ${emptyTitleInlineRef.expected}
        ${SourceType.Video}                     | ${emptyTitleInlineRef}        | ${emptyTitleInlineRef.expected}
        ${SourceType.Bible}                     | ${emptyDateTitleInlineRef}    | ${emptyDateTitleInlineRef.expected}
        ${SourceType.CourtCase}                 | ${emptyDateTitleInlineRef}    | ${emptyDateTitleInlineRef.expected}
        ${SourceType.DVD}                       | ${emptyDateTitleInlineRef}    | ${emptyDateTitleInlineRef.expected}
        ${SourceType.Film}                      | ${emptyDateTitleInlineRef}    | ${emptyDateTitleInlineRef.expected}
        ${SourceType.PressRelease}              | ${emptyDateTitleInlineRef}    | ${emptyDateTitleInlineRef.expected}
        ${SourceType.TVShow}                    | ${emptyDateTitleInlineRef}    | ${emptyDateTitleInlineRef.expected}
        ${SourceType.Video}                     | ${emptyDateTitleInlineRef}    | ${emptyDateTitleInlineRef.expected}
        ${SourceType.Bible}                     | ${undefinedDateTitleInlineRef}    | ${undefinedDateTitleInlineRef.expected}
        ${SourceType.CourtCase}                 | ${undefinedDateTitleInlineRef}    | ${undefinedDateTitleInlineRef.expected}
        ${SourceType.DVD}                       | ${undefinedDateTitleInlineRef}    | ${undefinedDateTitleInlineRef.expected}
        ${SourceType.Film}                      | ${undefinedDateTitleInlineRef}    | ${undefinedDateTitleInlineRef.expected}
        ${SourceType.PressRelease}              | ${undefinedDateTitleInlineRef}    | ${undefinedDateTitleInlineRef.expected}
        ${SourceType.TVShow}                    | ${undefinedDateTitleInlineRef}    | ${undefinedDateTitleInlineRef.expected}
        ${SourceType.Video}                     | ${undefinedDateTitleInlineRef}    | ${undefinedDateTitleInlineRef.expected}
        ${SourceType.Bible}                     | ${undefinedInlineRef}    | ${undefinedInlineRef.expected}
        ${SourceType.CourtCase}                 | ${undefinedInlineRef}    | ${undefinedInlineRef.expected}
        ${SourceType.DVD}                       | ${undefinedInlineRef}    | ${undefinedInlineRef.expected}
        ${SourceType.Film}                      | ${undefinedInlineRef}    | ${undefinedInlineRef.expected}
        ${SourceType.PressRelease}              | ${undefinedInlineRef}    | ${undefinedInlineRef.expected}
        ${SourceType.TVShow}                    | ${undefinedInlineRef}    | ${undefinedInlineRef.expected}
        ${SourceType.Video}                     | ${undefinedInlineRef}    | ${undefinedInlineRef.expected}
          `('Should return $result when $sourceType and $refData are used', ({sourceType, refData, result} ) => {
            expect(getInlineCitation(sourceType, refData)).toEqual(result)
        });
});