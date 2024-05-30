# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# useMemo
  Optimización de rendimiento: useMemo guarda el resultado de una función de cálculo hasta que una de las dependencias cambie. Esto significa que si las dependencias no cambian, se reutiliza el valor memorizado en lugar de volver a calcularlo.

  Evitar cálculos costosos: Si tienes funciones que realizan operaciones complejas o consumen muchos recursos, puedes usar useMemo para asegurarte de que estas funciones solo se ejecuten cuando sea necesario.

  Prevención de renderizados innecesarios: Al usar useMemo, puedes prevenir renderizados innecesarios de componentes que dependen de datos que no han cambiado, lo que puede mejorar significativamente el rendimiento de la aplicación.