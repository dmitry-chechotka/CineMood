# CineMood - Documentation / Dokumentācija

## Problem Description

Nowadays, users find it difficult to choose a suitable movie according to their mood or situation. Most recommendation systems are superficial and do not take into account the user's emotions or desires at a specific moment.

## Project Goal

To create an AI-based movie recommendation web application in Latvian that analyzes the user's mood and provides personalized, empathetic movie suggestions using Google Gemini AI.

## Project Requirements

- Google Gemini API key (must be inserted in the `chat_script.js` file)
- A modern browser with JavaScript support
- No server-side required – everything works on the client side

## Interface Wireframe Diagram

- **index.html** – main page with project description, features, and CTA buttons
- **chat.html** – chat window where the user interacts with the AI and receives movie suggestions
- **style_index.css** – main page styling, animations, background
- **style_chat.css** – chat window styling, message layout
- **index_script.js** – animations, navigation, UI effects on the main page
- **chat_script.js** – chat functionality, Gemini API integration

## Description of Selected Development Tools

- **HTML5** – content structure
- **CSS3 (Advanced)** – modern, responsive design, animations
- **JavaScript (ES6+)** – UI logic, API requests, chat functionality
- **Google Gemini AI** – movie recommendation generation in Latvian
- **REST API** – communication with Gemini AI
- **marked.js & DOMPurify** – Markdown support and security in chat responses

## Project Testing Plan

- Manual testing in various browsers (Chrome, Firefox, Safari, Edge)
- Test different user input scenarios (positive, negative, neutral emotions)
- Check responsiveness on mobile devices
- Verify response length limit and language style compliance

## User Guide

1. Open `index.html` in a browser.
2. Click "Try Demo" or "Start Now".
3. In the chat window, describe your mood or preferences.
4. Receive personalized movie recommendations in Latvian.
5. If needed, refine your preferences or comment on suggestions to receive new ones.

**Note:** To enable chat functionality, replace `GEMINI_API_KEY` with your own Google Gemini API key in the `chat_script.js` file.

---

# CineMood - Documentation / Dokumentācija

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
