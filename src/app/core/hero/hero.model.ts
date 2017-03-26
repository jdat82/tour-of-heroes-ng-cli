export enum Sex {
    Male,
    Female
}

export enum HeroCity {
    GothamCity,
    KeystoneCity,
    Metropolis,
    NewYork,
    StarCity
}

export enum Franchise {
    Marvel,
    DCComics
}

export interface Hero {
    id:number, // Label
    name:string, // Input text
    age?:number, // Slider
    sex?:Sex, // Button toggle
    active?:boolean, // Slide toggle
    city?:HeroCity, // Select
    powers?: string[] // Chips & autocomplete
    mainPower?: string // Input with autocomplete
    franchise?: Franchise // Checkbox list
}
