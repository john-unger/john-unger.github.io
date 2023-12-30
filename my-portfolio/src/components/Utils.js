
/**
 *
 * @param {String} relativePath
 * @returns returns full string that is safe to render
 */
function imagePath(relativePath) {
    return `${process.env.PUBLIC_URL}/${relativePath}`;
}

export default imagePath;
