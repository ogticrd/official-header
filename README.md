# Official Header

Proporciona una manera sencilla de indentificar que se está navegando en una web oficial del Gobierno de la República Dominicana.

## Instalación

Para integrar esta herramienta en un proyecto, copie el siguiente código y coloquelo en el archivo del index.html de su proyecto.

```html
<script src="https://cdn.jsdelivr.net/gh/ogticrd/official-header/main.js" defer></script>
```

En caso de desear utilizar el tema dark, basta con cambiar la importación del script por:

```html
<script
  src="https://cdn.jsdelivr.net/gh/ogticrd/official-header/main.js"
  defer
  theme="dark"
></script>
```

Luego de esto, podrá utilizar el componente **official-header** en la parte superior de su sitema de navegación

```html
<official-header></official-header>
```

Nota: En caso de utilizar React.js o Next.js con typescript, debe crear un archivo **declarations.d.ts** y agregar el siguiente codigo:

```typescript
declare namespace JSX {
  interface IntrinsicElements {
    "official-header": any;
  }
}
```

Con estos pasos ya queda listo para funcionar adecuadamente.
