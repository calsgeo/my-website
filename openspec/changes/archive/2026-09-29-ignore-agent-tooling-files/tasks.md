## 1. Inspect Current Tooling Artifacts

- [x] 1.1 Review current `.gitignore` contents and preserve existing entries.
- [x] 1.2 Identify working-tree paths related to Codex, OpenCode, and OpenSpec that should be ignored.
- [x] 1.3 Confirm whether any OpenSpec planning/specification artifacts should remain visible for review.

## 2. Update Ignore Rules

- [x] 2.1 Add a clearly labeled agent/specification tooling section to `.gitignore`.
- [x] 2.2 Add ignore patterns for local Codex artifacts.
- [x] 2.3 Add ignore patterns for local OpenCode artifacts.
- [x] 2.4 Add ignore patterns for local OpenSpec helper, pointer, cache, or temporary artifacts without hiding intended planning artifacts.

## 3. Verify Behavior

- [x] 3.1 Run git status or git check-ignore checks against representative Codex, OpenCode, and OpenSpec paths.
- [x] 3.2 Confirm intended OpenSpec change artifacts remain visible unless the project explicitly marks them local-only.
- [x] 3.3 Review the final `.gitignore` section for clear grouping and no accidental removal of existing ignore entries.
