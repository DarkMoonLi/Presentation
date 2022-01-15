import store from "../../store/store"
import { moveElements, changeSize } from "../../store/actionCreators/moveElements"

type BlockType = {
    ref: React.MutableRefObject<null>,
    textSize: {
        width: number,
        height: number,
    },
    position: {
        x: number,
        y: number
    },
    size: {
        width: number,
        height: number
    },
    resizing: boolean
}

export function resizeBlock(ref: React.MutableRefObject<null>,
                            textSize: {
                                width: number,
                                height: number
                            },
                            position: {
                                x: number,
                                y: number
                            },
                            size: {
                                width: number,
                                height: number
                            },
                            resizing: boolean) {
    return <div ref={ref}
              style={{
                  position: 'absolute',
                  display: 'block',
                  left: textSize.width,
                  top: textSize.height,
                  width: '9px',
                  height: '9px',
                  backgroundColor: '#000',
                  border: '2px solid #000',
                  borderRadius: '4px',
                  cursor: 'se-resize'
              }}
              onMouseMove={() => resizing && store.dispatch(changeSize(size, position))}
            ></div>
}