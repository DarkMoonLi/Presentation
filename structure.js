const Application = {
    selectedElems: [],
    mapEditor: [],
    presentation: {
        title: 'Название презентации',
        slides: [
            slide = {
                id: 1,
                background: 'FFFFFF',
                text: [
                    {
                        font: '',
                        fontSize: 14,
                        color: '000000',
                        content: 'Текст слайда'
                    }
                ],
                image: [{
                    size: {
                        width: 100,
                        height: 100
                    },
                    link: ''
                }],
                primitives: [{
                    circle: {
                        size: {
                            width: 100,
                            height: 100
                        },
                        center: {
                            x: 200,
                            y: 200
                        },
                        radius: 100

                    },
                    triangle: {
                        size: {
                            width: 100,
                            height: 100
                        },
                        position: {
                            x: 200,
                            y: 200
                        }
                    },
                    rectangle: {
                        size: {
                            width: 100,
                            height: 100
                        },
                        position: {
                            x: 200,
                            y: 200
                        }
                    }
                }]
            }
        ]
    }
}

// Application
/**
 * @return {Application}
 */
function getApplication() {
    const newApplication = Application;
    return newApplication
}

// Presentation
/**
 * @return {Application}  
 */
function newPresentation() {
    const newPresent = Application;
    return newPresent
}

// Title
/**
 * @param {Application} Appl 
 * @param {string} newTitle 
 * @return {Application}
 */
function setTitle(Appl, newTitle) {
    const newAppl = Appl;
    newAppl.presentation.title = newTitle;
    return newAppl;
}

// Slides
/**
 * @param {Application} Appl
 * @return {slides}
 */
function addSlide(Appl) {
    const newAppl = Application;
    newAppl.presentation.slides.push(id = getId(),
                                    background = 'FFFFFF',
                                    text.push(font = '',
                                             fontSize = 14,
                                             color = '000000',
                                             content = 'Текст слайда'
                                             ),
                                    );
    return newAppl
}

/**
 * @param {Application} slides
 * @param {slide} id
 * @return {Application} 
 */
function deleteSlide(slides, id) {
    // Удаление из массива по id, поискать возможности
}

/**
 * @param {Application} slides
 * @param {number} prevIndex
 * @param {number} newIndex
 * @return {Application} 
 */
function replace(slides, prevIndex, newIndex) {
    // Помещение слайда по новому индексу, и удаление
    // Метод splice
}

// Slide
/**
 * @param {Application} Appl
 * @return {Application} 
 */
function addText(Appl) {
    const newAppl = Appl; // Получаем значения по умолчанию
    newAppl.presentation.slides.slide.text.push(newText); // Добавляем в массив новый элемент
    return newAppl
}

/** 
 * @param {Application} Appl 
 * @param {string} adress
 * @return {Application}
 */
function addImage(Appl, adress) {
    let newAppl = Appl
    link = adress
    newAppl.presentation.slides.slide.image.push(newImage)
    return newAppl
}

/**
 * @param {Application} slide
 * @param {string} primitivesType
 * @return {Application} 
 */
function addPrimitives(slide, primitivesType) {
    if (primitivesType === 'circle') {
        let newPrimitive = Application.presentation.slides.slide.primitives[0] // Пересмотреть весь объект primitives, сделать его массивом
                                                                               // из 3 элементов circle, triangle, rectangle. (Без фигурных скобок)
                                                                               // Он сейчас массив из одного элемента 
        slide.primitives.push(newPrimitive)
        return slide
    }
    if (primitivesType === 'triangle') {
        let newPrimitive = Application.presentation.slides.slide.primitives[1]
       
        slide.primitives.push(newPrimitive)
        return slide
    }
    if (primitivesType === 'rectangle') {
        let newPrimitive = Application.presentation.slides.slide.primitives[2]
      
        slide.primitives.push(newPrimitive)
        return slide
    }
} 

/**
 * @param {Application} Appl
 * @param {string} newBackground
 * @return {Application} 
 */
function changeBackground(Appl, newBackground) {
    const newAppl = Appl
    slide.background = newBackground
    return newAppl
}

/** 
 * @param {Application} slide
 * @param {} selectedElem // Показать, что это элементы слайда
 * @return {Application} 
 */
function deleteElements(slide, selectedElem) {
    // Без конечной и правильной структуры сложновато
    // Для определения элемента возможно использовать функцию, которая следит за выбранными элементами
    // и обработать их в цикле
}

/**
 * @param {Application} Appl // Показать, что это элементы слайда, текст или картинка которую мы перемещаем
 * @param {number} newX
 * @param {number} newY
 * @return {Application} 
 */
function replaceElements(Appl, newX, newY) {
    const newAppl = Appl
    // Перемещение элемента по слайду
    // Возможно заставить следовать за мышью, а потом запомнить позицию, чтобы элемент перемещался вместе с мышкой
    elem.position.x = newX
    elem.position.y = newY
    return newAppl
}

/**
 * @param {Application} Appl 
 * @param {*} elem
 * @param {layers}
 * @return {Application} 
 */
function changeLayer(Appl, elem, newLayer) {
    // Добавить в объект слои
    // Для определения элемента возможно использовать функцию, которая следит за выбранными элементами
    // и обработать их в цикле
}

/**
 * @param {Application} Appl // Элемент слайда
 * @param {number} newWidth 
 * @param {number} newHeight
 * @return {Application} // Элемент слайда
 */
function changeWindowSize(Appl, newWidth, newHeight) {
    const newAppl = Appl;
    // Подумать над именем процедуры
    elem.width = newWidth
    elem.height = newHeight
    return newAppl
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
 * @param {Application} Appl
 * @param {string} newFont
 * @param {number} newFontSize
 * @return {Application} 
 */
function changeFont(Appl, newFont = '', newFontSize = 14) {
    const newAppl = Appl
    // Изменение шрифта, нам нужен шрифт по умолчанию
    Text.font = newFont
    Text.fontSize = newFontSize
    return newAppl
}

/**
 * @param {Application} Appl 
 * @param {string} newColor 
 * @return {Application} 
 */
function changeTextColor(Appl, newColor) {
    const newAppl = Appl
    Text.color = newColor
    return newAppl
}

// Пока не придумал какие функции можно добавить им
// Image

// Primitives