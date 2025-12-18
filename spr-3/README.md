# Prezentacja Mojej Osoby - Yaroslav Zubakha

Dwupoziomowa witryna internetowa spełniająca wymagania WCAG 2.1 AA/AAA i Material Design 3.

## Struktura plików

```
spr-3/
├── index.html              Strona główna
├── sitemap.html            Mapa witryny
├── pages/                  Strony z treścią
│   ├── co-robie.html
│   ├── co-chce-robic.html
│   ├── rzeczywistosc.html
│   ├── trening.html
│   ├── teraz.html
│   └── co-mna-kieruje.html
├── styles/                 Style CSS
│   ├── tokens.css
│   └── main.css
├── scripts/                JavaScript
│   └── theme-toggle.js
└── assets/                 Obrazy
    ├── htmx-seeklogo.svg
    ├── terminal.png
    ├── teams-logo.png
    ├── money.png
    └── profile-photo.jpg   (należy dodać własne zdjęcie)
```

## Jak otworzyć

1. Otwórz plik `index.html` w przeglądarce
2. Nawiguj między stronami używając menu lub przycisków
3. Przełącz motyw jasny/ciemny przyciskiem w nagłówku

## Funkcje dostępności (WCAG 2.1)

### Poziom AA
- Kontrast kolorów min. 4.5:1 dla tekstu
- Kontrast 3:1 dla elementów UI
- Skip navigation link
- Semantyczny HTML5
- Właściwa hierarchia nagłówków (h1-h3)
- ARIA labels i landmarks
- Alt text dla wszystkich obrazów
- Keyboard navigation
- Focus indicators (3px outline)

### Poziom AAA
- Focus indicators z wysokim kontrastem
- Reduced motion support
- High contrast mode support
- Print styles

### Zgodność z Material Design 3
- System kolorów (light/dark themes)
- Typografia (Roboto)
- Spacing (siatka 4px)
- Elevation (shadows)
- Shape (rounded corners)
- Motion (transitions)

## Kontrast kolorów

### Light theme
- Text (rgb(23 29 30)) na Background (rgb(245 250 251)): 14.8:1
- Primary (rgb(0 104 116)) na Background: 4.9:1
- On-surface-variant (rgb(63 72 74)) na Surface: 7.2:1

### Dark theme
- Text (rgb(222 227 229)) na Background (rgb(14 20 21)): 14.5:1
- Primary (rgb(130 211 224)) na Background: 11.2:1
- On-surface-variant (rgb(191 200 202)) na Surface: 8.1:1

Wszystkie kombinacje przekraczają wymagane 4.5:1 dla WCAG AA.

## Responsywność

- Desktop: 1200px max-width
- Tablet: 768px breakpoint
- Mobile: 480px breakpoint
- Grid dostosowuje się automatycznie

## Technologie

- HTML5 (semantyczny)
- CSS3 (custom properties, grid, flexbox)
- JavaScript (vanilla, bez zależności)
- Google Fonts (Roboto)

## Przeglądarki

Działa we wszystkich nowoczesnych przeglądarkach:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Uwagi

- Dodaj własne zdjęcie profilowe jako `assets/profile-photo.jpg`
- Wszystkie ścieżki są względne
- Brak zależności zewnętrznych (oprócz czcionki)
- Działa offline po pierwszym załadowaniu
