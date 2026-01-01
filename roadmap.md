1. Switch from yarn to pnpm and migrate webpack to vite (incl pipelines) -- DONE
2. Update MUI to latest version and migrate -- DONE
3. Add Unit tests -- DONE
4. Update ReactJS version and migrate -- DONE
5. Add typescript support -- DONE
6. Rewrigth components, to use more stabel emotion styles and better memorised logic -- DONE
7. Add Storybook -- DONE
8. Migrate formating and linting to biome.js -- DONE
9. Update CI/CD pipelines (GitHub Actions) to run tests and linting -- DONE
10. Add commit-lint & Husky for conventional commits -- DONE
11. Add semantic-release to the pipelines -- DONE
12. Improve Test Coverage (add unit tests for hooks and formatting logic) -- DONE
13. Update README.md -- DONE

commit convetion:
```bash
type(scope): <description only lower-case>

<body optional, required in breaking changes>

<footer optional>
```

Possible types:
```txt
feat: Feature related commit
fix: Patch and bugfix related commit
ci: CI rtelated commit
test: Test related commit
docs: Documentation related commit
dev: Environment related commit
major*: Major version release related commit

* -> Breaking changes. New major version release
```

Possible scopes:
```txt
deps: Changes and migrations of dependencies
unit: Changes within unit-tests
component: Changes within the components, component hooks anmd other relations
env: Changes to environment (e.g. biome-config, node version, ...)
```