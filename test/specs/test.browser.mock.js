import { browser, expect } from '@wdio/globals'

describe('Mock API call test', () => {
    it('should intercept fetch to /user', async () => {
        await browser.cdp('Network', 'enable');

        const userMock = await browser.mock('https://api.example.com/user', { method: 'GET' });

        userMock.respond({
            id: 1,
            name: 'Mocked User'
        }, {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' }
        });

        await browser.url('https://example.com'); 

        // Execute JavaScript to trigger the fetch
        await browser.execute(() => {
            fetch('https://api.example.com/user')
                .then(res => res.json())
                .then(data => console.log('Fetched user:', data));
        });

        await browser.pause(2000); 

        expect(userMock.calls.length).toBeGreaterThan(0); 

        await browser.cdp('Network', 'disable');
    });
});
