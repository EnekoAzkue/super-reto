interface HistoryInterface {
    founded: founded,
    majorEvents: majorEvents[],
}

interface founded {
    year: number,
    by: string
}

interface majorEvents {
    year: number,
    event: string,
    outcome: string,
    description: string,
}

export default HistoryInterface 