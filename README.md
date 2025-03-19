# Fiori Fullscreen Plugin

This project is a simple Fiori extension that adds a button to toggle fullscreen mode in a Fiori application. It leverages the new Extension API provided by UI5 to seamlessly integrate this functionality.

![Build](https://github.com/mariokernich/fiori-fullscreen-plugin/actions/workflows/nodejs.yml/badge.svg)
![Eslint](https://github.com/mariokernich/fiori-fullscreen-plugin/actions/workflows/eslint.yml/badge.svg)
![TypeScript](https://github.com/mariokernich/fiori-fullscreen-plugin/actions/workflows/tsc.yml/badge.svg)

## Features

- Adds a button to the Fiori application toolbar.
- Allows users to enter and exit fullscreen mode with a single click.
- Built using the latest UI5 Extension API for easy integration and maintainability.

## Setup

1. Install the required dependencies:
   ```bash
   npm install
   ```
2. Start the project:
   ```bash
   npm run start
   ```

## Usage

1. Once the plugin is deployed, the fullscreen button will appear in the application toolbar.
2. Click the button to enter fullscreen mode.
3. Click the button again to exit fullscreen mode.

## Requirements

- SAP UI5 version greater than 1.120.0 which supporting the new Extension API: https://sapui5.hana.ondemand.com/sdk/#/api/sap.ushell.services.Extension
- A Fiori application where the plugin can be integrated.

## Customization

You can customize the button's appearance or behavior by modifying the plugin's code. Refer to the source files for details.

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the plugin.
