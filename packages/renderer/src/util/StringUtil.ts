export const appendClassName = (className: string, stringToAppend?: string): string => {
    if (!stringToAppend) {
        return className
    }
    return `${className} ${stringToAppend}`
}
