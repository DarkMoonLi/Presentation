import store from "../../store/store"
import { moveElements, changeSize } from "../../store/actionCreators/moveElements"

type BlockType = {
    ref: React.MutableRefObject<null>,
    width: number,
    height: number,
}

export function ResizeBlock({ref, width, height}: BlockType) {
    return (
        <div ref={ref}
            style={{
                position: 'absolute',
                display: 'block',
                left: width,
                top: height,
                width: '9px',
                height: '9px',
                backgroundColor: '#000',
                border: '2px solid #000',
                borderRadius: '4px',
                cursor: 'se-resize'
            }}
        >
        </div>
    )
}