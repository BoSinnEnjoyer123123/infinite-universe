# Бесконечная Вселенная

Одностраничная презентация учебного проекта по космологии для 10 класса. После вопроса о космическом двойнике идут глава об общей теории относительности, сцены о свете и повторениях, глава о многомировой интерпретации и раздел «Сбои в матрице». Сайт собран на HTML, CSS и JavaScript и опубликован на GitHub Pages.

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
- Обложка, иллюстрации и стили схем находятся в `assets/`. Для мозаики Андромеды и «Креста Эйнштейна» предусмотрены разные варианты для небольших и широких экранов. Новые файлы подключайте относительными путями вида `./assets/image.webp`.
- CSS задаёт движение рисунков. Скрипт `script.js` запускает сцену один раз, когда в кадре видно не менее 60% её площади в течение 400 мс. При уменьшенном движении и отключённом JavaScript виден статичный кадр.

После правок запустите локальную версию. Проверьте страницу на телефоне и широком экране, затем проверьте статичные кадры с системной настройкой уменьшения движения.

## Публикация и обновления

1. Разместите содержимое папки проекта в корне ветки `main` публичного репозитория GitHub. Включите пустой файл `.nojekyll`.
2. В репозитории откройте **Settings → Pages**, выберите **Deploy from a branch**, ветку **main** и папку **/ (root)**, затем сохраните.
3. После успешного развёртывания откройте адрес из раздела Pages и проверьте страницу и иллюстрации.
4. Чтобы обновить сайт, внесите правку в исходники и отправьте коммит в `main`. GitHub Pages опубликует новую версию из этой ветки.

