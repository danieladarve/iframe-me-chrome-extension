# Gemini™ Side Panel Chrome Extension

Gemini™ Side Panel is a simple Chrome extension that allows you to open [Gemini™](https://gemini.google.com/) in a side panel for quick and easy access while browsing.

## Features
- Opens Gemini™ in a Chrome side panel
- Seamless integration with Chrome UI
- Custom header rules to enable embedding Gemini™ and related Google services

## Usage
- Click the Gemini™ icon in the Chrome toolbar to open Gemini™ in the side panel.
- Use Gemini™ as you would in a normal tab, but always accessible from the side.

## Permissions
This extension requests the following permissions:
- `sidePanel`: To display content in the Chrome side panel.
- `declarativeNetRequest`: To modify HTTP headers for embedding Gemini™ and related Google services.

## Development
- Main logic is in `js/worker.js` and `js/worker/`.
- Header modification rules are in the `rules/` directory.
- The side panel UI is defined in `sidepanel.html`.

## Privacy
See [PRIVACY_POLICY.md](./PRIVACY_POLICY.md) for details.

## Author
Daniel Gonzalez Adarve

