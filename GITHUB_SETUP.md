# GitHub Pages Setup

## 1. Create the public showcase repo

Recommended repo name:

```text
OMR-WorkoutStudio
```

Use this repo for the product README and download page only.

## 2. Upload this package

Commit these files to the repo:

```text
README.md
docs/
GITHUB_SETUP.md
RELEASE_CHECKLIST.md
SHOWCASE_REPO_CONTENTS.txt
release-assets/
```

## 3. Enable GitHub Pages

In GitHub:

1. Open the repo.
2. Go to **Settings**.
3. Go to **Pages**.
4. Set source to **Deploy from a branch**.
5. Choose branch **main**.
6. Choose folder **/docs**.
7. Save.

Your page should become available at:

```text
https://omr226.github.io/OMR-WorkoutStudio/
```

## 4. Upload the downloadable app

Build your desktop app separately. Then create a GitHub Release and upload the built ZIP as:

```text
OMR_WorkoutStudio_Windows.zip
```

The public website already points to the latest-release asset URL.

## 5. Keep source private

Do not place the raw app source in this public showcase repo. Use a private repo or local build folder for source code.
