
/**
 * Representation of a single movie in the system
 * https://www.esrb.org/ratings-guide/
 */
export interface IMovie {
    title: string,
    thumbnail: {
        trending: {
            small: string,
            large: string
        }
    },
    regular: {
        small: string,
        medium: string,
        large: string
    },
    year: number,
    category: "movie" | "serie",
    rating: "E" | "A" | "E" | "E10" | "T" | "M" | "PG" | "RP" | "RP+",
    isTrending: boolean
}