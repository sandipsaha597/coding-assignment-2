import { renderMode } from '../../constants'
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

    return (
      <ResizeAndDragComponent
        key={node.id}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={() => (!node.selected ? onNodeSelect(node.id) : false)}
        selected={node.selected}
        enableResizing={!!node.selected && enableResizing}
        size={{ width: node.width, height: node.height }}
        onResizeStop={(a, b, element, d, { x, y }) => {
          const { width, height } = element.getBoundingClientRect()
          onNodeResizeStop(node.id, {
            width,
            height,
            position: { x, y },
          })
        }}
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
