![Laravel Nova Trumbowyg Field](https://preview.dragon-code.pro/Laravel%20Nova/Trumbowyg%20Field.svg?preposition=for&pretty-title=0&github%5Brepository%5D=MrVACO%2FNovaTrumbowygField&mode=auto)

# Trumbowyg (WYSIWYG editor) with localization!

This component adds the ability to use WYSIWYG fields instead of standard Textarea or Trix fields.

Component Base:

- [Trumbowyg WYSIWYG editor](https://github.com/Alex-D/Trumbowyg) - the editor himself
- [Vue.js component for Trumbowyg WYSIWYG editor](https://github.com/ankurk91/vue-trumbowyg) - binding for use with Vue JS

## How to use it in your component

```php
use MrVaco\NovaTrumbowygField\NovaTrumbowygField;

public function fields(NovaRequest $request): array
{
    return [
        NovaTrumbowygField::make('Your field name', 'db column'),
    ];
}
```

## List of available localizations

> "en" - English - by default

|                  |                             |                       |                              |                             |
|------------------|-----------------------------|-----------------------|------------------------------|-----------------------------|
| ar - Arabic      | es - Spanish                | it - Italian          | pt - Portuguese              | th - Thai                   |
| az - Azerbaijani | es_ar - Spanish (Argentina) | ja - Japanese         | pt_br - Portuguese Brazilian | tr - Turkish                |
| bg - Bulgarian   | et - Estonian               | ko - Korean           | ro - Romanian                | ua - Ukrainian              |
| bn - Bangla      | fa - Persian                | lt - Lithuanian       | rs - Serbian (Cyrlic)        | vi - Vietnamese             |
| by - Belarusian  | fi - Finnish                | mn - Mongolian        | rs_latin - Serbian (Latin)   | zh_cn - Simplified Chinese  |
| ca - Catalan     | fr - French                 | my - Malaysian        | ru - Russian                 | zh_tw - Traditional Chinese |
| cs - Czech       | he - Hebrew                 | nb - Norwegian Bokmål | sk - Slovak                  |                             |
| da - Danish      | hr - Croatian               | nl - Dutch            | sl - Slovenian               |                             |
| de - German      | hu - Hungarian              | ph - Filipino         | sq - Albanian                |                             |
| el - Greek       | id - Indonesian             | pl - Polish           | sv - Swedish                 |                             |

I did not translate - all localization files were taken from [Trumbowyg repository](https://github.com/Alex-D/Trumbowyg/tree/develop/src/langs).

Each localization file indicates the author of the translation.

---

![Light theme](./screenshots/content_light.png)

![Dark theme](./screenshots/content_dark.png)