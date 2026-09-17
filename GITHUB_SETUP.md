# OMR WorkoutStudio GitHub Pages + Releases Setup

This public repository hosts the OMR WorkoutStudio marketing/download website and public release documentation. Keep the private application source in a separate private repository or local build workspace.

## Editions

### OMR WorkoutStudio Lite 1.0

Focused video-generation edition.

- Tag: `lite-v1.0`
- Release name: `OMR WorkoutStudio Lite 1.0`
- Asset: `OMR_WorkoutStudio_Lite_1.0_Windows.zip`

### OMR WorkoutStudio Pro 2.0

Complete Video + Live Workout edition.

- Tag: `pro-v2.0`
- Release name: `OMR WorkoutStudio Pro 2.0`
- Asset: `OMR_WorkoutStudio_Pro_2.0_Windows.zip`

## GitHub Pages

Publish from:

```text
Branch: main
Folder: /docs
```

Public URL:

```text
https://omr226.github.io/OMR-WorkoutStudio/
```

## Publishing Windows builds

Do **not** commit the Windows ZIP files directly to this repository. Publish them as GitHub Release assets using the tags and exact asset names above. `docs/config.js` uses permanent release-asset URLs for the two download buttons.

## Repository contents

Commit only public website/documentation files such as:

```text
README.md
docs/
GITHUB_SETUP.md
RELEASE_CHECKLIST.md
SHOWCASE_REPO_CONTENTS.txt
release-assets/
```

Do not commit private Python source, build secrets, personal workout data, user recordings, API keys, or unlicensed media.
