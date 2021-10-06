type Application = {
    selectedElements: [],
    presentation:
        {
            title: string,
            slides: Array<Slide>
        }
}

type Slide =
{
    id: number,
    background: string,
    text: Array<textType>, 
    image: Array<imageType>,
    primitives: Array<Primitive>
}

type Primitive = {
    id: number,
    type: string,
    position: 
    {
        x: number,
        y: number,
    }
    size: 
    {
        x: number,
        y: number,
    }
    radius: number
}

type textType = 
{
    id: number,
    font: string,
    fontSize: number,
    color: string,
    content: string,
}

type imageType = 
{
    id: number,
    size:
        {
            width: number,
            height: number,
        };
    link: string,
}

// Application
/**
 * @return {Application}
 */
function getApplication() {
    const Appl: Application = {
        selectedElements: [],
        presentation:
            {
                title: 'Название презентации',
                slides:
                    [
                        {
                            id: 0,
                            background: 'FFFFFF',
                            text:
                                [
                                    {
                                        id: 0,
                                        font: '',
                                        fontSize: 14,
                                        color: 'FFFFFF',
                                        content: 'Текст слайда',
                                    }
                                ],
                            image: [],
                            primitives: []
                        }
                    ]
            }
    };
    return Appl;
}

// Presentation
/**
 * @return {presentation}  
 */
function newPresentation(Appl) {
    const newPresent: Application = Appl;
    newPresent.presentation.title = 'Название презентации';

    return (newPresent);
}

// Title
/**
 * @param {presentation} presentation 
 * @param {string} newTitle 
 * @return {presentation}
 */
function setTitle(presentation, newTitle) {
    presentation.title = newTitle
    return presentation
}

// Slides
/**
 * @param {slides} slides
 * @return {slides}
 */
function addSlide(slides) {
    let newSlide = Appl.presentation.slides[0]
    newSlide.id = getId()
    return newSlide
}

/**
 * @param {slides} slides
 * @param {slide} id
 * @return {slides} 
 */
function deleteSlide(slides, id) {
    // Удаление из массива по id, поискать возможности
}

/**
 * @param {slides} slides
 * @param {number} prevIndex
 * @param {number} newIndex
 * @return {slides} 
 */
function replace(slides, prevIndex, newIndex) {
    // Помещение слайда по новому индексу, и удаление
    // Метод splice
}

// Slide
/**
 * @param {slide} slide
 * @return {slide} 
 */
function addText(slide) {
    let newText = Appl.presentation.slides[slide].text[slide] // Получаем значения по умолчанию
    slide.text.push(newText) // Добавляем в массив новый элемент
    return slide
}

/** 
 * @param {slide} slide 
 * @param {string} adress
 * @return {slide}
 */
function addImage(slide, adress) {
    let newImage = Appl.presentation.slides[slide].image[0]
    newImage.link = adress
    slide.image.push(newImage)
    return slide
}

/**
 * @param {slide} slide
 * @param {string} primitivesType
 * @return {slide} 
 */
function addPrimitives(slide, primitivesType) {
    if (primitivesType === 'circle') {
        let newPrimitive = Appl.presentation.slides[slide].primitives[0] // Пересмотреть весь объект primitives, сделать его массивом
                                                                           // из 3 элементов circle, triangle, rectangle. (Без фигурных скобок)
                                                                           // Он сейчас массив из одного элемента 
        slide.primitives.push(newPrimitive)
        return slide
    }
    if (primitivesType === 'triangle') {
        let newPrimitive = Appl.presentation.slides[slide].primitives[slide] //Appl.presentation.slides.slide.primitives[1]
       
        slide.primitives.push(newPrimitive)
        return slide
    }
    if (primitivesType === 'rectangle') {
        let newPrimitive = Appl.presentation.slides[slide].primitives[slide]
      
        slide.primitives.push(newPrimitive)
        return slide
    }
} 

/**
 * @param {slide} slide
 * @param {string} newBackground
 * @return {slide} 
 */
function changeBackground(slide, newBackground) {
    slide.background = newBackground
    return slide
}

/** 
 * @param {slide} slide
 * @param {} selectedElem // Показать, что это элементы слайда
 * @return {slide} 
 */
function deleteElements(slide, selectedElem) {
    // Без конечной и правильной структуры сложновато
    // Для определения элемента возможно использовать функцию, которая следит за выбранными элементами
    // и обработать их в цикле
}

/**
 * @param {slide} elem // Показать, что это элементы слайда, текст или картинка которую мы перемещаем
 * @param {number} newX
 * @param {number} newY
 * @return {slide} 
 */
function replaceElements(elem, newX, newY) {
    // Перемещение элемента по слайду
    // Возможно заставить следовать за мышью, а потом запомнить позицию, чтобы элемент перемещался вместе с мышкой
    elem.position.x = newX
    elem.position.y = newY
    return elem
}

/**
 * @param {slide} slide 
 * @param {*} elem
 * @param {layers}
 * @return {slide} 
 */
function changeLayer(slide, elem, newLayer) {
    // Добавить в объект слои
    // Для определения элемента возможно использовать функцию, которая следит за выбранными элементами
    // и обработать их в цикле
}

/**
 * @param {*} elem // Элемент слайда
 * @param {number} newWidth 
 * @param {number} newHeight
 * @return {*} // Элемент слайда
 */
function changeWindowSize(elem, newWidth, newHeight) {
    // Подумать над именем процедуры
    elem.width = newWidth
    elem.height = newHeight
    return elem
}

// Id
/**
 * @return {id}
 */
function getId() {
    // Получить уникальный идентификатор,
    // найти функцию, которая делает это
    return (Date.now())
}

// Text
/**
 * @param {string} Text
 * @param {string} newFont
 * @param {number} newFontSize
 * @return {string} 
 */
function changeFont(Text, newFont = '', newFontSize = 14) {
    // Изменение шрифта, нам нужен шрифт по умолчанию
    Text.font = newFont
    Text.fontSize = newFontSize
    return Text
}

/**
 * @param {Text} Text 
 * @param {string} newColor 
 * @return {Text} 
 */
function changeTextColor(Text, newColor) {
    Text.color = newColor
    return Text
}

// Пока не придумал какие функции можно добавить им
// Image

// Primitives