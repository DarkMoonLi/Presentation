type Application = 
{
readonly    selectedElements: Array<Application>, // Подумать над вариантами типов.
readonly    presentation:
            {
readonly            title: string,
readonly            slides: Array<Slide>
            }
};

type Slide =
{
readonly    id: string,
readonly    background: string,
readonly    text: Array<textType>, // В каком порядке будут отображаться? 
readonly    image: Array<imageType>,
readonly    primitives: Array<Primitive>
};

type Primitive = 
{
readonly    id: string,
readonly    type: string,
readonly    position: 
            {
readonly        x: number,
readonly        y: number,
            }
readonly    size: 
            {
readonly        width: number,
readonly        heigth: number,
            }
readonly    radius: number
};

type textType = 
{
   readonly id: string,
   readonly font: string,
   readonly fontSize: number,
   readonly color: string,
   readonly content: string,
};

type imageType = 
{
    readonly id: string,
readonly    size:
            {
readonly            width: number,
readonly            height: number,
            };
readonly    link: string,
};

// Application
/**
 * @return {Application}
 */
function getApplication() {
    return ({
        selectedElements: [],
        presentation:
            {
                title: 'Название презентации',
                slides:
                    [
                        {
                            id: getId(),
                            background: 'FFFFFF',
                            text:
                                [
                                    {
                                        id: getId(),
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
    });
}

// Presentation
/**
 * @return {presentation}  
 */
function newPresentation(Appl) {
    return ({
            ...Appl,
            presentation: {title: 'Название презентации',
                           slides: Appl.presentation.slides}
            });
}

// Title
/**
 * @param {Application} Appl 
 * @param {string} newTitle 
 * @return {Application}
 */
function setTitle(Appl, newTitle) {
    return ({
            ...Appl,
            presentation: {title: newTitle,
                          slides: Appl.presentation.slides}
            })
}

// Slides
/**
 * @param {Application} Appl
 * @return {Application}
 */
function addSlide(Appl) {
    let defaultSlide = {
        id: getId(),
        background: 'FFFFFF',
        text:
            [
                {
                    id: getId(),
                    font: '',
                    fontSize: 14,
                    color: 'FFFFFF',
                    content: 'Текст слайда',
                }
            ],
        image: [],
        primitives: []
    }
    return ({
            ...Appl,
            presentation: {title: Appl.presentation.title,
                          slides: [...Appl.presentation.slides, defaultSlide]}
            })
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
 * @param {Application} Appl
 * @param {Number} index
 * @return {Application} 
 */
function addText(Appl, index) {
    let defaultText = {
        id: getId(),
        font: '',
        fontSize: 14,
        color: 'FFFFFF',
        content: 'Текст слайда',
    };
    return ({
            ...Appl,
            presentation: {slides: [...Appl.presentation.slides,
                                    slides[index].text = [...Appl.presentation.slides[index].text, defaultText]]
            }
            })
}

/** 
 * @param {Application} Appl 
 * @param {string} adress
 * @return {Application}
 */
function addImage(Appl, adress) {
    let defaultImage = {};
    return ({
            ...Appl,
            presentation: {slides: [...Appl.presentation.slides]}
    })
}

/**
 * @param {Application} Appl
 * @param {String} primitivesType
 * @param {Number} index
 * @return {Application} 
 */
function addPrimitives(Appl, primitivesType, index) {
    if (primitivesType === 'trinagle') {
        let newPrimitive = {}
    };
    if (primitivesType === 'circle') {
        let newPrimitive = {}
    }
    if (primitivesType === 'rectangle') {
        let newPrimitive = {}
    }
    return ({
            ...Appl,
            presentation: {slides: [...Appl.presentation.slides,
                                    Appl.presentation.slides[index].primitives: [...Appl.presentation.slides[index].primirives, newPrimitive]}})
} 

/**
 * @param {Application} Appl
 * @param {String} newBackground
 * @param {Number} index
 * @return {Application} 
 */
function changeBackground(Appl, newBackground, index) {
    return ({...Appl,
            presentation: {slides: [...Appl.presentation.slides,
                                    Appl.presentation.slides[index].background = newBackground]}})
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
 * @param {Application} Appl // Показать, что это элементы слайда, текст или картинка которую мы перемещаем
 * @param {Number} index
 * @param {Number} newX
 * @param {Number} newY
 * @return {Application} 
 */
function replaceElements(Appl, index, newX, newY) {
    // Перемещение элемента по слайду
    // Возможно заставить следовать за мышью, а потом запомнить позицию, чтобы элемент перемещался вместе с мышкой
    const newAppl: Application = Appl;
    newAppl.selectedElements[index].position.x = newX; // После типизации массива
    newAppl.selectedElements[index].position.y = newY;
    return newAppl;
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
 * @param {Application} Appl // Элемент слайда
 * @param {number} newWidth 
 * @param {number} newHeight
 * @return {Application} // Элемент слайда
 */
function changeWindowSize(Appl, newWidth, newHeight) {
    // Подумать над именем процедуры
    const newAppl: Application = Appl;
    newAppl.selectedElements[].width = newWidth; // Релизовать после типизации массива.
    newAppl.selectedElements[].height = newHeight;
    return newAppl
}

// Id
/**
 * @return {string}
 */
function getId() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2))
}

// Text
/**
 * @param {Application} Appl
 * @param {Number} index1
 * @param {Number} index2
 * @param {String} newFont
 * @param {Number} newFontSize
 * @return {Application} 
 */
function changeFont(Appl, index1, index2, newFont = '', newFontSize = 14) {
    // Изменение шрифта, нам нужен шрифт по умолчанию
    return ({...Appl,
            presentation: {slides: [...Appl.presentation.slides,
                                    Appl.presentation.slides[index1].text[index2]: {font = newFont,
                                                                                    fontSize = newFontSize}]}})
}

/**
 * @param {Application} Appl 
 * @param {String} newColor
 * @param {Number} index1
 * @param {Number} index2 
 * @return {Application} 
 */
function changeTextColor(Appl, newColor, index1, index2) {
    return ({...Appl,
            presentation: {slides: [...Appl.presentation.slides,
                                    Appl.presentation.slides[index1].text[index2].color = newColor]}})
}

// Пока не придумал какие функции можно добавить им
// Image

// Primitives


// Основная программа
getApplication();