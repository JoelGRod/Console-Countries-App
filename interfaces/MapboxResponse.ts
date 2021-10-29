export interface MapboxResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:                   string;
    type:                 FeatureType;
    place_type:           PlaceType[];
    relevance:            number;
    properties:           Properties;
    text_en:              string;
    language_en?:         Language;
    place_name_en:        string;
    text:                 string;
    language?:            Language;
    place_name:           string;
    bbox?:                number[];
    center:               number[];
    geometry:             Geometry;
    context:              Context[];
    matching_text?:       string;
    matching_place_name?: string;
}

export interface Context {
    id:           string;
    wikidata?:    string;
    text_en:      string;
    language_en?: Language;
    text:         string;
    language?:    Language;
    short_code?:  ShortCode;
}

export enum Language {
    En = "en",
}

export enum ShortCode {
    Co = "co",
    CoCun = "CO-CUN",
    Es = "es",
}

export interface Geometry {
    type:        GeometryType;
    coordinates: number[];
}

export enum GeometryType {
    Point = "Point",
}

export enum PlaceType {
    Place = "place",
    Poi = "poi",
    Region = "region",
}

export interface Properties {
    wikidata?:   string;
    foursquare?: string;
    address?:    string;
    landmark?:   boolean;
    category?:   string;
    maki?:       string;
}

export enum FeatureType {
    Feature = "Feature",
}