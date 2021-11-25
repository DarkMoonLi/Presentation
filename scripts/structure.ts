type Application = {
    readonly selectedElements: Array<string>,
    readonly undo: Array<Slide>,
    readonly redo: Array<Slide>,
    readonly presentation: {
        readonly title: string,
        readonly slides: Array<Slide>
    }
};

type Slide = {
    readonly id: string,
    readonly background: string,
    readonly content: Array<TextType|PrimitiveType|ImageType>
   // readonly text: Array<TextType>, 
   // readonly image: Array<ImageType>,
   // readonly primitives: Array<Primitive>
};

type PrimitiveType = {
    readonly id: string,
    readonly type: string,
    readonly prmitive: string,
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
    readonly type: string,
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
    readonly type: string,
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
    return (Date.now().toString(36) + Math.random().toString(36).substr(2))
}

function getDefaultText(): TextType {
    return ({
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
        content: 'Текст слайда отображаться'
    });
};

function getDefaultSlide(): Slide {
    return({
        id: getId(),
        background: 'FFFFFF',
        content: [{...getDefaultText()}]
    })
};

// Application
function getApplication(): Application {
    return ({
        selectedElements: [],
        undo: [],
        redo: [],
        presentation: {
            title: 'Название презентации',
            slides: [getDefaultSlide()]
        }
    })
};

// Presentation
function newPresentation(Appl: Application): Application {
    return ({
        ...Appl,
        presentation: {
            title: 'Название презентации',
            slides: [getDefaultSlide()]
        }
    });
}

// Title
function setTitle(Appl: Application, newTitle: string): Application {
    return ({
        ...Appl,
        presentation: {
            title: newTitle,
            slides: Appl.presentation.slides
        }
    })
}

// Продумать Undo
function addSlide(Appl: Application): Application {
    return ({
        ...Appl,
        undo: [...Appl.undo, ],
        presentation: {
            title: Appl.presentation.title,
            slides: [...Appl.presentation.slides, getDefaultSlide()]
        }
    })
}

// Продумать Undo
function deleteSlide(Appl: Application, index: number, id: string): Application {
    let newSlides: Array<Slide> = [];
    let newUndo: Array<Slide> = [];
    for (let i = 0; i < Appl.presentation.slides.length; i++) {
        if (Appl.presentation.slides[i].id !== id) {
            newSlides = [...newSlides, { ...Appl.presentation.slides[i] }];
        }
        else {
            newUndo = [Appl.presentation.slides[i]];
        };
    };
    return ({
        ...Appl,
        undo: [...Appl.undo, ...newUndo],
        presentation: {
            title: Appl.presentation.title,
            slides: [...newSlides]
        }
    });
}

function replace(Appl: Application, prevIndex: number, newIndex: number): Application {
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
    }
    return ({
        ...Appl,
        presentation: {
            title: Appl.presentation.title,
            slides: [...newSlides]
        }
    })
}

// Slide

