# Лаб 8 — Зургийн цомог

## Файлын бүтэц
- `bootstrap.html` — Bootstrap хувилбар
- `tailwind.html` — Tailwind хувилбар
- `css/bootstrap-custom.css` — Bootstrap-ийн өөрийн өнгө, нэмэлт загвар
- `src/input.css` — Tailwind эх CSS, `@theme` brand өнгө
- `css/tailwind.css` — Tailwind build output
- `js/gallery.js` — Dark mode, flip card, form validation

## Чиний Лаб 6-аас хуулж оруулах зүйл
Энэ хавтасны дотор өөрийн хуучин `img` болон `video` хавтсыг хуул:
- `img/photo1.jpg` ... `img/photo6.jpg`
- `video/clip.mp4` эсвэл `video/clip.webm`
- `video/clip.mn.vtt` (байгаа бол)

## Ажиллуулах
1. VS Code дээр энэ хавтсыг нээ.
2. `bootstrap.html`-ийг Live Server-ээр нээж Bootstrap хувилбарыг шалга.
3. Tailwind build хийхийн тулд Terminal нээгээд:
   `npm install`
   `npm run build:tailwind`
4. Дараа нь `tailwind.html`-ийг Live Server-ээр нээ.
5. Кодоо өөрчлөх үед автоматаар build хийлгэх бол:
   `npm run watch:tailwind`

## Тэмдэглэл
- Bootstrap хувилбар CDN ашиглана.
- Tailwind хувилбар Tailwind CSS CLI v4 ашиглана.
- Хоёр хувилбар ижил зураг, видео файлын зам ашиглана.
- Lighthouse оноо, файлын хэмжээ, class-ийн тоог бодитоор хэмжиж тайланд оруулна.
