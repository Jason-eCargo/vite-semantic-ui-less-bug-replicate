# vite-semantic-ui-less-bug-replicate
A repository to provide the Vite team with a small project to demonstrate the bug.

# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project setup

1. Created project using `create-vite` and the `react` template.
1. Downgraded `vite` to 3.2.2 and `@vitejs/plugin-react` to 2.2.0.
1. Installed `less` 2.7.3, `less-plugin-npm-import` 2.1.0 and `semantic-ui-less` 2.5.0.
1. Added `ThirdParty` directory with Lato fonts, added `SemanticTheme` directory with customisation and added `plugins` directory to make semantic UI less work with the customisation.
1. Renamed App.css to App.less.
1. Added semantic-ui-less imports to App.less.
1. Added some semantic-ui-less icon classes to App.jsx as a test case to see if the fonts are being rendered.

## Bug replication steps

```
npm install --save-dev vite@3.2.3
npm clean-install
npm run dev
```

## Error messages
Run the following to see the error messages:

```
npm install --save-dev vite@3.2.3
npm clean-install
npm run build
```

```
../assets/fonts/icons.eot referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
../assets/fonts/icons.eot?#iefix referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
../assets/fonts/outline-icons.eot referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
../assets/fonts/outline-icons.eot?#iefix referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
../assets/fonts/brand-icons.eot referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
../assets/fonts/brand-icons.eot?#iefix referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
../assets/fonts/icons.woff referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
../assets/fonts/outline-icons.woff2 referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
../assets/fonts/brand-icons.woff2 referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
../assets/fonts/icons.ttf referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
../assets/fonts/outline-icons.woff referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
../assets/fonts/brand-icons.woff referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
../assets/fonts/icons.svg#icons referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
../assets/fonts/outline-icons.ttf referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
../assets/fonts/brand-icons.ttf referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
../assets/fonts/outline-icons.svg#icons referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
../assets/fonts/brand-icons.svg#icons referenced in ../repro2/src/App.less didn't resolve at build time, it will remain unchanged to be resolved at runtime
```

## Result
The fonts icons, brand-icons and outline-icons does not appear in dist/assets and the icons in App.jsx `<i class="icon ..."></i>` will not render because it is missing the font.

However the fonts in ThirdParty will be bundled because it hard codes the font path and name e.g. `url('./LatoLatin-Regular.ttf')`.

Any vite version higher than 3.2.2 will exhibit the bug including the latest 4.5.0.
