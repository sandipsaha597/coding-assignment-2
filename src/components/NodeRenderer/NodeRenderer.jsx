import { renderMode } from '../../constants'
import { isResizeEnabled } from '../ResizeAndDrag'
import StyledResizeAndDrag from '../StyledResizeAndDrag/StyledResizeAndDrag'
import Disable from './../Disable/Disable'

const NodesRenderer = ({
  nodes,
  nodeTypes,
  nodeResize,
  onNodeSelect,
  onNodeResizeStop,
  onNodeDragStop,
  ResizeAndDragComponent = StyledResizeAndDrag,
  resizeAndDragComponentProps,
}) => {
  return nodes.map((node) => {
    const Comp = nodeTypes[node.type]
    const enableResizing = nodeResize[node.type] ?? true

    const handleResizeStop = (
      a,
      b,
      element,
      changedWidthAndHeight,
      { x, y }
    ) => {
      const { widthResizeEnabled, heightResizeEnabled } =
        isResizeEnabled(enableResizing)
      const changedWidth = widthResizeEnabled
        ? changedWidthAndHeight.width
        : false
      const changedHeight = heightResizeEnabled
        ? changedWidthAndHeight.height
        : false

      onNodeResizeStop(node.id, {
        changedWidth,
        changedHeight,
        position: { x, y },
      })
    }

    return (
      <ResizeAndDragComponent
        key={node.id}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={() => (!node.selected ? onNodeSelect(node.id) : false)}
        selected={node.selected}
        // resizeGrid={[]}
        // dragGrid={[]}
        enableResizing={!!node.selected && enableResizing}
        size={{ width: node.width, height: node.height }}
        onResizeStop={handleResizeStop}
        position={{ x: node.position.x, y: node.position.y }}
        onDragStop={(e, { x, y }) => {
          onNodeDragStop(node.id, { x, y })
        }}
        {...resizeAndDragComponentProps}
      >
        <Disable>
          <Comp {...node} mode={renderMode.editor} />
        </Disable>
      </ResizeAndDragComponent>
    )
  })
}

export default NodesRenderer
