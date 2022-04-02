
export interface EMedalType {
    name: string,
    year: string,
    distance: string,
    type: string,
    location: string,
    id: number,
    img: string
}


export interface EResultsType {
    id: number,
    place: number,
    startNumber: string,
    avatar?: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
    name: string,
    result: string,
}

export interface EProtocolType {
    split: string,
    time: string
}
