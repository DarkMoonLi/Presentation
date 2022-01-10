import { Slide } from "../../scripts/structure"
import SomebodyText from "../primitives/text/text";
import Triangle from "../primitives/triangle/triangle";
import Circle from "../primitives/circle/circle";
import Rectangle from "../primitives/rectangle/rectangle";
import SomeImage from "../image/image"

export default function getContent(slide: Slide) {

    return slide.content.map(function(content) {
        if (content.type === 'text') {
            return SomebodyText(content)
        } else if (content.type === 'circle') {
            return Circle(content)
        } else if (content.type === 'triangle') {
            return Triangle(content)
        } else if (content.type === 'rectangle') {
            return Rectangle(content)
        } else if (content.type === 'image') {
            return SomeImage(content)
        }
    })
}