import {getInlineCitationTemplate, IReference, SourceType} from '../src/templates';

const bookRef: Partial<IReference> = {
    authorSurname: 'Wilson',
    yearPublished: '2021'
};

describe('buildInlineCitation', () => {
    it('Should return an author citation for a book', () => {
        expect(getInlineCitationTemplate(SourceType.Book, bookRef)).toEqual('(Wilson, 2021)');
    });
});