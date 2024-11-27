# Wopee.io: Playwright Visual Testing - template repository

## A) Run in the cloud using GitHub Actions

### Setup (already done if repo created via our Commander)

- Open: _Settings_ tab -> _Secrets & Variables_ -> _Actions_
  - Set `WOPEE_API_KEY` in **Secrets**
  - Set `WOPEE_PROJECT_UUID` in **Variables**

### Run

- **Run Playwright tests** workflow from [_Actions_](/../../actions) tab

## B) Run locally on your machine

### Setup

- Install Node.js
- Install Playwright or Docker
- Clone the repo
- Create a `.env` file using `.env.example` as a template

### Run locally using Playwright

- Run `npm run tests`

### Run locally using Docker

- Run `npm run tests-in-docker`
