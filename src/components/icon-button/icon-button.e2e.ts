import { newE2EPage } from '@stencil/core/testing';

describe('limel-icon-button', () => {
    let page;
    describe('smoke test', () => {
        let mdcIconButton;
        beforeEach(async () => {
            page = await createPage(`
                <limel-icon-button icon="heart_outlined" label="Add favorite"></limel-switch>
            `);
            mdcIconButton = await page.find(
                'limel-icon-button >>> .mdc-icon-button'
            );
        });
        it('displays the correct label', () => {
            expect(mdcIconButton).toEqualAttribute(
                'aria-label',
                'Add favorite'
            );
        });
    });
});

async function createPage(content) {
    return newE2EPage({ html: content });
}
