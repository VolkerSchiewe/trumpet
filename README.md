# trumpet

Brüderischer Bläsertag 2021 Berlin

## Deployments
- [Production](https://blaesertag2021.de)
- [Development](https://develop.blaesertag2021.de) (Current `develop` branch)

## Development
- global dependencies: `node` & `yarn`
- Install dependencies `yarn install`
- Start dev-server: `yarn start` (without serverless functions)
- Run unit tests: `yarn test`
- Run integration tests: `yarn cypress open`

- Run local production like environment: `yarn serve` (also serverless functions) 

#### Serverless functions
- `cd functions`
- Install dependencies `yarn install`
- Run tests: `yarn test`