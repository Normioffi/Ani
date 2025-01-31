// interfaces

/**
 * @interface
 * @description This interface is the JSON response of the MangaKitsu#find and MangaKitsu#list Promise.
 */
interface IKitsuManga {
  data: Array<{
    id: `${number}`;
    type: string;
    links: {
      self: string;
    };
    attributes: {
      createdAt: string;
      updatedAt: string;
      slug: string;
      synopsis: string;
      description: string;
      coverImageTopOffset: number;
      titles: {
        en: string;
        en_jp: string;
        ja_jp: string;
        ko_kr: string;
        ru_ru: string;
        en_us: string;
      };
      canonicalTitle: string;
      abbreviatedTitles: string[];
      averageRating: string | null;
      ratingFrequencies: {
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        "14": string;
        "15": string;
        "16": string;
        "17": string;
        "18": string;
        "19": string;
        "20": string;
      };
      userCount: number;
      favoritesCount: number;
      startDate: string;
      endDate: string;
      nextRelease: string;
      popularityRank: number;
      ratingRank: number;
      ageRating: "G" | "PG" | "R" | "R18";
      ageRatingGuide: string | null;
      subtype: "ONA" | "OVA" | "TV" | "movie" | "music" | "special";
      status: "current" | "finished" | "tba" | "unreleased" | "upcoming";
      tba: string | null;
      posterImage: {
        tiny: string;
        large: string;
        small: string;
        medium: string;
        original: string;
        meta: {
          dimensions: {
            tiny: {
              width: number;
              height: number;
            };
            large: {
              width: number;
              height: number;
            };
            small: {
              width: number;
              height: number;
            };
            medium: {
              width: number;
              height: number;
            };
          };
        };
      };
      coverImage: {
        tiny: string;
        large: string;
        small: string;
        original: string;
        meta: {
          dimensions: {
            tiny: {
              width: number;
              height: number;
            };
            large: {
              width: number;
              height: number;
            };
            small: {
              width: number;
              height: number;
            };
          };
        };
      };
      chapterCount: number;
      volumeCount: number;
      serialization: string;
    };
    relationships: {
      categories: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      castings: {
        links: {
          self: string;
          related: string;
        };
      };
      mappings: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      mediaRelationships: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      characters: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      staff: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      productions: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      quotes: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      chapters: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
    };
  }>;
}
/**
 * @interface
 * @description This interface is the JSON response of the MangaKitsu#findById Promise (single object).
 */

interface IKitsuMangaSingle {
  data: {
    id: string;
    type: string;
    links: {
      self: string;
    };
    attributes: {
      createdAt: string;
      updatedAt: string;
      slug: string;
      synopsis: string;
      description: string;
      coverImageTopOffset: number;
      titles: {
        en: string;
        en_jp: string;
        ja_jp: string;
        ko_kr: string;
        ru_ru: string;
        en_us: string;
      };
      canonicalTitle: string;
      abbreviatedTitles: string[];
      averageRating: string | null;
      ratingFrequencies: {
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        "14": string;
        "15": string;
        "16": string;
        "17": string;
        "18": string;
        "19": string;
        "20": string;
      };
      userCount: number;
      favoritesCount: number;
      startDate: string;
      endDate: string;
      nextRelease: string;
      popularityRank: number;
      ratingRank: number;
      ageRating: "G" | "PG" | "R" | "R18";
      ageRatingGuide: string | null;
      subtype:
        | "manga"
        | "manhwa"
        | "manhua"
        | "novel"
        | "oneshot"
        | "doujin"
        | "oel";
      status: "current" | "finished" | "tba" | "unreleased" | "upcoming";
      tba: string | null;
      posterImage: {
        tiny: string;
        large: string;
        small: string;
        medium: string;
        original: string;
        meta: {
          dimensions: {
            tiny: {
              width: number;
              height: number;
            };
            large: {
              width: number;
              height: number;
            };
            small: {
              width: number;
              height: number;
            };
            medium: {
              width: number;
              height: number;
            };
          };
        };
      };
      coverImage: {
        tiny: string;
        large: string;
        small: string;
        original: string;
        meta: {
          dimensions: {
            tiny: {
              width: number;
              height: number;
            };
            large: {
              width: number;
              height: number;
            };
            small: {
              width: number;
              height: number;
            };
          };
        };
      };
      chapterCount: number;
      volumeCount: number;
      serialization: string;
    };
    relationships: {
      categories: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      castings: {
        links: {
          self: string;
          related: string;
        };
      };
      mappings: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      mediaRelationships: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      characters: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      staff: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      productions: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      quotes: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      chapters: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
    };
  };
}
/**
 * @interface
 * @description The JSON response of the request from MangaKitsu#chapter
 * @since 1.3.0
 */
interface IKitsuChapter {
  data: {
    id: string;
    type: string;
    links: {
      self: string;
    };
    attributes: {
      createdAt: string;
      updatedAt: string;
      synopsis: string;
      description: string;
      titles: {
        en_jp: string;
        en_us: string;
        ja_jp: string;
      };
      canonicalTitle: string;
      seasonNumber: number;
      number: number;
      relativeNumber: number;
      airdate: string;
      length: number;
      thumbnail: {
        original: string;
        meta: {
          dimensions: object;
        };
      };
    };
    relationships: {
      media: {
        links: {
          self: string;
          related: string;
        };
      };
      videos: {
        links: {
          self: string;
          related: string;
        };
      };
    };
  };
}

export { IKitsuChapter, IKitsuManga, IKitsuMangaSingle };
