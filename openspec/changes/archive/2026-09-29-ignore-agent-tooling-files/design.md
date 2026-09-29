## Context

See `proposal.md` for motivation. The current `.gitignore` only contains a few project-specific entries and does not include agent or specification tooling patterns. The repository currently contains local tool directories such as `.codex/` and `.opencode/`, while `openspec/` is also used for planning artifacts created by this workflow.

## Goals / Non-Goals

**Goals:**
- Add `.gitignore` coverage for Codex, OpenCode, and OpenSpec local/generated artifacts.
- Keep the new rules easy to audit by grouping them under a dedicated comment.
- Avoid hiding OpenSpec planning artifacts that should remain reviewable for this change workflow.

**Non-Goals:**
- Do not change application runtime behavior.
- Do not reorganize OpenSpec, OpenCode, or Codex directories.
- Do not modify git internals such as `.git/refs/*`; `.gitignore` does not govern files inside `.git/`.

## Decisions

- Add a dedicated `.gitignore` section for agent/specification tooling.
  - Rationale: The existing ignore file is short, so a named section keeps the new patterns visible and maintainable.
  - Alternative considered: Add patterns without comments. This is smaller but makes later tooling additions harder to place consistently.

- Ignore hidden local tool directories and helper files before considering the visible `openspec/` directory.
  - Rationale: `.codex/` and `.opencode/` are local tooling state in this repo, while `openspec/changes/...` contains the planning artifacts currently being created for review.
  - Alternative considered: Ignore `openspec/` wholesale. This may match a local-only OpenSpec workflow, but it would also hide proposal/spec/task files unless the project explicitly wants that behavior.

- Validate the selected patterns with git status-style checks after editing.
  - Rationale: The observable behavior is whether unwanted tooling files disappear from untracked changes while intended planning artifacts remain visible.
  - Alternative considered: Rely on visual inspection only. That is enough for simple formatting but weaker for ignore-rule behavior.

## Risks / Trade-offs

- Ignoring too broad a pattern could hide files that should be reviewed -> Mitigate by avoiding a blanket `openspec/` ignore unless the project explicitly chooses local-only OpenSpec artifacts.
- Ignoring too narrow a pattern could leave tool state visible -> Mitigate by checking the current repo for Codex, OpenCode, and OpenSpec paths before finalizing the `.gitignore` entries.
- Existing tracked files are not affected by `.gitignore` -> Mitigate by noting any tracked tooling files separately during implementation if they appear.

## Migration Plan

1. Update `.gitignore` with a grouped tooling section.
2. Run git status or git check-ignore checks against representative Codex, OpenCode, and OpenSpec paths.
3. Adjust patterns if the checks show intended review artifacts are hidden or local state remains visible.
4. No rollback is needed beyond reverting the `.gitignore` edit.
