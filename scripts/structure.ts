type Application = {
    readonly selectedElements: Array<string>,
    readonly undo: Array<Presentation>,
    readonly redo: Array<Presentation>,
    readonly presentation: Presentation
};

type Presentation = {
    readonly title: string,
    readonly type: 'presentation',
    readonly slides: Array<Slide>
};

type Slide = {
    readonly id: string,
    readonly background: string,
    readonly content: Array<TextType|PrimitiveType|ImageType>
};

type PrimitiveType = {
    readonly id: string,
    readonly type: 'circle' | 'rectangle' | 'triangle',
    readonly position: {
        readonly x: number,
        readonly y: number,
    }
    readonly size: {
        readonly width: number,
        readonly height: number,
    }
};

type TextType = {
    readonly id: string,
    readonly type: 'text',
    readonly position: {
        readonly x: number,
        readonly y: number
    }
    readonly size: {
        readonly width: number,
        readonly height: number
    }
    readonly font: string,
    readonly fontSize: number,
    readonly weight: string,
    readonly color: string,
    readonly content: string
};

type ImageType = {
    readonly id: string,
    readonly type: 'image',
    readonly position: {
        readonly x: number,
        readonly y: number 
    }
    readonly size: {
        readonly width: number,
        readonly height: number,
    };
    readonly link: string,
};

function getId(): string {
    return (Date.now().toString(36) + Math.random().toString(36).substring(7))
};

function getDefaultText(): TextType {
    return {
        id: getId(),
        type: 'text',
        position: {
            x: 50,
            y: 50
        },
        size: {
            width: 100,
            height: 100
        },
        font: '',
        fontSize: 14,
        weight: 'normal',
        color: 'FFFFFF',
        content: 'Текст слайда'
    }
};

function getDefaultSlideTitle(): TextType {
    return {
        id: getId(),
        type: 'text',
        position: {
            x: 20,
            y: 20
        },
        size: {
            width: 60,
            height: 30
        },
        font: '',
        fontSize: 20,
        weight: 'normal',
        color: 'FFFFFF',
        content: 'Заголовок слайда'
    }
};

function getDefaultSlide(): Slide {
    return {
        id: getId(),
        background: 'FFFFFF',
        content: [getDefaultSlideTitle(), getDefaultText()]
    }
};

function getApplication(): Application {
    return {
        selectedElements: [],
        undo: [],
        redo: [],
        presentation: {
            title: 'Название презентации',
            type: 'presentation',
            slides: [getDefaultSlide()]
        }
    }
};

function putSelectedElement(Appl: Application, id: string): Application {
    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        selectedElements: [...Appl.selectedElements, id]
    }
};

function deleteSelectedElement(Appl: Application, id: string): Application {
    let newSelectedElements: Array<string> = [];
    for (const selectedElement of Appl.selectedElements) {
        if (selectedElement !== id) {
            newSelectedElements.push(selectedElement)
        }
    };

    return {
        ...Appl,
        selectedElements: [...newSelectedElements]
    };
}

function clearSelectedElements(Appl: Application): Application {
    return {
        ...Appl,
        selectedElements: []
    }
}

function doUndo(Appl: Application): Application {
    let newUndo: Array<Presentation> = [...Appl.undo];
    if (newUndo.length !== 0) {
        let changedUndo: Array<Presentation> = [];
        let newPresentation: Presentation = (newUndo[newUndo.length - 1].type == Appl.presentation.type) ? {...newUndo.pop()} : {...Appl.presentation};
        changedUndo = [...newUndo];
        
        return {
            ...Appl,
            undo: [...changedUndo],
            redo: [...Appl.redo, Appl.presentation],
            presentation: newPresentation
        }
    };
    return {...Appl}
}

function doRedo(Appl: Application): Application {
    let newRedo: Array<Presentation> = [...Appl.redo];
    if (newRedo.length !== 0) {
        let changedRedo: Array<Presentation> = [];
        let newUndo: Array<Presentation> = (newRedo[newRedo.length - 1].type == Appl.presentation.type) ? [...Appl.undo, {...Appl.presentation}] : [...Appl.undo];
        let redoPresentation: Presentation = (newRedo[newRedo.length - 1].type == Appl.presentation.type) ? {...newRedo.pop()} : {...Appl.presentation};
        for (let i = 0; newUndo.length - 2; i++) {
            changedRedo = [...changedRedo, {...newRedo[i]}]
        }

        return {
            ...Appl,
            undo: newUndo,
            redo: changedRedo,
            presentation: redoPresentation
        }
    };

    return {...Appl}
}

function clearRedo(Appl: Application): Application {
    return {
        ...Appl,
        redo: []
    }
}

function newPresentation(Appl: Application): Application {
    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            title: 'Название презентации',
            type: 'presentation',
            slides: [getDefaultSlide()]
        }
    }
};

function setTitle(Appl: Application, newTitle: string): Application {
    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            title: newTitle
        }
    }
};

// Продумать Undo
function addSlide(Appl: Application): Application {
    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            slides: [...Appl.presentation.slides, getDefaultSlide()]
        }
    }
};

// Продумать Undo
function deleteSlide(Appl: Application): Application {
    // Appl.selectedElements
    let newSlides: Array<Slide> = [];

    newSlides = [...newSlides.filter(function(slide) {
        return Appl.selectedElements.indexOf(slide.id) !== 1
    })]

    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            slides: [...newSlides]
        }
    }
};

