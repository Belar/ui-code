![UI Code](logo.svg)

Code gallery with small to medium-sized UI components.

## Components stack:
- React
- styled-components

## Code:

Components are separated into units, which are directories at the top of `src` directory. They don't rely on each other (e.g. don't share a single, common button component, like they probably would if part of a components library), so it's possible to investigate an implementation without getting familiar with others.

`src/globals` is a special sub-directory, not a UI unit, that holds environment specific settings used in the components e.g. breakpoint definitions for media queries.

## Playground

All components are available as a [Storybook](https://belar.github.io/ui-code), which provides browsing capabilities, code examples of the components themselves, and an interactive playground.