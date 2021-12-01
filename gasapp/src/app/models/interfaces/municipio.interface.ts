export interface Municipios {
    IDMunicipio: string;
    IDProvincia: string;
    IDCCAA:      string;
    Municipio:   string;
    Provincia:   Provincia;
    CCAA:        Ccaa;
}
export enum Ccaa {
    CastillaLaMancha = "Castilla la Mancha",
}
export enum Provincia {
    Albacete = "ALBACETE",
}