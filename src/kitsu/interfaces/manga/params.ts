import { EKitsuMangaCategories, EKitsuSeason } from "../../enums";

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
 * @description The parameters for the MangaKitsu#find method.
 * @since 1.3.0
 */
interface IKitsuMangaFind {
  /**
   * @property The query to find an Manga.
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
   * @property The season of the Manga
   */
  season?: "winter" | "spring" | "summer" | "fall" | EKitsuSeason;
  /**
   * @property The year of the Manga.
   */
  year?: number | `${number}..` | `${number}..${number}`;
  /**
   * @property The average rating.
   */
  averageRating?: `${number}..` | `${number}..${number}`;
  categories?:
    | (
        | "violence"
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
        | "Manga_influenced"
        | "angst"
        | "ghost"
        | "slice_of_life"
        | "adventure"
        | "school_life"
        | EKitsuMangaCategories
      )
    | (
        | "comedy"
        | "violence"
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
        | "Manga_influenced"
        | "angst"
        | "ghost"
        | "slice_of_life"
        | "adventure"
        | "school_life"
        | EKitsuMangaCategories
      )[];
}

/**
 * @interface
 * @description The parameters for the MangaKitsu#list method.
 * @since 1.3.0
 */
interface IKitsuMangaList {
  offset?: number;
  perPage?: number;
  season?: "winter" | "spring" | "summer" | "fall" | EKitsuSeason;
  year?:
    | (`${number}` | `${number}..` | `${number}..${number}`)
    | (`${number}` | `${number}..` | `${number}..${number}`)[];
  averageRating?: `${number}..` | `${number}..${number}`;
  /**
   * @property All of the available categories from Kitsu.app
   * @example
   * ```js
   * // Basic usage (string only)
   * Manga.list({ categories: "comedy"}).then(r => console.log(r.data[0].id));
   *
   * // Using string[]
   * Manga.list({ categories: ["comedy", "anti_war"]}).then(r => console.log(r.data[0].id));
   *
   * // Using Enums
   * Manga.list({ categories: EKitsuMangaCategories.Action }).then(r => console.log(r.data[0].id));
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
        | "Manga_influenced"
        | "angst"
        | "ghost"
        | "slice_of_life"
        | "adventure"
        | "school_life"
        | EKitsuMangaCategories
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
        | "Manga_influenced"
        | "angst"
        | "ghost"
        | "slice_of_life"
        | "adventure"
        | "school_life"
        | EKitsuMangaCategories
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

export { IKitsuError, IKitsuHandleError, IKitsuMangaFind, IKitsuMangaList };
