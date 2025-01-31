<div align="center">
<h1>Change Logs</h1>
In this file, you can see everything got changed.
</div>

# 1.3.0

1. Full support for **CJS**/**ESM** and **TS**.

2. Created new following methods in:

- AnimeKitsu: findById(id), episode(id)
- MangaKitsu: findById(id), chapter(id)

3. Created new interfaces for individuals methods parameters and **Promise** response! (Some properties may not have any description, i'll add them later!).
4. There is a new way to handle errors, from now on, methods will have a new parameter named _handleError_, by using this parameter as a asynchronous function, you can now get errors with the corresponding type! Here is an example:

```js
anime
  .find({ query: "Oshi no ko" }, async ({ apiError, moduleError }, status) => {
    if (apiError) console.error(await apiError);
    if (moduleError) console.error(await moduleError);
  })
  .then((r) => console.log(r));
```

It's not required but useful if you want to handle errors by yourself, if you're not using it at all, it will console unhandled errors.

5. For TS users, i made some enums table for seasons, categories, AgeRating (anime only), subtypes

Example:

```ts
import aniki from "aniki";
import { EKitsuSeason } from "aniki/kitsu/enums";

const anime = new aniki.AnimeKitsu();

anime
  .find({ query: "Oshi no ko", season: EKitsuSeason.Fall }) // EKitsuSeason.Fall = "fall";
  .then((r) => console.log(r.data));
// ...
```

<b>Available enums</b>

- EKitsuAnimeAgeRating,
- EKitsuAnimeCategories,
- EKitsuAnimeStreamers,
- EKitsuAnimeSubTypes,
- EKitsuMangaCategories,
- EKitsuMangaSubTypes,
- EKitsuSeason,
