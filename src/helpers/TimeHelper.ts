import { format, formatDistance } from 'date-fns'
// import { ms } from 'date-fns/locale'

const dateNow = (dateFormat: string = "dd/MM/yyyy") => {
    return format(new Date(), dateFormat);
}

const getTimeDifference = (from: string, to: string) => {
    return formatDistance(new Date(from), new Date(to), { addSuffix: true })
}

const getElapsedTime = (date: string) => {
    return formatDistance(new Date(date), new Date(), { addSuffix: true })
}

export { dateNow, getElapsedTime, getTimeDifference }