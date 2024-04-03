export const sanitizeSpaces = (str: string): string => {
    return str.replace(/[\u200B-\u200D\uFEFF]/g, '');
}