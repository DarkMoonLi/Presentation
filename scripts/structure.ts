type Application = {
    selectedElements: Array<Application>, // Подумать над вариантами типов.
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
        width: number,
        heigth: number,
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
    const Applic: Application = Appl;
    Applic.presentation.title = 'Название презентации';

    return (Applic);
}

// Title
/**
 * @param {Application} Appl 
 * @param {string} newTitle 
 * @return {Application}
 */
function setTitle(Appl, newTitle) {
    const newApplic: Application = Appl;
    newApplic.presentation.title = newTitle;
    return newApplic
}

// Slides
/**
 * @param {Application} Appl
 * @return {Application}
 */
function addSlide(Appl) {
    const newApplic = Appl.presentation.slides[0];
    newApplic.presentation.slides = getId();
    return newApplic
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
 * @param {textType} newText
 * @return {Application} 
 */

function addText(Appl, newText) {
    const newApplic: Application = Appl // Получаем значения по умолчанию
    newApplic.presentation.slides[0].text.push(newText) // Добавляем в массив новый элемент по индексу или как нибудь еще
    return Appl
}

/** 
 * @param {Application} Appl 
 * @param {string} adress
 * @return {Application}
 */

function addImage(Appl, adress) {
    const newApplic: Application = Appl
    newApplic.presentation.slides[].image[].link = adress  // добавление адреса
    newApplic.presentation.slides[].image.push(newImage) // добавление картинки
    return newApplic
}

/**
 * @param {Application} Appl
 * @param {string} primitivesType
 * @return {Application} 
 */

function addPrimitives(Appl, primitivesType) {
    const newAppl: Application = Appl;
    const newPrimitive: Primitive = {
                                    id: getId(), 
                                    type: primitivesType,
                                    position: {x: 100, y: 100},
                                    size: {width: 100, heigth: 100},
                                    radius: 50
                                    };
    
    newAppl.presentation.slides[].primitives.push(newPrimitive);
    return(newAppl)
} 

/**
 * @param {Application} Appl
 * @param {string} newBackground
 * @return {slide} 
 */
function changeBackground(Appl, newBackground) {
    const newApplic: Application = Appl;
    newApplic.presentation.slides[].background = newBackground
    return newApplic
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
 * @param {number} newX
 * @param {number} newY
 * @return {Application} 
 */
function replaceElements(Appl, newX, newY) {
    // Перемещение элемента по слайду
    // Возможно заставить следовать за мышью, а потом запомнить позицию, чтобы элемент перемещался вместе с мышкой
    const newAppl: Application = Appl;
    newAppl.selectedElements[].position.x = newX; // После типизации массива
    newAppl.selectedElements[].position.y = newY;
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
 * @return {id}
 */
function getId() {
    // Получить уникальный идентификатор,
    // найти функцию, которая делает это
    return (Date.now())
}

// Text
/**
 * @param {Application} Appl
 * @param {string} newFont
 * @param {number} newFontSize
 * @return {Application} 
 */
function changeFont(Appl, newFont = '', newFontSize = 14) {
    // Изменение шрифта, нам нужен шрифт по умолчанию
    const newAppl: Application = Appl;
    newAppl.presentation.slides[].text[].font = newFont
    newAppl.presentation.slides[].text[].fontSize = newFontSize
    return newAppl
}

/**
 * @param {Application} Appl 
 * @param {string} newColor 
 * @return {Application} 
 */
function changeTextColor(Appl, newColor) {
    const newAppl: Application = Appl;
    newAppl.presentation.slides[].text[].color = newColor;
    return newAppl
}

// Пока не придумал какие функции можно добавить им
// Image

// Primitives


// Основная программа
getApplication();