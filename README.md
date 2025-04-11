# Issue explanation of DaisyUI missed styles

## Prerequisites

- Bun: `1.2.9` (latest)
- Also tested with Node `20`.
- `daisyui`: `5.0.18`
- `tailwindcss`: `4.1.3`
- `@tailwindcss/vite`: `4.1.3`

## Preview links

- Correct styles with the Nuxt 3 single application: https://daisyui-issue-ui-playground.pages.dev
- Broken styles with the latest versions and Nuxt 3 layers architecture: https://daisyui-issue.pages.dev
- Fixed styles after downgrading packages such as `tailwindcss` and `@tailwindcss/vite` to the version `4.0.3`
  - Preview: https://preview.daisyui-issue.pages.dev
  - PR: https://github.com/serhii-chernenko/daisyui-issue/pull/1
 
## Steps to reproduce

### Clone repo and install packages

```
git clone git@github.com:serhii-chernenko/daisyui-issue.git
bun install
```

### Verify the installed versions related to `tailwind`

```bash
bun pm ls --all | grep tailwindcss
├── ...
├── @tailwindcss/vite@4.1.3
├── tailwindcss@4.1.3
```

### Run a single Nuxt 3 application

```
cd src/layers/ui
bun run dev
```

Open http://localhost:3000

Expected result (buttons do nothing, it's just UI):
![image](https://github.com/user-attachments/assets/a99b141b-90c1-4fd9-b22b-fb25f69008e5)

Deployed version is available here:
https://daisyui-issue-ui-playground.pages.dev

### Run the end application in Nuxt 3 Layers architecture

```
cd ../../../
bun run build:app # it's necessary to generate the `wrangler.json` file
bun run dev:app
```

Open http://localhost:3000

Expected result (DaisyUI styles completely broken but Tailwind's styles work as expected):
![image](https://github.com/user-attachments/assets/2a9deece-7691-45ab-a301-84ab83924674)

Deployed version is available here:
https://daisyui-issue.pages.dev

### Downgrade `tailwindcss` and `@tailwindcss/vite` to `4.0.3`

Add to the root `package.json` file the next content:
```json
"overrides": {
  "@tailwindcss/vite": "4.0.3",
  "tailwindcss": "4.0.3"
}
```

Or just switch to the branch:
```bash
git checkout fix/downgraded-tailwind-and-tailwind-vite-versions
```

PR is available here:
https://github.com/serhii-chernenko/daisyui-issue/pull/1

Reinstall packages:
```
bun install
```

Verify packages again:
```bash
bun pm ls --all | grep tailwindcss
├── ...
├── @tailwindcss/vite@4.0.3
├── tailwindcss@4.0.3
```

### Run the end application in Nuxt 3 Layers architecture again

```
bun run build:app # it's necessary to generate the `wrangler.json` file
bun run dev:app
```

Open http://localhost:3000

Expected result (DaisyUI styles work as expected):
![image](https://github.com/user-attachments/assets/48a25205-c0b0-42d9-9196-59f0882a16fb)

Deployed version is available here:
https://preview.daisyui-issue.pages.dev
