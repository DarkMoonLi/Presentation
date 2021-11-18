const Application = {
    selectedElems: [],
    mapEditor: [],
    presentation: {
        title: 'Название презентации',
        slides: [
            {
                id: '',
                background: 'FFFFFF',
                text: [
                    {
                        id: '',
                        font: '',
                        fontSize: 14,
                        color: '000000',
                        content: 'Текст слайда'
                    }
                ],
                image: [{
                    id: '',
                    size: {
                        width: 100,
                        height: 100
                    },
                    link: ''
                }],
                primitives: [{
                    id: '',
                    type: '',
                    position: 
                    {
                        x: 100,
                        y: 100,
                    },
                    size: 
                    {
                        width: 100,
                        heigth: 100,
                    },
                    radius: 0
                    }
                ]
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
    const newAppl = Application;
    return newAppl
}

// Title
/**
 * @param {Application} Appl 
 * @param {String} newTitle 
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
 * @return {Application}
 */
function addSlide(Appl) {
    const newAppl = Appl;
    newAppl.presentation.slides.push({
                                    id: 2,
                                    background: 'FFFFFF',
                                    text: Appl.presentation.slides[0].text.push({
                                                                                font: '',
                                                                                fontSize: 14,
                                                                                color: '000000',
                                                                                content: 'Текст слайда'
                                                                                })
                                    });
    return newAppl
}

/**
 * @param {Application} Appl
 * @param {Number} id
 * @return {Application} 
 */
function deleteSlide(Appl, id) {
    const newAppl = Appl;
    const slide = newAppl.presentation.slides.find(id);
    newAppl.presentation.slides.pop(slide);
    return newAppl
    // Удаление из массива по id, поискать возможности
}

/**
 * @param {Application} slides
 * @param {Number} prevIndex
 * @param {Number} newIndex
 * @return {Application} 
 */
function replace(slides, prevIndex, newIndex) {
    // Помещение слайда по новому индексу, и удаление
    // Метод splice
}

// Slide
/**
 * @param {Application} Appl
 * @param {Number} index
 * @return {Application} 
 */
function addText(Appl, index) {
    const newAppl = Appl; // Получаем значения по умолчанию
    newAppl.presentation.slides[index].text.push({
                                                font: '',
                                                fontSize: 14,
                                                color: '000000',
                                                content: 'Текст слайда'
                                                }); // Добавляем в массив новый элемент
    return newAppl
}

/** 
 * @param {Application} Appl 
 * @param {String} adress
 * @param {Number} index
 * @return {Application}
 */
function addImage(Appl, adress, index) {
    const newAppl = Appl
    newAppl.presentation.slides[index].image.push({
                                                 size: {
                                                        width: 100,
                                                        height: 100
                                                       },
                                                 link: adress
                                                 })
    return newAppl
}

/**
 * @param {Application} Appl
 * @param {String} primitivesType
 * @param {Number} index
 * @return {Application} 
 */
function addPrimitives(Appl, primitivesType, index) {
    if (primitivesType === 'circle') {
        const newAppl = Appl;
        newAppl.presentation.slides[index].primitives.push(Application.presentation.slides[0].primitives[0]); 
        return newAppl
    }
    if (primitivesType === 'triangle') {
        const newAppl = Appl;
        newAppl.presentation.slides[index].primitives.push(Application.presentation.slides[0].primitives[1]); 
        return newAppl
    }
    if (primitivesType === 'rectangle') {
        const newAppl = Appl;
        newAppl.presentation.slides[index].primitives.push(Application.presentation.slides[0].primitives[2]); 
        return newAppl
    }
} 

/**
 * @param {Application} Appl
 * @param {String} newBackground
 * @param {Number} index
 * @return {Application} 
 */
function changeBackground(Appl, newBackground, index) {
    const newAppl = Appl
    newAppl.presentation.slides[index].background = newBackground
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
 * @param {Number} newX
 * @param {Number} newY
 * @param {Number} index
 * @return {Application} 
 */
function replaceElements(Appl, newX, newY) {
    const newAppl = Appl;
    // Перемещение элемента по слайду
    // Возможно заставить следовать за мышью, а потом запомнить позицию, чтобы элемент перемещался вместе с мышкой
    newAppl.presentation.slides[index].elem.position.x = newX;
    newAppl.presentation.slides[index].elem.position.y = newY;
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
 * @param {Number} newWidth 
 * @param {Number} newHeight
 * @param {Number} index
 * @return {Application} // Элемент слайда
 */
function changeWindowSize(Appl, newWidth, newHeight, index) {
    const newAppl = Appl;
    // Подумать над именем процедуры
    newAppl.presentation.slides[index].elem.width = newWidth;
    newAppl.presentation.slides[index].elem.height = newHeight;
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
 * @param {String} newFont
 * @param {Number} newFontSize
 * @param {Number} slideIndex
 * @param {Number} textIndex
 * @return {Application} 
 */
function changeFont(Appl, newFont = '', newFontSize = 14, slideIndex, textIndex) {
    const newAppl = Appl;
    // Изменение шрифта, нам нужен шрифт по умолчанию
    newAppl.presentation.slides[slideIndex].text[textIndex].font = newFont;
    newAppl.presentation.slides[slideIndex].text[textIndex].fontSize = newFontSize;
    return newAppl
}

/**
 * @param {Application} Appl 
 * @param {String} newColor 
 * @param {Number} slideIndex
 * @param {Number} textIndex
 * @return {Application} 
 */
function changeTextColor(Appl, newColor) {
    const newAppl = Appl;
    newAppl.presentation.slides[slideIndex].text[textIndex].color = newColor;
    return newAppl
}

// Пока не придумал какие функции можно добавить им
// Image

// Primitives