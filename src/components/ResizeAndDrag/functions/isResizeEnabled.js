export const isResizeEnabled = (enableResizing) => {
  const heightResizeEnabled =
    enableResizing?.top ||
    enableResizing?.bottom ||
    enableResizing?.topLeft ||
    enableResizing?.topRight ||
    enableResizing?.bottomLeft ||
    enableResizing?.bottomRight

  const widthResizeEnabled =
    enableResizing?.left ||
    enableResizing?.right ||
    enableResizing?.topLeft ||
    enableResizing?.topRight ||
    enableResizing?.bottomLeft ||
    enableResizing?.bottomRight

  return { heightResizeEnabled, widthResizeEnabled }
}