function move(Appl: Application, prevIndex: number, newIndex: number): Application {
    let newSlides: Array<Slide> = [...Appl.presentation.slides];
    let selectedSlide: Slide = { ...newSlides[prevIndex] };

    if (prevIndex > newIndex) {
        for (let i = newSlides.length; i > 0; i--) {
            if ((i < prevIndex) && (i >= newIndex)) {
                newSlides[i + 1] = newSlides[i];
            };
        };
        newSlides[newIndex] = selectedSlide;
    }
    else {
        for (let i = 0; i < newSlides.length; i++) {
            if ((i >= prevIndex) && (i < newIndex)) {
                newSlides[i] = newSlides[i + 1];
            };
        };
        newSlides[newIndex] = selectedSlide;
    };

    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            slides: [...newSlides]
        }
    }
};

function addImage(Appl: Application, adress: string, id: string): Application {
    let newImage: ImageType = {
        id: getId(),
        type: 'image',
        position: {
            x: 100,
            y: 100
        },
        size: {
            width: 100,
            height: 100
        },
        link: adress
    };
    let img: HTMLImageElement = new Image();
    img.src = adress

    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    for (let slide of changeSlides) {
        if (slide.id === id) {
            slide= {
                ...slide,
                content: [...slide.content, newImage]
            }
        }
    }

    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            slides: [...changeSlides]
        }
    }
};

function addPrimitives(Appl: Application, primitivesType: 'circle' | 'rectangle' | 'triangle', id: string): Application {
    let newPrimitive: PrimitiveType = {
        id: getId(),
        type: primitivesType,
        position: { x: 100, y: 100 },
        size: { width: 100, height: 100 },
    };

    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    for (let slide of changeSlides) {
        if (slide.id === id) {
            slide = {
                ...slide,
                content: [...slide.content, newPrimitive]
            }
        }
    };

    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            slides: changeSlides
        }
    }
};

// Проверить
function changeBackground(Appl: Application, newBackground: string): Application {
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    for (const id of Appl.selectedElements) {
        changeSlides = [...changeSlides.map(function(slide) {
            if (slide.id === id) {
                return {
                    ...slide,
                    background: newBackground
                }
            }
        })]
    }

    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            slides: [...changeSlides]
        }
    }
};

// Проверить
function deleteElements(Appl: Application): Application {
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    let selectedElements: Array<string> = [...Appl.selectedElements];

    for (let slide of changeSlides) {
        if (slide.id === selectedElements[0]) {
            let content: Array<PrimitiveType|TextType|ImageType>;
            for (const id of selectedElements) {
                content = slide.content.filter(function(content) {
                    return content.id === id
                });
            };

            slide = {
                ...slide,
                content: [...content]
            };
        };
        changeSlides = [...changeSlides, {...slide}]
    };

    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            slides: [...changeSlides]
        }
    }
};

function moveElements(Appl: Application, newX: number, newY: number): Application {
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    for (let slide of changeSlides) {
        if (slide.id === Appl.selectedElements[0]) {
            for (let content of slide.content) {
                for (let id of Appl.selectedElements) {
                    if (content.id === id) {
                        content = {
                            ...content,
                            position: {
                                x: newX,
                                y: newY
                            }
                        }
                    }
                }
            }
        }
    }

    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            slides: [...changeSlides]
        }
    }
};

function changeLayer(Appl: Application, newLayer: number): Application {
    // Добавить в объект слои
    // Для определения элемента возможно использовать функцию, которая следит за выбранными элементами
    // и обработать их в цикле
    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            slides: []
        }
    }
};

// Переделать под id
function changeWindowSize(Appl: Application, newWidth: number, newHeight: number): Application {
    // Подумать над именем процедуры
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    
    for (let slide of changeSlides) {
        if (Appl.selectedElements.indexOf(slide.id) !== -1) {
            slide = {
                ...slide,
                content: [...slide.content.map(function(content) {
                    if (Appl.selectedElements.indexOf(content.id) !== -1) {
                        return {
                            ...content,
                            size: {
                                width: newWidth,
                                height: newHeight
                            }
                        }
                    }
                })]
            }
        }
    }

    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            slides: [...changeSlides]
        }
    }
};

function addText(Appl: Application, index: number): Application {

    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides[index] = {
        ...changeSlides[index],
        content: [...changeSlides[index].content, getDefaultText()]
    };

    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            slides: [...changeSlides]
        }
    }
};

function changeFont(Appl: Application, newFont: string = '', newFontSize: number = 14): Application {
    // Изменение шрифта, нам нужен шрифт по умолчанию
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    
    for (let slide of changeSlides) {
        if (Appl.selectedElements.indexOf(slide.id) !== -1) {
            slide = {
                ...slide,
                content: [...slide.content.map(function(content) {
                    if ((Appl.selectedElements.indexOf(content.id) !== -1) && (content.type === 'text')) {
                        return {
                            ...content,
                            font: newFont,
                            fontSize: newFontSize
                        }
                    }
                })]
            }
        }
    }

    return {
        ...Appl,
        presentation: {
            ...Appl.presentation,
            slides: [...changeSlides]
        }
    }
};

function changeTextColor(Appl: Application, newColor: string): Application {
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    
    for (let slide of changeSlides) {
        if (Appl.selectedElements.indexOf(slide.id) !== -1) {
            slide = {
                ...slide,
                content: [...slide.content.map(function(content) {
                    if ((Appl.selectedElements.indexOf(content.id) !== -1) && (content.type === 'text')) {
                        return {
                            ...content,
                            color: newColor
                        }
                    }
                })]
            }
        }
    }

    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            slides: [...changeSlides]
        }
    }
};

export {
    getApplication,
    putSelectedElement,
    deleteSelectedElement,
    clearSelectedElements,
    newPresentation,
    setTitle,
    addSlide,
    deleteSlide,
    move,
    addImage,
    addPrimitives,
    addText,
    changeBackground,
    deleteElements,
    moveElements,
    changeLayer,
    changeWindowSize,
    changeFont,
    changeTextColor,
    doUndo,
    doRedo,
    clearRedo
}