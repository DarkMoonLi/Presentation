type Application = {
    readonly selectedElements: Array<Slide>, // Подумать над вариантами типов.
    readonly presentation: {
        readonly title: string,
        readonly slides: Array<Slide>
    }
};

type Slide = {
    readonly id: string,
    readonly background: string,
    readonly text: Array<TextType>, // В каком порядке будут отображаться? 
    readonly image: Array<ImageType>,
    readonly primitives: Array<Primitive>
};

type Primitive = {
    readonly id: string,
    readonly type: string,
    readonly position: {
        readonly x: number,
        readonly y: number,
    }
    readonly size: {
        readonly width: number,
        readonly heigth: number,
    }
    readonly radius: number
};

type TextType = {
    readonly id: string,
    readonly font: string,
    readonly fontSize: number,
    readonly color: string,
    readonly content: string,
};

type ImageType = {
    readonly id: string,
    readonly size: {
        readonly width: number,
        readonly height: number,
    };
    readonly link: string,
};

const defaultSlide: Slide = {
    id: getId(),
    background: 'FFFFFF',
    text: [{
        id: getId(),
        font: '',
        fontSize: 14,
        color: 'FFFFFF',
        content: 'Текст слайда',
    }],
    image: [],
    primitives: []
};

// Application
function getApplication(): Application {
    return ({
        selectedElements: [],
        presentation: {
            title: 'Название презентации',
            slides: [defaultSlide]
        }
    });
};

// Presentation
function newPresentation(Appl: Application): Application {
    return ({
        ...Appl,
        presentation: {
            title: 'Название презентации',
            slides: [defaultSlide]
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

// Slides
function addSlide(Appl: Application): Application {
    return ({
        ...Appl,
        presentation: {
            title: Appl.presentation.title,
            slides: [...Appl.presentation.slides, defaultSlide]
        }
    })
}

function deleteSlide(Appl: Application, index: number, id: string): Application {
    let newSlides: Array<Slide> = [];
    for (let i = 0; i < Appl.presentation.slides.length; i++) {
        if (Appl.presentation.slides[i].id !== id) {
            newSlides = [...newSlides, { ...Appl.presentation.slides[i] }];
        };
    };
    return ({
        ...Appl,
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
        size: {
            width: 100,
            height: 100
        },
        link: adress
    };

    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides[index] = {
        ...changeSlides[index],
        image: [...changeSlides[index].image, defaultImage]
    };

    return ({
        ...Appl,
        presentation: {
            title: Appl.presentation.title,
            slides: [...changeSlides]
        }
    })
}

function addPrimitives(Appl: Application, primitivesType: string, index: number): Application {
    let newPrimitive: Primitive = {
        id: getId(),
        type: primitivesType,
        position: { x: 100, y: 100 },
        size: { width: 100, heigth: 100 },
        radius: 0
    };

    if (primitivesType === 'trinagle') {

    };
    if (primitivesType === 'circle') {
        newPrimitive = {
            ...newPrimitive,
            radius: 50
        }
    };
    if (primitivesType === 'rectangle') {

    };

    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides[index] = {
        ...changeSlides[index],
        primitives: [...changeSlides[index].primitives, newPrimitive]
    };

    return ({
        ...Appl,
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
        background = newBackground
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
}

function replaceElements(Appl: Application, index: number, newX: number, newY: number): Application {
    // Перемещение элемента по слайду
    // Возможно заставить следовать за мышью, а потом запомнить позицию, чтобы элемент перемещался вместе с мышкой
    const newAppl: Application = Appl;
    newAppl.selectedElements[index].position.x = newX; // После типизации массива
    newAppl.selectedElements[index].position.y = newY;

    return ({
        ...Appl,
        presentation: {
            title: Appl.presentation.title,
            slides: []
        }
    });
}

function changeLayer(Appl: Application, selectedElements: Array<Application>, newLayer: number): Application {
    // Добавить в объект слои
    // Для определения элемента возможно использовать функцию, которая следит за выбранными элементами
    // и обработать их в цикле
}

function changeWindowSize(Appl: Application, newWidth: number, newHeight: number): Application {
    // Подумать над именем процедуры
    const newAppl: Application = Appl;
    newAppl.selectedElements[].width = newWidth; // Релизовать после типизации массива.
    newAppl.selectedElements[].height = newHeight;

    return ({
        ...Appl,
        presentation: {
            title: Appl.presentation.title,
            slides: []
        }
    });
}

// Id

function getId(): string {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2))
}

// Text

function addText(Appl: Application, index: number): Application {
    let defaultText: TextType = {
        id: getId(),
        font: '',
        fontSize: 14,
        color: 'FFFFFF',
        content: 'Текст слайда отображаться'
    };

    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides[index] = {
        ...changeSlides[index],
        text: [...changeSlides[index].text, defaultText]
    };

    return ({
        ...Appl,
        presentation: {
            title: Appl.presentation.title,
            slides: [...changeSlides]
        }
    });
}

function changeFont(Appl: Application, slideIndex: number, textIndex: number, newFont: string = '', newFontSize: number = 14): Application {
    // Изменение шрифта, нам нужен шрифт по умолчанию
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides[slideIndex].text[textIndex] = {
        ...changeSlides[slideIndex].text[textIndex],
        font: newFont,
        fontSize: newFontSize
    };
    return ({
        ...Appl,
        presentation: {
            title: Appl.presentation.title,
            slides: [...changeSlides]
        }
    });
}

function changeTextColor(Appl: Application, newColor: string, slideIndex: number, textIndex: number): Application {
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides[slideIndex].text[textIndex] = {
        ...changeSlides[slideIndex].text[textIndex],
        color: newColor
    };

    return ({
        ...Appl,
        presentation: {
            title: Appl.presentation.title,
            slides: [...changeSlides]
        }
    });
}

// Пока не придумал какие функции можно добавить им
// Image

// Primitives