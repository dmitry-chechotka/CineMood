# CineMood - dokumentācija

## Problēmas apraksts

Mūsdienās lietotājiem ir grūti izvēlēties piemērotu filmu atbilstoši savam noskaņojumam vai situācijai. Lielākā daļa ieteikumu sistēmu ir virspusējas un neņem vērā lietotāja emocijas vai vēlmes konkrētajā brīdī.

## Projekta mērķis

Izveidot AI balstītu filmu ieteikumu web aplikāciju latviešu valodā, kas analizē lietotāja noskaņojumu un sniedz personalizētus, empātiskus filmu ieteikumus, izmantojot Google Gemini AI.

## Projekta prasības

- Google Gemini API atslēga (jāaizvieto `chat_script.js` failā)
- Mūsdienīgs pārlūks ar JavaScript atbalstu
- Nav nepieciešama servera puse – viss darbojas klienta pusē

## Saskarnes karkasa diagramma

- **index.html** – galvenā lapa ar projekta aprakstu, funkcijām un CTA pogām
- **chat.html** – čata logs, kur lietotājs sarunājas ar AI un saņem filmu ieteikumus
- **style_index.css** – galvenās lapas stils, animācijas, fons
- **style_chat.css** – čata loga stils, ziņojumu izkārtojums
- **index_script.js** – animācijas, navigācija, UI efekti galvenajā lapā
- **chat_script.js** – čata funkcionalitāte, Gemini API integrācija

## Izvēlēto izstrādes rīku apraksts

- **HTML5** – satura struktūra
- **CSS3 (Advanced)** – moderns, responsīvs dizains, animācijas
- **JavaScript (ES6+)** – UI loģika, API pieprasījumi, čata funkcionalitāte
- **Google Gemini AI** – filmu ieteikumu ģenerēšana latviešu valodā
- **REST API** – komunikācija ar Gemini AI
- **marked.js & DOMPurify** – Markdown atbalsts un drošība čata atbildēs

## Projekta testēšanas plāns

- Manuāla testēšana dažādos pārlūkos (Chrome, Firefox, Safari, Edge)
- Testēt dažādus lietotāja ievades scenārijus (pozitīvas, negatīvas, neitrālas emocijas)
- Pārbaudīt responsivitāti uz mobilajām ierīcēm
- Pārbaudīt, vai tiek ievērots atbildes garuma ierobežojums un valodas stils

## Lietotāja celvedis

1. Atveriet `index.html` pārlūkā.
2. Nospiediet "Izmēģināt Demo" vai "Sākt Tagad".
3. Čata logā aprakstiet savu noskaņojumu vai vēlmes.
4. Saņemiet personalizētus filmu ieteikumus latviešu valodā.
5. Ja nepieciešams, precizējiet savas vēlmes vai komentējiet ieteikumus, lai saņemtu jaunus.

**Piezīme:** Lai čats darbotos, jāaizvieto `GEMINI_API_KEY` ar savu Google Gemini API atslēgu failā `chat_script.js`.
