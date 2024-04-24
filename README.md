# Playwright test template repo

## A) Run in the cloud using GitHub Actions

### Setup
- Open: _Settings_ tab -> _Secrets & Variables_ -> _Actions_
  - Set `WOPEE_API_KEY` in __Secrets__
  - Set `WOPEE_PROJECT_UUID` in __Variables__

### Run
- __Run Playwright tests__ workflow from _Actions_ tab

## B) Run locally on your machine

### Setup
- Install Node.js
- Install Playwright or Docker
- Clone the repo
- Create a `.env` file using `.env.example` as a template
- Create Personal Access Token (classic) with scope `read:packages` and set it as `GITHUB_TOKEN` environment variable


### Run locally using Playwright
- Run `npm run tests`

### Run locally using Docker
- Run `npm run tests-in-docker`