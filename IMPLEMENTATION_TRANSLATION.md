# Implementation Plan: Website Translation (FR & NL)

## Goal Description
The objective is to translate the remaining pages of the project (`About.tsx`, `Contact.tsx`, `AppointmentSetting.tsx`, `CustomerEngagement.tsx`, and `WebsiteOptimization.tsx`) into French and Dutch. 

As per the strict requirements:
1. **No Layout Changes**: All HTML tags, CSS classes, and structural code will remain **100% intact**. 
2. **Dynamic Language Buttons**: To ensure the translations work seamlessly with the existing language selector buttons, the visible hardcoded English text in the `.tsx` files must be wrapped with the existing `t('...')` translation function provided by `react-i18next`. This is the standard minimal change required to connect the text to the buttons.
3. **Accurate Translations**: The original English context will be used to generate the correct Dutch and French translations in the respective JSON files.

## Proposed Changes

### Metadata/Translations
#### [MODIFY] `src/i18n/translations/en.json` (file:///c:/Users/armim/OneDrive/Bureaublad/Site2/src/i18n/translations/en.json)
- Add new keys for the currently hardcoded text found in the remaining pages. Any existing keys that no longer match the current UI will be updated.

#### [MODIFY] `src/i18n/translations/nl.json` (file:///c:/Users/armim/OneDrive/Bureaublad/Site2/src/i18n/translations/nl.json)
- Provide the complete Dutch (`nl`) translations for all the newly added keys, strictly matching the English meaning without adding/removing context.

#### [MODIFY] `src/i18n/translations/fr.json` (file:///c:/Users/armim/OneDrive/Bureaublad/Site2/src/i18n/translations/fr.json)
- Provide the complete French (`fr`) translations for all the newly added keys, strictly matching the English meaning.

### Page Components
#### [MODIFY] `src/pages/About.tsx` (file:///c:/Users/armim/OneDrive/Bureaublad/Site2/src/pages/About.tsx)
- Replace static English text nodes (e.g., "Driven by Innovation", "What We Do", etc.) with `{t('about.someKey')}` mappings. No structural elements will be modified.

#### [MODIFY] `src/pages/Contact.tsx` (file:///c:/Users/armim/OneDrive/Bureaublad/Site2/src/pages/Contact.tsx)
- Replace static English text nodes (e.g., "Start Your Journey", form labels) with `{t('contact.someKey')}` mappings. 

#### [MODIFY] `src/pages/AppointmentSetting.tsx` (file:///c:/Users/armim/OneDrive/Bureaublad/Site2/src/pages/AppointmentSetting.tsx)
- Map hardcoded bullet points and statistics to the JSON keys using `t()`.

#### [MODIFY] `src/pages/CustomerEngagement.tsx` (file:///c:/Users/armim/OneDrive/Bureaublad/Site2/src/pages/CustomerEngagement.tsx)
- Map hardcoded feature titles and benefits to the JSON keys using `t()`.

#### [MODIFY] `src/pages/WebsiteOptimization.tsx` (file:///c:/Users/armim/OneDrive/Bureaublad/Site2/src/pages/WebsiteOptimization.tsx)
- Map hardcoded feature lists, metrics, and text arrays to JSON keys using `t()`.

## Verification Plan

### Automated Tests
- Run `npm run dev` to start the local development server.
- No compilation errors should occur.

### Manual / Browser Verification
- Use the AI browser subagent to navigate to `http://localhost:5173/about`, click the language switcher to Dutch, then French, and verify that the page text successfully updates without breaking the layout.
- Repeat the visual test for the Contact and Services pages to confirm translation coverage is complete.

## User Review Required
> [!IMPORTANT]
> To comply with your rule regarding the **language buttons remaining functional**, the hardcoded English text in the React components **must** be replaced with `{t('key')}` so it can switch dynamically to Dutch/French. This is a standard procedure and does *not* affect the actual HTML elements or layout code. 
> Please confirm if this approach aligns with your "Geen code aanpassen – Vertaal alleen de zichtbare tekst" instruction!
