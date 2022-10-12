# Mindyjs React Icons @mindyjs/icons
[![npm](https://img.shields.io/npm/v/@mindyjs/icons?color=blue&logo=mindyjs&style=flat-square)](https://www.npmjs.com/package/@mindyjs/icons) [![npm](https://img.shields.io/npm/dt/@mindyjs/icons?style=flat-square)](https://www.npmjs.com/package/@mindyjs/icons)

The brand new React implementation [Remixicons Icons library](https://remixicon.com/) to use as React components.

> Currently **2271 neutral-style icons!**

![remix-icons](https://camo.githubusercontent.com/fcc655218b07770c13935a69a42bd598f5fc275c019e4f6048d65ca2254b699c/687474703a2f2f63646e2e72656d697869636f6e2e636f6d2f707265766965772e737667)

## Installation

```bash
npm install @mindyjs/icons --save
```

or

```bash
yarn add @mindyjs/icons
```

## Usage

```jsx
import { RiStore3Line } from '@mindyjs/icons';

export default function App() {
  return <RiStore3Line />;
}
```

You can pass whatever props you want:

```jsx
<RiStore3Line className="ml-4" />
```

You can also include the whole icon pack:

```jsx
import * as Icon from '@mindyjs/icons';

export default function App() {
  return <Icon.RiStore3Line />;
}
```

The icon names are the `PascalCase` version of the original name. Examples: `ri-store-3-line` → `RiStore3Line`, `ri-store-fill` → `RiStoreFill`.


## IconProps

| Name  | Default | description |
| --- | --- | --- |
| `as` | `svg` | designate a `parent element` to wrap the `svg` element, note: all `props` will apply to the element defined by `as`                               |
| `...props`  |  |  You can pass whatever props you want |



## <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" width="24" height="24"> Figma icon set 
You can install it from the Figma app: [Remix Icons set in Figma](https://www.figma.com/community/file/1002848975625306383)

## More options

work in progress ...

## License

- @mindyjs/icons are open-sourced ([MIT](https://github.com/oxich/mindyjs/blob/main/packages/icons/LICENSE.md))
- Remix Icons are open-sourced ([Apache License 2.0](https://github.com/Remix-Design/RemixIcon/blob/master/License)).

## Collaborators

- [@jamalmatic](https://github.com/jamalmatic)

<a href="https://www.producthunt.com/posts/mindyjs-react-icons?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-mindyjs&#0045;react&#0045;icons" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=363105&theme=light" alt="Mindyjs&#0032;React&#0032;Icons - Popular&#0032;remixicons&#0032;library&#0032;to&#0032;use&#0032;as&#0032;React&#0032;Component | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>