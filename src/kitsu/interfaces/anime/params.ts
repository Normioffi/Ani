import {
  EKitsuAnimeAgeRating,
  EKitsuAnimeCategories,
  EKitsuAnimeStreamers,
  EKitsuSeason,
} from "../../enums";

/**
 * @type
 * @description This type returns errors from the Kitsu.app API and module.
 * @since 1.3.0
 */
type IKitsuHandleError = (
  /**
   * @param {object} errors
   * @param {Promise<IKitsuError>} [errors.apiError] - The API errors
   * @param {unknown} [errors.moduleError] - The module errors
   */
  errors: { apiError?: Promise<IKitsuError>; moduleError?: unknown },
  status: number
) => Promise<void>;

/**
 * @interface
 * @description The parameters for the AnimeKitsu#find method.
 * @since 1.3.0
 */
interface IKitsuAnimeFind {
  /**
   * @property The query to find an anime.
   */
  query: string;
  /**
   * @property The offset pagination to skip pages (default is 0)
   */
  offset?: number;
  /**
   * @property The number of objects that should be returned by the API (default: 10, max: **30**)
   */
  perPage?: number | `${number}`;
  /**
   * @property The season of the anime
   */
  season?: "winter" | "spring" | "summer" | "fall" | EKitsuSeason;
  /**
   * @property The year of the anime.
   */
  year?: number | `${number}..` | `${number}..${number}`;
  /**
   * @property The streaming platforms.
   */
  streamers?:
    | (
        | "Crunchyroll"
        | "Hulu"
        | "Funanimation"
        | "CONtv"
        | "Netflix"
        | "HIDIVE"
        | "TubiTV"
        | "Amazon"
        | "Youtube"
        | "AnimeLab"
        | "VRV"
        | EKitsuAnimeStreamers
      )
    | (
        | "Crunchyroll"
        | "Hulu"
        | "Funanimation"
        | "CONtv"
        | "Netflix"
        | "HIDIVE"
        | "TubiTV"
        | "Amazon"
        | "Youtube"
        | "AnimeLab"
        | "VRV"
        | EKitsuAnimeStreamers
      )[];
  /**
   * @property Age rating of the anime (**G**: *General Audiences*, **PG**: *Parental Guidance Suggested*, **R**: *Restricted*, **R18**: *Restricted for 18 years old or older*.)
   */
  ageRating?:
    | ("G" | "R18" | "PG" | "R" | EKitsuAnimeAgeRating)
    | ("G" | "R18" | "PG" | "R" | EKitsuAnimeAgeRating)[];
  averageRating?: `${number}..` | `${number}..${number}`;
  categories?:
    | (
        | "comedy"
        | "anti_war"
        | "coming_of_age"
        | "epidemic"
        | "post_apocalypse"
        | "war"
        | "feudal_warfare"
        | "navy"
        | "family"
        | "friendship"
        | "gender_bender"
        | "law_and_order"
        | "shinsengumi"
        | "air_force"
        | "police"
        | "conspiracy"
        | "cooking"
        | "crime"
        | "assassin"
        | "bounty_hunter"
        | "mafia"
        | "pirate"
        | "thievery"
        | "disaster"
        | "countryside"
        | "desert"
        | "earth"
        | "fantasy_world"
        | "josei"
        | "shoujo"
        | "shounen"
        | "kids"
        | "seinen"
        | "alternative_present"
        | "space"
        | "summer"
        | "shipboard"
        | "other_planet"
        | "mars"
        | "isekai"
        | "island"
        | "parallel_universe"
        | "floating_island"
        | "past"
        | "alternative_past"
        | "bakumatsu_meiji_period"
        | "heian_period"
        | "sengoku_period"
        | "three_kingdoms"
        | "tokugawa_period"
        | "victorian_period"
        | "world_war_ii"
        | "future"
        | "romance"
        | "fantasy"
        | "action"
        | "drama"
        | "harem"
        | "mecha"
        | "ecchi"
        | "supernatural"
        | "super_power"
        | "mystery"
        | "magical_girl"
        | "horror"
        | "henshin"
        | "parasite"
        | "science_fiction"
        | "thriller"
        | "vampire"
        | "virtual_reality"
        | "zombie"
        | "detective"
        | "blackmail"
        | "anthropomorphism"
        | "anime_influenced"
        | "angst"
        | "ghost"
        | "slice_of_life"
        | "adventure"
        | "school_life"
        | EKitsuAnimeCategories
      )
    | (
        | "comedy"
        | "anti_war"
        | "coming_of_age"
        | "epidemic"
        | "post_apocalypse"
        | "war"
        | "feudal_warfare"
        | "navy"
        | "family"
        | "friendship"
        | "gender_bender"
        | "law_and_order"
        | "shinsengumi"
        | "air_force"
        | "police"
        | "conspiracy"
        | "cooking"
        | "crime"
        | "assassin"
        | "bounty_hunter"
        | "mafia"
        | "pirate"
        | "thievery"
        | "disaster"
        | "countryside"
        | "desert"
        | "earth"
        | "fantasy_world"
        | "josei"
        | "shoujo"
        | "shounen"
        | "kids"
        | "seinen"
        | "alternative_present"
        | "space"
        | "summer"
        | "shipboard"
        | "other_planet"
        | "mars"
        | "isekai"
        | "island"
        | "parallel_universe"
        | "floating_island"
        | "past"
        | "alternative_past"
        | "bakumatsu_meiji_period"
        | "heian_period"
        | "sengoku_period"
        | "three_kingdoms"
        | "tokugawa_period"
        | "victorian_period"
        | "world_war_ii"
        | "future"
        | "romance"
        | "fantasy"
        | "action"
        | "drama"
        | "harem"
        | "mecha"
        | "ecchi"
        | "supernatural"
        | "super_power"
        | "mystery"
        | "magical_girl"
        | "horror"
        | "henshin"
        | "parasite"
        | "science_fiction"
        | "thriller"
        | "vampire"
        | "virtual_reality"
        | "zombie"
        | "detective"
        | "blackmail"
        | "anthropomorphism"
        | "anime_influenced"
        | "angst"
        | "ghost"
        | "slice_of_life"
        | "adventure"
        | "school_life"
        | EKitsuAnimeCategories
      )[];
}

