const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
})

export function FormattedDate({ date, ...props }) {
    if (!date) {
        console.error('Date is not defined')
        return null
    }

    date = typeof date === 'string' ? new Date(date) : date

    return (
        <time dateTime={date.toISOString()} {...props}>
            {dateFormatter.format(date)}
        </time>
    )
}
