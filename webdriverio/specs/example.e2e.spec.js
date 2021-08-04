describe('My sample application', () => {
    beforeEach(() => {
        browser.url('http://localhost:4200/');
    });

    it('should click learn angular hyperlink', async () => {
        const link = await $('.card');
        await link.click();
    });
});


