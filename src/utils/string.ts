export const truncate = (
    fullStr: string,
    strLen: number = 8,
    separator: string = "...",
    frontChars: number = 3,
    backChars: number = 4
) => {
    if (fullStr.length <= strLen) return fullStr;

    return (
        fullStr.substring(0, frontChars) +
        separator +
        fullStr.substring(fullStr.length - backChars)
    );
}