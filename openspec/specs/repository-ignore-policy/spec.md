# Repository Ignore Policy Specification

## Purpose

Defines how the repository ignores local tooling artifacts so agent and specification helper files do not appear as project changes unless they are intentionally versioned.

## Requirements

### Requirement: Local agent tooling artifacts are ignored
The repository ignore policy SHALL ignore local/generated files and directories associated with Codex, OpenCode, and OpenSpec tooling when those artifacts are not intended to be committed as project source.

#### Scenario: Codex local state is present
- **WHEN** Codex creates local configuration, cache, session, or state files in the working tree
- **THEN** those files do not appear as untracked project changes

#### Scenario: OpenCode local state is present
- **WHEN** OpenCode creates local configuration, cache, session, or skill-generated state files in the working tree
- **THEN** those files do not appear as untracked project changes

#### Scenario: OpenSpec local helper state is present
- **WHEN** OpenSpec creates local helper, pointer, cache, or temporary files that are not part of the planned specification source of truth
- **THEN** those files do not appear as untracked project changes

### Requirement: Versioned planning artifacts remain available
The repository ignore policy SHALL NOT hide intended OpenSpec planning or specification artifacts from git status solely because they are under the OpenSpec workflow.

#### Scenario: OpenSpec change artifacts are created for review
- **WHEN** an OpenSpec change creates proposal, design, task, or spec delta files that are intended for review
- **THEN** those files remain visible to git unless an explicit project decision marks OpenSpec artifacts as local-only

### Requirement: Ignore rules are maintainable
The repository ignore policy SHALL group agent and specification tooling patterns in a clearly labeled section of `.gitignore`.

#### Scenario: A future tooling pattern is added
- **WHEN** a maintainer adds another Codex, OpenCode, or OpenSpec ignore pattern
- **THEN** the related rule can be placed with the existing tooling ignore rules without searching unrelated sections
