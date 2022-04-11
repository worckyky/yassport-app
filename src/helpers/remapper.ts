
const reMapper = (str: string) => {
    switch (str) {
        case 'dateStart':
            return 'year'
        case 'medalType':
            return 'type'
        default:
            return str
    }
}
export default reMapper