[Инструкция GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Снимки телескопов

- Время пути солнечного света до Земли. [NASA о наблюдении прошлого Вселенной](https://science.nasa.gov/mission/hubble/science/science-behind-the-discoveries/time-travel-observing-cosmic-history/).
- Андромеда, мозаика «Хаббл». Авторы — NASA, ESA, Benjamin Williams (UWashington), Zhuo Chen (UWashington), L. Clifton Johnson (Northwestern). Обработка — Joseph DePasquale (STScI). Широкая версия показывает панораму, мобильная — её фрагмент. [Карточка NASA](https://science.nasa.gov/asset/hubble/hubble-m31-phatphast-mosaic/).

- «Крест Эйнштейна» G2237+0305. Авторы — NASA, ESA, STScI. Обе версии сохраняют полный кадр. Круги и ромб добавлены поверх снимка как пояснение. [Карточка NASA](https://science.nasa.gov/asset/hubble/the-gravitational-lens-g2237-0305/).

[Правила использования изображений NASA](https://www.nasa.gov/nasa-brand-center/images-and-media/).

## Сбои в матрице

Изображения кружек, колец и школьных кабинетов созданы инструментом ImageGen для иллюстрации сюжетов. Схема двух историй наблюдателя иллюстрирует мысленный эксперимент.

Крупный план колец находится в `assets/matrix-ring-details.webp`. Контуры поверх изображения по очереди отмечают следы на металле. Файл `assets/matrix-rings.webp` нужен для ранее загруженных копий страницы, которые ещё ссылаются на прежний кадр.

> Create a landscape 3:2 editorial photographic diptych for a Russian high-school presentation about comparing two similar rings. One silver band per panel, two total. Both have the same repeated diamond-shaped engraved motif and are made of the same brushed silver. Compose two equal side-by-side panels with a slim ink-navy seam at the center. Macro close-up of the front outer band and its curve, viewed at a slight oblique angle. The IMPORTANT comparison clues are on the illuminated metal near the center of each panel: on the LEFT ring, clearly show two short thin diagonal scratches crossing one of the diamonds in the foreground; on the RIGHT ring, show one clearly identifiable shallow round dent on the corresponding section of the band, with no matching double scratch there. Make these signs physically natural and large enough to find on a mobile-size image, roughly 6–10% of a panel across. Preserve clean space around both details for small CSS outline markers overlaid by the website. Warm silver specular texture and subdued cyan on the left, subdued lilac on the right, deep matte ink-navy shadows, elegant teaching illustration, sharply focused on the engraving. Show no text, arrows, numbers, symbols beyond the basic engraving, people, hands, gemstones, logos, watermarks, or extra jewelry.

- [Эксперимент Энн Клири и соавторов о дежавю](https://doi.org/10.1016/j.concog.2011.12.010).
- [Исследование космологической модели Андреа Де Симоне и соавторов](https://doi.org/10.1103/PhysRevD.82.063520).

## Обложка

Файл `assets/twin-galaxies.webp` создан с помощью ImageGen. Изображение иллюстрирует идею проекта.

> Create a landscape 3:2 photographic deep-space hero background for a Russian educational website about a cosmic double. Two separate remarkably similar spiral galaxies, mirrored roughly at (19%, 43%) and (81%, 57%), both clear and legible as face-on spirals, large enough to occupy about one third of the frame each. Their soft luminous blue-white cores and dusty pale periwinkle and muted violet spiral arms stand out against near-black ink-navy space. The entire central 35% of the frame must be relatively dark and quiet for large centered white title placed by the website, with only tiny stars there. A fine sparse starfield, restrained contrast, extremely realistic telescope photography with spiral structure, no giant planets or lens flares, no purple clouds obscuring the structure. No text, no letters, no typography, no borders or logos. Aim for a timeless astronomy editorial, with balance and clean negative space.

## Художественная визуализация Солнца и Андромеды

`assets/solar-journey.webp` и `assets/andromeda-art.webp` созданы с помощью ImageGen. В схеме путешествия света масштаб условный. Художественный кадр Андромеды сопровождается отдельной мозаикой «Хаббла».

### Солнце и Земля

> Create a landscape 3:2 astronomical illustration for a Russian high-school site explaining the journey of sunlight from the Sun to Earth. A single huge, intensely textured Sun on the left, disk centered approximately at (23%, 48%) and diameter about 36% of frame width, fully inside the frame including its glowing outer corona. Archaeologically realistic natural orange and golden plasma granulation and a thin detailed corona, striking restrained small prominences around the edge. A single smaller recognizable Earth on the right at approximately (82%, 49%), roughly 10% of frame width, predominantly dark night side, cool blue-white illuminated crescent facing the Sun on Earth's LEFT side and a subtle recognizable cloud pattern. Both bodies at nearly the same vertical center. Leave a wide quiet near-black ink-blue gap between the right limb of the Sun and the left limb of the Earth; the site will animate a small light signal across that gap. Keep the area near the bottom relatively subdued for HTML labels. A few tiny sparse stars in the background, polished editorial astronomy illustration with convincing photographic texture and balanced contrast. Deep navy palette, warm golden sun and cool blue Earth, elegant and educational. Show no rays joining the two, no text, no labels, no logos, no numbers, no arrows, no foreground satellites, no extra planets, no diagram or frame.

### Андромеда

> Create a landscape 3:2 cinematic astronomical illustration of the Andromeda galaxy, a luminous single inclined spiral seen from a distance, for a polished educational website. Place the brightest galactic nucleus at the center (50%, 52%). The elongated oval disk tilts diagonally from lower left to upper right by about 17 degrees, with the overall appearance of a realistic highly inclined grand-design spiral and most of its disk inside the frame. Its gold-white central bulge transitions into delicate rich violet-blue star fields and dark brown dust lanes crossing the near side of the disk; fine authentic cosmic structure, restrained bright clusters, deep navy almost-black background. Show a convincing sense of depth and a dramatic glow with soft light falloff, as an artistic approximation of a telescope view of M31, not a chart. Keep the nearest edges mostly dark, with galaxy filling the central 80% width. One galaxy only, no foreground planets, no text, borders, watermarks, giant diffuse pink clouds, artificial flares or neon effects.
