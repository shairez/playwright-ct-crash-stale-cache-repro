# Playwright component testing crash reproduction

When using Playwright component testing, deleting test files and their associated components causes subsequent test runs to fail with "cannot find component" errors, even though the deleted components are no longer referenced by any existing tests.

## Reproduction

1. Run `pnpm install` to install the dependencies.
2. Run `pnpm test-ct` to run the tests.
3. Delete the `Child.test.tsx` and `Child.tsx` files.
4. Run `pnpm test-ct` to run the tests.
5. see the error.