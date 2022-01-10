import { ImageType } from "../../scripts/structure";
import { clearSelectedElementsOnSlide, deleteSelectedElement, putSelectedElement } from "../../store/actionCreators/selectedElement";
import store from "../../store/store";

export default function SomeImage(image: ImageType) {
    return(
       <svg>
            <image 
                href={image.content} 
                x={image.position.x}
                y={image.position.y}
                height={image.size.height}
                width={image.size.width}
                onClick={(event) => {
                    if (!event.ctrlKey) {
                        store.dispatch(clearSelectedElementsOnSlide());
                        store.dispatch(putSelectedElement(image.id))
                    } else {store.dispatch(deleteSelectedElement(image.id))}
                }}
            />
        </svg>
    )
}