function addImage(Appl: Application, adress: string, index: number): Application {
    let defaultImage: ImageType = {
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

    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides[index] = {
        ...changeSlides[index],
        content: [...changeSlides[index].content, defaultImage]
    };

    return ({
        ...Appl,
        undo: [...Appl.undo, Appl.presentation.slides[index]],
        presentation: {
            title: Appl.presentation.title,
            slides: [...changeSlides]
        }
    })
}

function addPrimitives(Appl: Application, primitivesType: string, index: number): Application {
    let newPrimitive: PrimitiveType = {
        id: getId(),
        type: 'primitive',
        prmitive: primitivesType,
        position: { x: 100, y: 100 },
        size: { width: 100, height: 100 },
    };

    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides[index] = {
        ...changeSlides[index],
        content: [...changeSlides[index].content, newPrimitive]
    };

    return ({
        ...Appl,
        undo: [...Appl.undo, Appl.presentation.slides[index]],
        presentation: {
            title: Appl.presentation.title,
            slides: changeSlides
        }
    });
}

function changeBackground(Appl: Application, newBackground: string, index: number): Application {
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides[index] = {
        ...changeSlides[index],
        background: newBackground
    };

    return ({
        ...Appl,
        presentation: {
            title: Appl.presentation.title,
            slides: [...changeSlides]
        }
    });
}

function deleteElements(Appl: Application, selectedElem: Array<Application>): Application {
    // Без конечной и правильной структуры сложновато
    // Для определения элемента возможно использовать функцию, которая следит за выбранными элементами
    // и обработать их в цикле
    return ({
        ...Appl,
        presentation: {
            ...Appl.presentation,
            slides: []
        }
    });
};

function replaceElements(Appl: Application, index: number, id: string, newX: number, newY: number): Application {
    // Перемещение элемента по слайду
    // Возможно заставить следовать за мышью, а потом запомнить позицию, чтобы элемент перемещался вместе с мышкой
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    for (let i=0; changeSlides[index].content.length; i++) {
        if (changeSlides[index].content[i].id === id) {
            changeSlides[index].content[i] = {
                ...changeSlides[index].content[i],
                position: {
                    x: newX,
                    y: newY
                } 
            }
        }
    };

    return ({
        ...Appl,
        presentation: {
            title: Appl.presentation.title,
            slides: [...changeSlides]
        }
    });
};

function changeLayer(Appl: Application, selectedElements: Array<Application>, newLayer: number): Application {
    // Добавить в объект слои
    // Для определения элемента возможно использовать функцию, которая следит за выбранными элементами
    // и обработать их в цикле
    return ({
        ...Appl,
        presentation: {
            ...Appl.presentation,
            slides: []
        }
    })
};

function changeWindowSize(Appl: Application, index: number, id: string, newWidth: number, newHeight: number): Application {
    // Подумать над именем процедуры
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    for (let i=0; changeSlides[index].content.length; i++) {
        if (changeSlides[index].content[i].id === id) {
            changeSlides[index].content[i] = {
                ...changeSlides[index].content[i],
                size: {
                    width: newWidth,
                    height: newHeight
                } 
            }
        }
    };

    return ({
        ...Appl,
        presentation: {
            title: Appl.presentation.title,
            slides: [...changeSlides]
        }
    });
};

// Text

function addText(Appl: Application, index: number): Application {

    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides[index] = {
        ...changeSlides[index],
        content: [...changeSlides[index].content, getDefaultText()]
    };

    return ({
        ...Appl,
        presentation: {
            title: Appl.presentation.title,
            slides: [...changeSlides]
        }
    });
};

function changeFont(Appl: Application, slideIndex: number, textIndex: number, id: string, newFont: string = '', newFontSize: number = 14): Application {
    // Изменение шрифта, нам нужен шрифт по умолчанию
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    for (let i=0; changeSlides[slideIndex].content.length; i++) {
        if (changeSlides[slideIndex].content[i].id === id) {
            changeSlides[slideIndex].content[i] = {
                ...changeSlides[slideIndex].content[i],
                font: newFont,
                fontSize: newFontSize
            }
        }
    };

    return ({
        ...Appl,
        presentation: {
            title: Appl.presentation.title,
            slides: [...changeSlides]
        }
    });
};

function changeTextColor(Appl: Application, newColor: string, slideIndex: number, textIndex: number, id: string): Application {
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    for (let i=0; changeSlides[slideIndex].content.length; i++) {
        if (changeSlides[slideIndex].content[i].id === id) {
            changeSlides[slideIndex].content[i] = {
                ...changeSlides[slideIndex].content[i],
                color: newColor 
            }
        }
    };

    return ({
        ...Appl,
        presentation: {
            title: Appl.presentation.title,
            slides: [...changeSlides]
        }
    });
};

// Пока не придумал какие функции можно добавить им
// Image

// Primitives


// Основная программа
getApplication();