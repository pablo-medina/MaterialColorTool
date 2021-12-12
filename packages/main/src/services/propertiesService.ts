import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'
import { config } from '../config/appPropertiesConfig'

type ConfigurationProperty = {
    key: string,
    value: string
}

type LineProcessResult = {
    lineType: 'blank' | 'comment' | 'property' | 'error',
    property?: ConfigurationProperty
}

type LineRecord = {
    lineNumber: number,
    result: LineProcessResult
}

const CONFIG_DEFAULTS: ConfigurationProperty[] = [
    { key: 'theme', value: 'silver' },
    { key: 'language', value: 'en' }
]

const readFile = (path: string): string[] => {
    if (fs.existsSync(path)) {
        const data = fs.readFileSync(config.fileName, { encoding: 'utf8', flag: 'r' })
        return data.split(os.EOL)
    } else {
        return []
    }
}

const writeFile = (path: string, data: string): void => {
    fs.writeFileSync(config.fileName, data, { encoding: 'utf8', flag: 'w' })
}

const parseLine = (line: string): LineProcessResult => {
    const trimmedLine = line.trim()
    if (trimmedLine.length == 0) {
        return { lineType: 'blank' }
    }

    if (trimmedLine.startsWith('#')) {
        return { lineType: 'comment' }
    }

    const sep = trimmedLine.indexOf(config.keyValueSeparator)
    if (sep > 0) {
        const lineKey = trimmedLine.substring(0, sep).trim()
        const lineValue = trimmedLine.substring(sep + 1).trim()
        if (lineKey.length > 0) {
            return ({ lineType: 'property', property: { key: lineKey, value: lineValue } })
        }
    }

    return ({ lineType: 'error' })
}

const parseProperties = (lines: string[]): LineRecord[] => {
    const parsedProperties: LineRecord[] = []

    let i = 1
    lines.forEach(line => {
        const lpr = parseLine(line)
        parsedProperties.push({
            lineNumber: i,
            result: lpr
        })
        i++
    })
    return parsedProperties
}

const updateProperties = (lines: string[], propertiesMap: Map<string, string>): string[] => {
    const pendingMap = new Map<string, string>()
    propertiesMap.forEach((value: string, key: string) => {
        pendingMap.set(key, value)
    })

    const processedLines = []
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        const lpr = parseLine(line)
        switch (lpr.lineType) {
            case 'blank':
            case 'comment':
                processedLines.push(line)
                break;
            case 'property': {
                if (lpr.property) {
                    const property = lpr.property
                    const updatedValue = pendingMap.get(property.key)
                    processedLines.push(`${property.key}${config.keyValueSeparator}${updatedValue}`)
                    pendingMap.delete(property.key)
                }
                break;
            }
            default:
                break;
        }
    }

    // Add missing properties
    pendingMap.forEach((value: string, key: string) => {
        processedLines.push(`${key}${config.keyValueSeparator}${value}`)
    })

    return processedLines
}

class AppProperties {
    private static instance: AppProperties
    private configMap = new Map<string, string>()

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {
    }

    public init() {
        this.loadConfig()
    }

    public static getInstance(): AppProperties {
        if (!AppProperties.instance) {
            AppProperties.instance = new AppProperties()
        }
        return AppProperties.instance
    }

    private loadConfig = () => {
        const map = new Map<string, string>()

        // Build defaults map
        CONFIG_DEFAULTS.forEach(cd => {
            map.set(cd.key, cd.value)
        })

        // Read config file
        const configFilePath = path.join(process.cwd(), config.fileName)
        const lines = readFile(configFilePath)
        const lineRecords = parseProperties(lines)
        lineRecords.forEach(lr => {
            if ((lr.result.lineType === 'property') && (lr.result.property)) {
                const property = lr.result.property
                map.set(property.key, property.value)
            }
        })
        this.configMap = map
    }

    get(key: string): string {
        const value = this.configMap.get(key)
        return (value || '')
    }

    set(key: string, value: string): void {
        this.configMap.set(key, (value || ''))
    }

    save(): void {
        const configFilePath = path.join(process.cwd(), config.fileName)
        const lines = readFile(configFilePath)
        const processedLines = updateProperties(lines, this.configMap)
        const updatedFile = processedLines.join(os.EOL)
        writeFile(configFilePath, updatedFile)
        console.debug('Configuration saved to ', configFilePath)
    }
}

export default AppProperties.getInstance()
