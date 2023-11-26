![Laravel Nova Trumbowyg Field](https://preview.dragon-code.pro/Laravel%20Nova/Trumbowyg%20Field.svg?preposition=for&pretty-title=0&github%5Brepository%5D=MrVACO%2FNovaTrumbowygField&mode=auto)

# Trumbowyg (WYSIWYG editor) с локализацией!

Данный компонент добавляет возможность использования WYSIWYG поля вместо стандартного Textarea или Trix полей.

Основа компонента:

- [Trumbowyg WYSIWYG editor](https://github.com/Alex-D/Trumbowyg) - непосредственно сам редактор
- [Vue.js component for Trumbowyg WYSIWYG editor](https://github.com/ankurk91/vue-trumbowyg) - обвязка для использования с Vue JS

Для переключения локализаций можете использовать [Language Switch](https://github.com/badinansoft/nova-language-switch)

## Как использовать в своем компоненте

Язык определяется автоматически - `app()->getLocale()`

```php
use MrVaco\NovaTrumbowygField\NovaTrumbowygField;

public function fields(NovaRequest $request): array
{
    return [
        NovaTrumbowygField::make('Your field name', 'db column'),
    ];
}
```

## Список доступных локализаций

> "en" - English - по-умолчанию

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

Я не занимался переводом - все файлы локализации взяты с [репозитория Trumbowyg](https://github.com/Alex-D/Trumbowyg/tree/develop/src/langs).

В каждом файле локализации указан автор перевода.

---

![Light theme](./screenshots/content_light.png)

![Dark theme](./screenshots/content_dark.png)