/**
 * @interface
 * @description The parameters for the AnimeKitsu#list method.
 * @since 1.3.0
 */
interface IKitsuAnimeList {
  offset?: number;
  perPage?: number;
  season?: "winter" | "spring" | "summer" | "fall" | EKitsuSeason;
  year?:
    | "1907"
    | "1917"
    | "1918"
    | "1919"
    | "1920"
    | "1920"
    | "1921"
    | "1922"
    | "1923"
    | "1924"
    | "1925"
    | "1926"
    | "1927"
    | "1928"
    | "1929"
    | "1930"
    | "1931"
    | "1932"
    | "1933"
    | "1934"
    | "1935"
    | "1936"
    | "1937"
    | "1938"
    | "1939"
    | "1940"
    | "1941"
    | "1942"
    | "1943"
    | "1944"
    | "1945"
    | "1946"
    | "1947"
    | "1948"
    | "1949"
    | "1950"
    | "1951"
    | "1952"
    | "1953"
    | "1954"
    | "1955"
    | "1956"
    | "1957"
    | "1958"
    | "1959"
    | "1960"
    | "1961"
    | "1962"
    | "1963"
    | "1964"
    | "1965"
    | "1966"
    | "1967"
    | "1968"
    | "1969"
    | "1970"
    | "1971"
    | "1972"
    | "1973"
    | "1974"
    | "1975"
    | "1976"
    | "1977"
    | "1978"
    | "1979"
    | "1980"
    | "1981"
    | "1982"
    | "1983"
    | "1984"
    | "1985"
    | "1986"
    | "1987"
    | "1988"
    | "1989"
    | "1990"
    | "1991"
    | "1992"
    | "1993"
    | "1994"
    | "1995"
    | "1996"
    | "1997"
    | "1998"
    | "1999"
    | "2000"
    | "2001"
    | "2002"
    | "2003"
    | "2004"
    | "2005"
    | "2006"
    | "2007"
    | "2008"
    | "2009"
    | "2010"
    | "2011"
    | "2012"
    | "2013"
    | "2014"
    | "2015"
    | "2016"
    | "2017"
    | "2018"
    | "2019"
    | "2020"
    | "2021"
    | "2022"
    | "2023"
    | "2024"
    | (
        | "1907"
        | "1917"
        | "1918"
        | "1919"
        | "1920"
        | "1920"
        | "1921"
        | "1922"
        | "1923"
        | "1924"
        | "1925"
        | "1926"
        | "1927"
        | "1928"
        | "1929"
        | "1930"
        | "1931"
        | "1932"
        | "1933"
        | "1934"
        | "1935"
        | "1936"
        | "1937"
        | "1938"
        | "1939"
        | "1940"
        | "1941"
        | "1942"
        | "1943"
        | "1944"
        | "1945"
        | "1946"
        | "1947"
        | "1948"
        | "1949"
        | "1950"
        | "1951"
        | "1952"
        | "1953"
        | "1954"
        | "1955"
        | "1956"
        | "1957"
        | "1958"
        | "1959"
        | "1960"
        | "1961"
        | "1962"
        | "1963"
        | "1964"
        | "1965"
        | "1966"
        | "1967"
        | "1968"
        | "1969"
        | "1970"
        | "1971"
        | "1972"
        | "1973"
        | "1974"
        | "1975"
        | "1976"
        | "1977"
        | "1978"
        | "1979"
        | "1980"
        | "1981"
        | "1982"
        | "1983"
        | "1984"
        | "1985"
        | "1986"
        | "1987"
        | "1988"
        | "1989"
        | "1990"
        | "1991"
        | "1992"
        | "1993"
        | "1994"
        | "1995"
        | "1996"
        | "1997"
        | "1998"
        | "1999"
        | "2000"
        | "2001"
        | "2002"
        | "2003"
        | "2004"
        | "2005"
        | "2006"
        | "2007"
        | "2008"
        | "2009"
        | "2010"
        | "2011"
        | "2012"
        | "2013"
        | "2014"
        | "2015"
        | "2016"
        | "2017"
        | "2018"
        | "2019"
        | "2020"
        | "2021"
        | "2022"
        | "2023"
        | "2024"
      )[];
  /**
   * @property All of the available streamers that use Kitsu.app
   * @example
   * ```js
   * // Basic usage (string only)
   * anime.list({ streamers: "Hulu"}).then(r => console.log(r.data[0].id));
   *
   * // Using string[]
   * anime.list({ streamers: ["Hulu", "TubiTV"]}).then(r => console.log(r.data[0].id));
   * ```
   */
  streamers?:
    | (
        | "Crunchyroll"
        | "Hulu"
        | "Funanimation"
        | "CONtv"
        | "Netflix"
        | "HIDIVE"
        | "TubiTV"
        | "Amazon"
        | "Youtube"
        | "AnimeLab"
        | "VRV"
        | EKitsuAnimeStreamers
      )
    | (
        | "Crunchyroll"
        | "Hulu"
        | "Funanimation"
        | "CONtv"
        | "Netflix"
        | "HIDIVE"
        | "TubiTV"
        | "Amazon"
        | "Youtube"
        | "AnimeLab"
        | "VRV"
        | EKitsuAnimeStreamers
      )[];
  ageRating?:
    | ("G" | "R18" | "PG" | "R" | EKitsuAnimeAgeRating)
    | ("G" | "R18" | "PG" | "R" | EKitsuAnimeAgeRating)[];
  averageRating?: `${number}..` | `${number}..${number}`;
  /**
   * @property All of the available categories from Kitsu.app
   * @example
   * ```js
   * // Basic usage (string only)
   * anime.list({ categories: "comedy"}).then(r => console.log(r.data[0].id));
   *
   * // Using string[]
   * anime.list({ categories: ["comedy", "anti_war"]}).then(r => console.log(r.data[0].id));
   *
   * // Using Enums
   * anime.list({ categories: EKitsuAnimeCategories.Action }).then(r => console.log(r.data[0].id));
   *```
   */
  categories?:
    | (
        | "comedy"
        | "anti_war"
        | "coming_of_age"
        | "epidemic"
        | "post_apocalypse"
        | "war"
        | "feudal_warfare"
        | "navy"
        | "family"
        | "friendship"
        | "gender_bender"
        | "law_and_order"
        | "shinsengumi"
        | "air_force"
        | "police"
        | "conspiracy"
        | "cooking"
        | "crime"
        | "assassin"
        | "bounty_hunter"
        | "mafia"
        | "pirate"
        | "thievery"
        | "disaster"
        | "countryside"
        | "desert"
        | "earth"
        | "fantasy_world"
        | "josei"
        | "shoujo"
        | "shounen"
        | "kids"
        | "seinen"
        | "alternative_present"
        | "space"
        | "summer"
        | "shipboard"
        | "other_planet"
        | "mars"
        | "isekai"
        | "island"
        | "parallel_universe"
        | "floating_island"
        | "past"
        | "alternative_past"
        | "bakumatsu_meiji_period"
        | "heian_period"
        | "sengoku_period"
        | "three_kingdoms"
        | "tokugawa_period"
        | "victorian_period"
        | "world_war_ii"
        | "future"
        | "romance"
        | "fantasy"
        | "action"
        | "drama"
        | "harem"
        | "mecha"
        | "ecchi"
        | "supernatural"
        | "super_power"
        | "mystery"
        | "magical_girl"
        | "horror"
        | "henshin"
        | "parasite"
        | "science_fiction"
        | "thriller"
        | "vampire"
        | "virtual_reality"
        | "zombie"
        | "detective"
        | "blackmail"
        | "anthropomorphism"
        | "anime_influenced"
        | "angst"
        | "ghost"
        | "slice_of_life"
        | "adventure"
        | "school_life"
        | EKitsuAnimeCategories
      )
    | (
        | "comedy"
        | "anti_war"
        | "coming_of_age"
        | "epidemic"
        | "post_apocalypse"
        | "war"
        | "feudal_warfare"
        | "navy"
        | "family"
        | "friendship"
        | "gender_bender"
        | "law_and_order"
        | "shinsengumi"
        | "air_force"
        | "police"
        | "conspiracy"
        | "cooking"
        | "crime"
        | "assassin"
        | "bounty_hunter"
        | "mafia"
        | "pirate"
        | "thievery"
        | "disaster"
        | "countryside"
        | "desert"
        | "earth"
        | "fantasy_world"
        | "josei"
        | "shoujo"
        | "shounen"
        | "kids"
        | "seinen"
        | "alternative_present"
        | "space"
        | "summer"
        | "shipboard"
        | "other_planet"
        | "mars"
        | "isekai"
        | "island"
        | "parallel_universe"
        | "floating_island"
        | "past"
        | "alternative_past"
        | "bakumatsu_meiji_period"
        | "heian_period"
        | "sengoku_period"
        | "three_kingdoms"
        | "tokugawa_period"
        | "victorian_period"
        | "world_war_ii"
        | "future"
        | "romance"
        | "fantasy"
        | "action"
        | "drama"
        | "harem"
        | "mecha"
        | "ecchi"
        | "supernatural"
        | "super_power"
        | "mystery"
        | "magical_girl"
        | "horror"
        | "henshin"
        | "parasite"
        | "science_fiction"
        | "thriller"
        | "vampire"
        | "virtual_reality"
        | "zombie"
        | "detective"
        | "blackmail"
        | "anthropomorphism"
        | "anime_influenced"
        | "angst"
        | "ghost"
        | "slice_of_life"
        | "adventure"
        | "school_life"
        | EKitsuAnimeCategories
      )[];
}

interface IKitsuError {
  errors: [
    {
      title: string;
      detail?: string;
      code?: string;
      status: string;
    }
  ];
}

export { IKitsuAnimeFind, IKitsuAnimeList, IKitsuError, IKitsuHandleError };
