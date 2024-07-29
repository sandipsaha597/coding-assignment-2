# Short Overview

## Naming Conventions

- **Screaming Snake Case** (e.g., `NODE_TYPE_FORM_COMPONENT_MAP`):

  - Indicates that the values are linked with values saved in backend, localStorage, sessionStorage, etc.
  - These should be changed with high caution.

- **camelCase** (e.g., `defaultEdgeOptions`):
  - Indicates that names are used only in the frontend codebase.
  - These can be changed more easily.

## Folder Structure

This project uses a **feature-based folder structure**. Each feature has its own directory containing all related files, such as components, hooks, Redux slices, and styles.

## Canvas Component

The canvas component structure is inspired by **reactFlow**. It provides a flexible and extensible way to manage and render interactive nodes and there data on the canvas.

The canvas component uses the **render props pattern** to ensure reusability for related features like graphic designing, whiteboard, resume designing, flow builder, etc. This pattern allows for a flexible and reusable component structure that can adapt to various use cases.

## Elements and nodes

In the codebase, elements are referred to as **nodes** in the codebase. This terminology is consistent throughout the project and aligns with the canvas component's structure inspired by reactFlow.

## Auto Save

The project has an **auto-save** feature which is **debounced** at **1000 milliseconds**. This ensures that changes are saved automatically with a delay to prevent excessive save operations.

## Google Font Loader

This library includes a copy-paste of the `react-google-font-loader` from https://github.com/jakewtaylor/react-google-font-loader. The original library is unmanaged, and the author made a mistake in the code. Therefore, the code was copied to ensure stability and control.

### Usage

Pass the font props to the `GoogleFontLoader` component. The font props should be an array of font objects, where each object represents a font and its weights.

Example font props array:

```javascript
const fonts = [
  {
    id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    font: 'Roboto',
    weights: [400],
  },
  {
    id: '1b2c3d4e-5f6g-7h8i-9j0k-1l2m3n4o5p6q',
    font: 'Open Sans',
    weights: [400],
  },
  {
    id: '1c2d3e4f-5g6h-7i8j-9k0l-1m2n3o4p5q6r',
    font: 'Lato',
    weights: [400],
  },
  // ...
]
```
