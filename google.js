

describe('Google Test', function() {

    it('First Test', async () => {

        await browser.url('https://www.google.com');

        const searchField = await $('[name="q"]');
        await searchField.setValue('WebdriverIO');

        //pressing enter key to submit 
        await browser.keys('Enter');

        await browser.pause(2000);

    })
})
