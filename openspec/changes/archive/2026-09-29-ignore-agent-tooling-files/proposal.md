## Why

The repository's `.gitignore` currently does not account for local agent and specification tooling files, so OpenSpec, OpenCode, and Codex state can be accidentally committed. Adding ignore coverage now keeps the working tree focused on intentional project files while still allowing planned OpenSpec artifacts to remain available for review.

## What Changes

- Add `.gitignore` entries for local/generated OpenSpec, OpenCode, and Codex files and directories.
- Group the new ignore patterns under clear comments so future tool-specific additions are easy to maintain.
- Preserve versioned planning/specification artifacts unless implementation confirms they are intended to be local-only.

## Capabilities

### New Capabilities
- `repository-ignore-policy`: Defines the repository behavior for ignoring local agent and specification tooling artifacts.

### Modified Capabilities
- None.

## Impact

- Affects `.gitignore`.
- Affects git status visibility for OpenSpec, OpenCode, and Codex local files.
- No runtime application behavior, APIs, or dependencies are expected to change.
