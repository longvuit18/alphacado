export const truncate = (
    fullStr: string,
    strLen: number = 9,
    frontChars: number = 4,
    backChars: number = 4,
    separator: string = "...",
) => {
    if (fullStr.length <= strLen) return fullStr;

    return (
        fullStr.substring(0, frontChars) +
        separator +
        fullStr.substring(fullStr.length - backChars)
    );
}