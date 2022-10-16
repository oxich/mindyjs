<div style="text-align: center;"> <img src="https://raw.githubusercontent.com/oxich/mindyjs/main/assets/mindyjs-logo-250x52.png" alt="Mindyjs logo">
</div>

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

## Follow us

* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" fill="rgba(50,152,219,1)"/></svg> [Twitter](https://twitter.com/mindyjs_): [```https://twitter.com/mindyjs_```](https://twitter.com/mindyjs_) , @Mindyjs_

## License

- @mindyjs/icons are open-sourced ([MIT](https://github.com/oxich/mindyjs/blob/main/packages/icons/LICENSE.md))
- Remix Icons are open-sourced ([Apache License 2.0](https://github.com/Remix-Design/RemixIcon/blob/master/License)).

## Collaborators 

- [@jamalmatic](https://github.com/jamalmatic)

<a href="https://www.producthunt.com/posts/mindyjs-react-icons?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-mindyjs&#0045;react&#0045;icons" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=363105&theme=light" alt="Mindyjs&#0032;React&#0032;Icons - Popular&#0032;remixicons&#0032;library&#0032;to&#0032;use&#0032;as&#0032;React&#0032;Component | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>