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
readonly size:
            {
readonly            width: number,
readonly            height: number,
            };
readonly link: string,
};

const defaultSlide: Slide = {
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
};

// Application
/**
 * @return {Application}
 */
function getApplication(): Application {
    return ({
        selectedElements: [],
        presentation:
            {
                title: 'Название презентации',
                slides: [defaultSlide]
            }
    });
};

// Presentation
/**
 * @param {Application}
 * @return {Application}  
 */
function newPresentation(Appl: Application): Application {
    return ({
            ...Appl,
            presentation: 
                {
                    title: 'Название презентации',
                    slides: [defaultSlide]
                } // создать слайд по умолчанию - defaultSlide.
            });
}

// Title
/**
 * @param {Application} Appl 
 * @param {string} newTitle 
 * @return {Application}
 */
function setTitle(Appl: Application, newTitle: string): Application {
    return ({
            ...Appl,
            presentation: 
                {
                    title: newTitle,
                    slides: Appl.presentation.slides
                }
            })
}

// Slides
/**
 * @param {Application} Appl
 * @return {Application}
 */
function addSlide(Appl: Application): Application {
    return ({
            ...Appl,
            presentation: 
                {
                    title: Appl.presentation.title,
                    slides: [...Appl.presentation.slides, defaultSlide]
                }
            })
}

/**
 * @param {Application} Appl
 * @param {number} index
 * @param {string} id
 * @return {Application} 
 */
function deleteSlide(Appl: Application, index: number, id: string): Application {
    // Удаление из массива по id, поискать возможности
}

/**
 * @param {Application} Appl
 * @param {number} prevIndex
 * @param {number} newIndex
 * @return {Application} 
 */
function replace(Appl: Application, prevIndex: number, newIndex: number): Application {
    // Помещение слайда по новому индексу, и удаление
    // Метод splice
}

// Slide

/** 
 * @param {Application} Appl 
 * @param {string} adress
 * @param {number} index
 * @return {Application}
 */
function addImage(Appl: Application, adress: string, index: number): Application {
    let defaultImage: imageType = 
        {
            id: getId(),
            size: 
                {
                    width: 100,
                    height: 100
                },
            link: adress
        };

    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides[index] = 
        {
            ...changeSlides[index],
            image: [...changeSlides[index].image, defaultImage]
        };

    return ({
            ...Appl,
            presentation: 
                {
                    title: Appl.presentation.title,
                    slides: [...changeSlides]
                }
            })
}

/**
 * @param {Application} Appl
 * @param {string} primitivesType
 * @param {number} index
 * @return {Application} 
 */
function addPrimitives(Appl: Application, primitivesType: string, index: number): Application {
    let newPrimitive: Primitive = 
        {
            id: getId(),
            type: primitivesType,
            position: {x: 100, y: 100},
            size: {width: 100, heigth: 100},
            radius: 0
        };

    if (primitivesType === 'trinagle') {
        
    };
    if (primitivesType === 'circle') {
        
    };
    if (primitivesType === 'rectangle') {
        
    };

    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides[index] = 
        {
            ...changeSlides[index],
            primitives: [...changeSlides[index].primitives, newPrimitive]
        };
    
    return ({
            ...Appl,
            presentation: 
                {
                    title: Appl.presentation.title,
                    slides: changeSlides
                }
            });
} 

/**
 * @param {Application} Appl
 * @param {string} newBackground
 * @param {number} index
 * @return {Application} 
 */
function changeBackground(Appl: Application, newBackground: string, index: number): Application {
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides[index] = 
        {
            ...changeSlides[index], 
            background = newBackground
        };

    return ({
            ...Appl,
            presentation: 
                {
                    title: Appl.presentation.title,
                    slides: [...changeSlides]
                }
            });
}

/** 
 * @param {Application} Appl
 * @param {Array<Application>} selectedElem // Показать, что это элементы слайда
 * @return {slide} 
 */
function deleteElements(Appl: Application, selectedElem: Array<Application>): Application {
    // Без конечной и правильной структуры сложновато
    // Для определения элемента возможно использовать функцию, которая следит за выбранными элементами
    // и обработать их в цикле
}

/**
 * @param {Application} Appl // Показать, что это элементы слайда, текст или картинка которую мы перемещаем
 * @param {number} index
 * @param {number} newX
 * @param {number} newY
 * @return {Application} 
 */
function replaceElements(Appl: Application, index: number, newX: number, newY: number): Application {
    // Перемещение элемента по слайду
    // Возможно заставить следовать за мышью, а потом запомнить позицию, чтобы элемент перемещался вместе с мышкой
    const newAppl: Application = Appl;
    newAppl.selectedElements[index].position.x = newX; // После типизации массива
    newAppl.selectedElements[index].position.y = newY;
    
    return ({
            ...Appl,
            presentation: 
                {
                title: Appl.presentation.title,
                slides: []
                }
            });
}

/**
 * @param {Application} Appl 
 * @param {Array<Application>} selectedElements
 * @param {number} newLayer
 * @return {Application} 
 */
function changeLayer(Appl: Application, selectedElements: Array<Application>, newLayer: number): Application {
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
function changeWindowSize(Appl: Application, newWidth: number, newHeight: number): Application {
    // Подумать над именем процедуры
    const newAppl: Application = Appl;
    newAppl.selectedElements[].width = newWidth; // Релизовать после типизации массива.
    newAppl.selectedElements[].height = newHeight;
    
    return ({
            ...Appl,
            presentation: 
                {
                    title: Appl.presentation.title,
                    slides: []
                }
            });
}

// Id

/**
 * @return {string}
 */
function getId(): string {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2))
}

// Text

/**
 * @param {Application} Appl
 * @param {number} index
 * @return {Application} 
 */
 function addText(Appl: Application, index: number): Application {
    let defaultText: textType = 
        {
            id: getId(),
            font: '',
            fontSize: 14,
            color: 'FFFFFF',
            content: 'Текст слайда отображаться'
        };

    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides[index] = 
        {
            ...changeSlides[index], 
            text: [...changeSlides[index].text, defaultText]
        };

    return ({
            ...Appl,
            presentation: 
                {
                    title: Appl.presentation.title,
                    slides: [...changeSlides]
                }
            });
}

/**
 * @param {Application} Appl
 * @param {number} index1
 * @param {number} index2
 * @param {string} newFont
 * @param {number} newFontSize
 * @return {Application} 
 */
function changeFont(Appl: Application, slideIndex: number, textIndex: number, newFont: string = '', newFontSize: number = 14): Application {
    // Изменение шрифта, нам нужен шрифт по умолчанию
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides[slideIndex].text[textIndex] = 
        {
            ...changeSlides[slideIndex].text[textIndex],
            font: newFont,
            fontSize: newFontSize
        };
    return ({
            ...Appl,
            presentation: 
                {
                    title: Appl.presentation.title,
                    slides: [...changeSlides]
                }
            });
}

/**
 * @param {Application} Appl 
 * @param {string} newColor
 * @param {number} index1
 * @param {number} index2 
 * @return {Application} 
 */
function changeTextColor(Appl: Application, newColor: string, slideIndex: number, textIndex: number): Application {
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides[slideIndex].text[textIndex] = 
        {
            ...changeSlides[slideIndex].text[textIndex],
            color: newColor
        };

    return ({
            ...Appl,
            presentation: 
                {
                    title: Appl.presentation.title,
                    slides: [...changeSlides]
                }
            });
}

// Пока не придумал какие функции можно добавить им
// Image

// Primitives


// Основная программа
getApplication();