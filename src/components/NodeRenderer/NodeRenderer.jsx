import { renderMode } from '../../features/shared/constants/renderMode'
import { isResizeEnabled } from '../ResizeAndDrag'
import StyledResizeAndDrag from '../StyledResizeAndDrag/StyledResizeAndDrag'
import Disable from './../Disable/Disable'

/* This structure is inspired by reactFlow library. Please refer to first few minutes
of this video to get a better understanding https://youtu.be/EvgdirLeYaQ?si=FduxfR6ZfF-rh567

In short: nodes props receives an array of objects. It contains all the data about a particular node (getNewNodeObject).
It contains width, height, node's data which we use in forms and most importantly the "type".

The nodeType receives an Object. This object maps the "type" with a component and 
that component gets rendered. eg. nodeTypeWebsiteBuilderComponentMap

  
 */
const NodesRenderer = ({
  nodes,
  nodeTypes,
  nodeResize,
  onNodeSelect,
  onNodeResizeStop,
  onNodeDragStop,
  ResizeAndDragComponent = StyledResizeAndDrag,
  resizeAndDragComponentProps,
  ...props
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
          <Comp {...node} {...props} mode={renderMode.editor} />
        </Disable>
      </ResizeAndDragComponent>
    )
  })
}

export default NodesRenderer
