# Objavuj Slovensko

Webový portál o Slovensku - školský projekt pre predmet na PEVŠ.

## Popis

Stránka prezentuje regióny, atrakcie a galériu fotografií zo Slovenska. Obsahuje kontaktný formulár s validáciou a zobrazenie dát cez AJAX.

## Ako spustiť

1. Stiahnite repozitár: `git clone <URL>`
2. Otvorte `index.html` v prehliadači

Pre AJAX (stránka Dáta) treba HTTP server:
- VS Code - nainštalujte rozšírenie **Live Server**, pravý klik na index.html -> Open with Live Server
- alebo cez Python: `python -m http.server 8000` a potom otvorte `localhost:8000`

## Štruktúra

```
Web/
  index.html        - domovská stránka
  regiony.html      - regióny Slovenska
  atrakcie.html     - atrakcie
  galeria.html      - galéria s lightboxom
  kontakt.html      - kontaktný formulár + validácia
  data.html         - AJAX načítanie dát z JSON
  onas.html         - o projekte
  style.css         - CSS štýly
  data.json         - JSON dáta
  navrh.pdf         - grafický návrh
  img/              - obrázky
```

## Technológie

- HTML5
- CSS3
- JavaScript
- JSON + AJAX (XMLHttpRequest)
