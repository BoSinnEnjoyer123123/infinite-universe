# Бесконечная Вселенная

Одностраничная презентация учебного проекта по космологии для 10 класса. В девяти сценах от вопроса о космическом двойнике переходим к наблюдениям, примерам с узорами и монетой и к выводу об условиях гипотезы. Сайт собран на HTML, CSS и JavaScript и опубликован на GitHub Pages.

[Открыть презентацию](https://bosinnenjoyer123123.github.io/infinite-universe/).

## Локальный запуск

В папке проекта выполните команду, используя Python 3.

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Откройте [локальную страницу](http://127.0.0.1:8000/). Для остановки сервера нажмите `Ctrl+C`.

## Как править текст и иллюстрации

- Заголовки, абзацы, подписи и источники находятся в `index.html`.
- Цвета, отступы и правила адаптации находятся в `styles.css`.
- Обложка, снимки и стили схем находятся в `assets/`. Для снимков Солнца и Андромеды предусмотрены разные версии для небольших и широких экранов. Новые файлы подключайте относительными путями вида `./assets/image.webp`.
- CSS задаёт движение рисунков. Скрипт `script.js` запускает каждую сцену один раз при её появлении на экране.

После правок запустите локальную версию. Проверьте страницу на телефоне и широком экране, затем проверьте статичные кадры с системной настройкой уменьшения движения.

## Публикация и обновления

1. Разместите содержимое папки проекта в корне ветки `main` публичного репозитория GitHub. Включите пустой файл `.nojekyll`.
2. В репозитории откройте **Settings → Pages**, выберите **Deploy from a branch**, ветку **main** и папку **/ (root)**, затем сохраните.
3. После успешного развёртывания откройте адрес из раздела Pages и проверьте страницу и иллюстрации.
4. Чтобы обновить сайт, внесите правку в исходники и отправьте коммит в `main`. GitHub Pages опубликует новую версию из этой ветки.

[Инструкция GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Снимки телескопов

- Солнце, снимок PIA26681. Авторы — NASA/GSFC/Solar Dynamics Observatory. [Карточка NASA](https://science.nasa.gov/photojournal/image-of-sun-from-nasas-solar-dynamics-observatory/).
- Андромеда, мозаика «Хаббл». Авторы — NASA, ESA, Benjamin Williams (UWashington), Zhuo Chen (UWashington), L. Clifton Johnson (Northwestern). Обработка — Joseph DePasquale (STScI). Широкая версия показывает панораму, мобильная — её фрагмент. [Карточка NASA](https://science.nasa.gov/asset/hubble/hubble-m31-phatphast-mosaic/).

[Правила использования изображений NASA](https://www.nasa.gov/nasa-brand-center/images-and-media/).

## Обложка

Файл `assets/twin-galaxies.webp` создан с помощью ImageGen. Изображение иллюстрирует идею проекта.

> Create a landscape 3:2 photographic deep-space hero background for a Russian educational website about a cosmic double. Two separate remarkably similar spiral galaxies, mirrored roughly at (19%, 43%) and (81%, 57%), both clear and legible as face-on spirals, large enough to occupy about one third of the frame each. Their soft luminous blue-white cores and dusty pale periwinkle and muted violet spiral arms stand out against near-black ink-navy space. The entire central 35% of the frame must be relatively dark and quiet for large centered white title placed by the website, with only tiny stars there. A fine sparse starfield, restrained contrast, extremely realistic telescope photography with spiral structure, no giant planets or lens flares, no purple clouds obscuring the structure. No text, no letters, no typography, no borders or logos. Aim for a timeless astronomy editorial, with balance and clean negative space.
