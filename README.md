# Playwright + Wopee.io

This repository is your project's Playwright test suite with Wopee.io visual testing already wired in.
Wopee.io created it when you created the project in [Commander](https://cmd.wopee.io), and filled in your project settings.
The sample test `tests/simple.spec.ts` opens your app's URL and takes one full-page screenshot that Wopee.io compares with an approved baseline.
Run it as it is first, then grow it into your own tests.

## Run from Commander

Nothing to set up. In Commander open **Runs** › **Start testing**. Commander runs this repository's tests in GitHub Actions with your project settings (the API key is the repository's `WOPEE_API_KEY` secret) and shows the results under Runs.

Want the tests on every push or pull request? Add your own trigger to `.github/workflows/tests.yml`.

## Run locally

Needs Node.js 20 or newer and git.

```shell
git clone <this repository>
cd <repository folder>
cp .env.example .env
```

Open `.env` and paste an API key after `WOPEE_API_KEY=`. Create one in Commander › More › Settings › API Keys (the key is shown only once).
The other values are already your project's. Keep `.env` out of git; it is in `.gitignore`.

```shell
npm ci
npm test
```

The first `npm test` also downloads Chromium for Playwright. The console prints one line per tracked step with its status and a link to it in Commander.

## Review in Commander

Open Commander › Runs and the suite "Simple Example <date time>".

- First run: the step `Check Home Page` has status **new**. Check the screenshot and **Approve** it; it becomes the baseline.
- Next runs: the step is **ok** when the page looks the same, or **unresolved** when it differs. Open it to see the difference, then Approve (new baseline) or Reject.

A visual difference is reported in Commander; it does not fail the Playwright test.

## Make it yours

- **Your app:** the sample opens `WOPEE_PROJECT_URL` (the App URL you entered in Commander). Change it in `.env` for local runs; for runs from Commander, change the App URL in Commander.
- **Add a check:** after any interaction, one line tracks another screenshot:

  ```ts
  await wopee.trackFullPage({ page, stepName: "Contact page" });
  ```

  Every `stepName` in a test gets its own baseline.
- **More tests:** add `*.spec.ts` files under `tests/`. `tests/simple.spec.ts` shows what every test needs: start a suite and a scenario, track, stop the scenario.
- **Examples:** `tests-examples/` shows `trackElement` and `trackImage`. It is not part of the default run; to try an example, copy the file into `tests/`.
- **Browser switches:** `WOPEE_BROWSER_ARGS` adds Chromium switches, whitespace-separated, to these tests and to the Wopee agent alike, e.g. `--auth-server-allowlist=*.corp.example.com` for an app behind Negotiate (Kerberos/NTLM) SSO. Put it in `.env` for local runs and in `.github/workflows/.env` (or a project variable in Commander) for runs from Commander.
- **Windows SSO (Kerberos):** if the app's sign-in page answers only `401 Negotiate` (it works on a domain-joined desktop and nowhere else), set `KERBEROS_PRINCIPAL` (`user@REALM`, the AD domain in upper case) and `KERBEROS_PASSWORD` as project variables in Commander — never in this repository. Runs from Commander then get a Kerberos ticket before the browser starts and add the allowlist switch themselves. Different accounts per test: `KERBEROS_ACCOUNTS` (e.g. `US001/TC002=alice; TC005=none; *=bob`) with `KERBEROS_PRINCIPAL_<ALIAS>` / `KERBEROS_PASSWORD_<ALIAS>`; `KERBEROS_SSO=off` turns it off for a suite. Agent runs pick the account per test; a run of this repository's tests signs in once, with the default account. The runner needs network access to the domain's KDCs (TCP 88); ask your Wopee contact to check it first.

## Add Wopee.io to an existing Playwright project

Follow [Playwright visual testing](https://docs.wopee.io/playwright-visual-testing/) in the Wopee.io docs.

## Troubleshooting

- **`Wopee is not configured — missing required environment variables`**: `.env` is missing or a value is empty. Run `cp .env.example .env` and paste the API key.
- **`ZodError ... Expected object, received null`** or an authorization error: the API key usually belongs to another Wopee.io instance (or another project). Create the key in the Commander you run against. `WOPEE_API_URL` is only for self-hosted instances; leave it out for cmd.wopee.io (the default is `https://api.wopee.io`).
- **`Executable doesn't exist`**: run `npx playwright install chromium`.
- **`put-your-project-uuid-here` in `.env`**: you cloned the public template, not your project's repository. Put in your project UUID from Commander › More › Settings › API Keys (`WOPEE_PROJECT_UUID`) and your app's URL (`WOPEE_PROJECT_URL`).

## Maintainers

Note: the runtime image bakes this repo's `main` HEAD at every runtime build and resolves the `@wopee-io/*` ranges then, so a change reaches runners only after a runtime build. `@playwright/test` must match the runtime's `PLAYWRIGHT_VERSION`, or the runtime build fails. `main` is mirrored into tenant orgs by the infra mirror's sync. See the [release flow](https://github.com/autonomous-testing/infra/blob/main/docs/release-flow.md).
