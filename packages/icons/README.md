# @mindyjs/icons - a React Remix Icons
React implementation for the popular [RemixIcon](https://remixicon.com) open source library.

### Install
Using yarn
```bash
yarn add @mindyjs/icons
```

Using npm

```bash
npm install @mindyjs/icons
```


### Usage
```javascript
import {RiHomeLine} from '@mindyjs/icons';
```

```javascript
<RiHomeLine /> // output svg 24 24
// customization with props
<RiHomeLine {...props} />
// wrap svg htmlParent
<RiHomeLine as="span" {...props} /> // You can use any html or react DOM element
```

### Props
|Prop|Default|Description|
|----|-----|-----|
|as|`svg`| Name of the icon. Explore the [remixicon](https://remixicon.com) library for all valid icon names|
|...props|``|React props|
