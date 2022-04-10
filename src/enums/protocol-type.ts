

export interface EAthleteType {
    id: string,
    firstName: string,
    lastName: string,
    country: string,
    age: string
}


export interface EProtocolType {
    id: string,
    protocol_id: string,
    place: string,
    bib: null,
    resulttime: null,
    overalltime: string,
    placeAgeGroup: string,
    placeGender: string,
    athlete_id: string,
    athlete: EAthleteType
}
