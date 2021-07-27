import {getInlineCitation, IReference, SourceType} from '../src/templates';

interface ITestResult extends Partial<IReference>{
    expected: string
};

const basicInlineRef: ITestResult = {
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

describe('buildInlineCitation', () => {
    it('Should return an author citation for a archive material', () => {
        expect(getInlineCitation(SourceType.Archive, basicInlineRef)).toEqual(basicInlineRef.expected);
    });

    it('Should give controlled output with empty author', () => {
        expect(getInlineCitation(SourceType.Book, emptyAuthorInlineRef)).toEqual(emptyAuthorInlineRef.expected);
    });

    it('Should give controlled output with undefined author', () => {
        expect(getInlineCitation(SourceType.Book, undefinedAuthorInlineRef)).toEqual(undefinedAuthorInlineRef.expected);
    });

    it('Should return an author citation for a book', () => {
        expect(getInlineCitation(SourceType.Book, basicInlineRef)).toEqual(basicInlineRef.expected);
    });
});