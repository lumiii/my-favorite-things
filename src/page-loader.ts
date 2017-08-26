import phantom = require('phantom');

export async function screenshot(url: string): Promise<Buffer> {
    const browser = await phantom.create(['--ignore-ssl-errors=true']);
    const page = await browser.createPage();
    await page.open(url);

    const base64image = await page.renderBase64('png');
    await browser.exit();

    return Buffer.from(base64image, 'base64');
}

export async function screenshotSave(url: string, filepath: string): Promise<void> {
    const browser = await phantom.create(['--ignore-ssl-errors=true']);
    const page = await browser.createPage();
    await page.open(url);

    await page.render(filepath);
    await browser.exit();
}

export async function evaluateScript(url: string, func: () => string): Promise<any> {
    const browser = await phantom.create(['--ignore-ssl-errors=true']);
    const page = await browser.createPage();
    await page.open(url);

    return await page.evaluate(func);
}
