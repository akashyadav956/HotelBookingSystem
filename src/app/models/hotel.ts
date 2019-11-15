export interface Hotel {
}

export interface SearchModel {
    fromDate: Date;
    toDate: Date;
    LocationId: number;
    adult: number;
    children: number;
    noOfRoom: number;
    totalNightStay: number;
}

export enum Location {
    Mumbai = 1, Pune, Nagpur, Hydrebad, Bangaluru
}
