import jimp = require('jimp');
import util = require('util');

export function getDomain(url_str: string): string {
    var url = new URL(url_str);
    return url.hostname;
}

export async function cropPicture(buffer: Buffer, ratio: number): Promise<Buffer> {
    let image = await jimp.read(buffer);

    const target_height = image.bitmap.width * (1 / ratio);
    if (target_height >= image.bitmap.height) {
        return buffer;
    }

    image = await image.crop(0, 0, image.bitmap.width, target_height);

    const get_buffer = util.promisify(image.getBuffer);
    return await get_buffer.call(image, jimp.MIME_PNG);
}
