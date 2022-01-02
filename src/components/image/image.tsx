import { dispatch } from "../../scripts/editor";
import { clearSelectedElementsOnSlide, deleteSelectedElement, ImageType, putSelectedElement } from "../../scripts/structure";

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
                        dispatch(clearSelectedElementsOnSlide, {});
                        dispatch(putSelectedElement, image.id)
                    } else {dispatch(deleteSelectedElement, image.id)}
                }}
            />
        </svg>
    )
}