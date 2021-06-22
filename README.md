## MortQL - Aplicación GraphQL de Rick y Morty

Esta es una aplicación cliente que consume la API de Rick and Morty.
Utiliza [Apollo Client] para toda la obtención de datos y la gestión del estado.

El proyecto fue escrito en JavaScript al principio. Pero finalmente he migrado a TypeScript.
He usado [graphql-codegen] (https://graphql-code-generator.com/) para crear definiciones de tipo automáticamente.
Además, configuró Apollo para mostrar los errores y advertencias de GraphQL como se explica [aquí] (https://www.apollographql.com/docs/devtools/apollo-config/).

Se ha implementado una estructura de carpetas basada en características para mantener las cosas organizadas.

El proyecto se creó con `create-react-app`, pero luego quise probar la representación del lado del servidor y luego usé el marco más esperado para eso. [Next.js] (https://nextjs.org/). Migrar a `Next.js` fue sencillo. Acabo de cambiar el enrutamiento, hice algunas configuraciones para `apollo` y` material-ui`. ¡Y eso es!

- [Next.js](https://nextjs.org/)
- [Apollo-Client](https://www.apollographql.com/docs/react/)
- [Material-UI](https://material-ui.com/)
- [GraphQL Code Generator](https://graphql-code-generator.com/)

Para ejecutarlo en modo de desarrollo:

### `npm install`

### `npm run dev`

### La API de Rick y Morty

Esta es una API pública realmente genial que te proporciona los personajes, ubicaciones y episodios. Tiene implementaciones Rest y GraphQL.