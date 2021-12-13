# Material Color Tool
This desktop application allows you to easily select a primary / secondary color scheme from the Material Design color palette.
It also allows you to preview selected colors on a test screen.
The application was tested under Windows and Linux, and although it has not been tested on Mac yet, it may also work correctly.

## Development
### Execution
To run the application in development mode, use the following command:
```sh
yarn dev
```

## Production
### Build (executable and its dependencies)
```
yarn build:fast
```

### Build (with NSIS installer for Windows)
```
yarn build
```

If the project builds successfully, you will find the corresponding executable in the *dist* directory.

