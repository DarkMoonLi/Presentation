import { ImageType } from "../../scripts/structure";

export default function SomeImage(image: ImageType) {
    console.log(image.content);
    return(
        <image 
            href={image.content} 
            x={image.position.x}
            y={image.position.y}
            height={image.size.height}
            width={image.size.width}
        />
    )
}