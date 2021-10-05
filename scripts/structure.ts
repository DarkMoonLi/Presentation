type Application = {
    Presentation:
        {
            title: string,
            slides:
                [
                    slide:
                        {
                            id: number,
                            background: string,
                            text:
                                [
                                    {
                                        id: number,
                                        font: string,
                                        fontSize: number,
                                        color: string,
                                        content: string,
                                    }
                                ];
                            image:
                                [
                                    {
                                        id: number,
                                        size:
                                            {
                                                width: number,
                                                height: number,
                                            };
                                        link: string,
                                    }
                                ];
                            primitives:
                                [
                                    circles:
                                    [
                                        {
                                            id: number,
                                            size: {
                                                width: number,
                                                height: number
                                            },
                                            center: {
                                                x: number,
                                                y: number
                                            },
                                            radius: number
                                        }
                                    ],

                                    triangles: 
                                    [
                                        {
                                            id: number,
                                            size: {
                                                width: number,
                                                height: number
                                            },
                                            position: {
                                                x: number,
                                                y: number
                                            }
                                        }
                                    ],

                                    rectangles: 
                                    [
                                        {
                                            id: number,
                                            size: {
                                                width: number,
                                                height: number
                                            },
                                            position: {
                                                x: number,
                                                y: number
                                            }
                                        }
                                    ]
                                ]
                        }
                ]
        }
}

const Appl: Application = null; // 
console.log(Appl)

// Application
/**
 * @return {Application}
 */
 function getApplication() {
    let newApplication: Application
    return newApplication
}

// Presentation
/**
 * @return {presentation}  
 */
function newPresentation(Appl) {
    let newPresent: Application = Appl
    return newPresent
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
    let newSlide = Appl.presentation.slides.slide
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
    let newText = App.presentation.slides.slide.text[0] // Получаем значения по умолчанию
    slide.text.push(newText) // Добавляем в массив новый элемент
    return slide
}

/** 
 * @param {slide} slide 
 * @param {string} adress
 * @return {slide}
 */
function addImage(slide, adress) {
    let newImage = Appl.presentation.slides.slide.image[0]
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
        let newPrimitive = Appl.presentation.slides.slide.primitives[0] // Пересмотреть весь объект primitives, сделать его массивом
                                                                           // из 3 элементов circle, triangle, rectangle. (Без фигурных скобок)
                                                                           // Он сейчас массив из одного элемента 
        slide.primitives.push(newPrimitive)
        return slide
    }
    if (primitivesType === 'triangle') {
        let newPrimitive = Appl.presentation.slides.slide.primitives[1] //Appl.presentation.slides.slide.primitives[1]
       
        slide.primitives.push(newPrimitive)
        return slide
    }
    if (primitivesType === 'rectangle') {
        let newPrimitive = Appl.presentation.slides.slide.primitives[2]
      
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