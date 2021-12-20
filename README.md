# Material Color Tool
This desktop application allows you to select a primary / secondary color scheme from the Material Design color palette with a little preview screen to show the final results.
The application was tested under Windows and Linux, and although it has not been tested on Mac yet, it may also work.

## Development
### Execution
To run the application in development mode, use the following command:
```sh
yarn dev
```

## Production
### Build (executable and its dependencies)
```
yarn build
```

### Build (with NSIS installer for Windows)
```
yarn build:installer
```

If the project builds successfully, you will find the corresponding executable in the *dist* directory.

