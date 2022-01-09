import store from "../store/store";
import { openPresentationFromFile } from "../store/actionCreators/presentationActionCreators";
import { addNewImage } from "../store/actionCreators/slideElementActionCreators";

export type Application = {
    readonly selectedElements: Array<string>,
    readonly undo: Array<Presentation>,
    readonly redo: Array<Presentation>,
    readonly presentation: Presentation,
    readonly viewing: Viewing
};

export type Viewing = {
    readonly on: boolean,
    readonly currentSlide: Slide
};

export type Presentation = {
    readonly title: string,
    readonly type: 'presentation',
    readonly slides: Array<Slide>
};

export type Slide = {
    readonly id: string,
    readonly background: string,
    readonly content: Array<TextType|PrimitiveType|ImageType>
};

export type PrimitiveType = {
    readonly id: string,
    readonly type: 'circle' | 'rectangle' | 'triangle',
    readonly position: {
        readonly x: number,
        readonly y: number,
    },
    readonly size: {
        readonly width: number,
        readonly height: number,
    },
    readonly color: string
};

export type TextType = {
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

export type ImageType = {
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
    readonly content: string
};

function getId(): string {
    return (Date.now().toString(36) + Math.random().toString(36).substring(7))
};

function getDefaultText(): TextType {
    return {
        id: getId(),
        type: 'text',
        position: {
            x: 100,
            y: 250
        },
        size: {
            width: 1220,
            height: 400
        },
        font: '',
        fontSize: 48,
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
            x: 100,
            y: 100
        },
        size: {
            width: 1220,
            height: 100
        },
        font: '',
        fontSize: 64,
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

function putSelectedElement(Appl: Application, id: string): Application {
    return {
        ...Appl,
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

function clearSelectedElementsOnSlide(Appl: Application): Application {
    let newSelectedElements: Array<string> = [];
    for (let slide of Appl.presentation.slides) {
        if (Appl.selectedElements.includes(slide.id)) {
            newSelectedElements.push(slide.id)
        }
    };
    
    return {
        ...Appl,
        selectedElements: [...newSelectedElements]
    }
}

function undo(Appl: Application): Application {
    let newUndo: Array<Presentation> = [...Appl.undo];
    if (newUndo.length !== 0) {
        let changedUndo: Array<Presentation> = [];
        let newPresentation: Presentation = (newUndo[newUndo.length - 1].type === Appl.presentation.type) ? {...newUndo[newUndo.length - 1]} : {...Appl.presentation};
        newUndo.pop();
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

function redo(Appl: Application): Application {
    let newRedo: Array<Presentation> = [...Appl.redo];
    if (newRedo.length !== 0) {
        let changedRedo: Array<Presentation> = [];
        let newUndo: Array<Presentation> = (newRedo[newRedo.length - 1].type === Appl.presentation.type) ? [...Appl.undo, {...Appl.presentation}] : [...Appl.undo];
        let redoPresentation: Presentation = (newRedo[newRedo.length - 1].type === Appl.presentation.type) ? {...newRedo[newRedo.length - 1]} : {...Appl.presentation};
        newRedo.pop();
        changedRedo = [...newRedo];

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

function startViewing(Appl: Application): Application {
    return {
        ...Appl,
        viewing: {
            ...Appl.viewing,
            on: true
        }
    }
}

function viewingNextSlide(Appl: Application): Application {
    let index = Appl.presentation.slides.indexOf(Appl.viewing.currentSlide);
    index = index + 1;
    console.log(index);
    if (index < Appl.presentation.slides.length) {
        return {
            ...Appl,
            viewing: {
                ...Appl.viewing,
                currentSlide: Appl.presentation.slides[index]
            }
        }
    }

    return Appl
}

function viewingPrevSlide(Appl: Application): Application {
    let index = Appl.presentation.slides.indexOf(Appl.viewing.currentSlide);
    index = index - 1;
    console.log(index);
    if (index > -1) {
        return {
            ...Appl,
            viewing: {
                ...Appl.viewing,
                currentSlide: Appl.presentation.slides[index]
            }
        }
    }
    return Appl
}

function stopViewing(Appl: Application): Application {
    return {
        ...Appl,
        viewing: {
            ...Appl.viewing,
            on: false
        }
    }    
}

function getApplication(): Application {
    let slide = getDefaultSlide();
    return {
        selectedElements: [slide.id],
        undo: [],
        redo: [],
        presentation: {
            title: 'Название презентации',
            type: 'presentation',
            slides: [slide]
        },
        viewing: {
            on: false,
            currentSlide: slide
        }
    }
};

function createNewPresentation(Appl: Application): Application {
    let slide = getDefaultSlide();
    return {
        ...Appl,
        selectedElements: [slide.id],
        presentation: {
            title: 'Название презентации',
            type: 'presentation',
            slides: [slide]
        },
        viewing: {
            ...Appl.viewing,
            currentSlide: slide
        }
    }
}

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

function deleteSlide(Appl: Application): Application {
    let newSlides: Array<Slide> = [];

    newSlides = [...Appl.presentation.slides.filter(function(slide) {
        return (!Appl.selectedElements.includes(slide.id))
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

// Исправить
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

function addImageFromFile(Appl: Application): Application {
    const inp = document.createElement("input");
    inp.type = 'file';
    inp.click();
    inp.addEventListener('change', () => {
        let files = inp.files;
        if (files != null) {
            let file = files[0];
            let image = URL.createObjectURL(file);
            return store.dispatch(addNewImage(image));
        }
    });
    inp.remove();
    console.log('first');
    return Appl    
};

function addImage(Appl: Application, adress: string): Application {
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
        link: '',
        content: adress
    };

    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides = changeSlides.map(function(slide) {
        if (Appl.selectedElements.includes(slide.id)) {
            return {
                ...slide,
                content: [...slide.content, newImage]
            }
        }
        return {...slide}
    });

    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            slides: [...changeSlides]
        }
    }
};

function addPrimitives(Appl: Application, primitivesType: 'circle' | 'rectangle' | 'triangle'): Application {
    let newPrimitive: PrimitiveType = {
        id: getId(),
        type: primitivesType,
        position: { x: 100, y: 100 },
        size: { width: 100, height: 100 },
        color: '#FF0000'
    };

    let changeSlides: Array<Slide> = [...Appl.presentation.slides.map(function(slide) {
        if (Appl.selectedElements.indexOf(slide.id) !== -1) {
            return {
                ...slide,
                content: [...slide.content, newPrimitive]
            }
        } else { return slide }
    })];

    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            slides: changeSlides
        }
    }
};

function changeBackground(Appl: Application, newBackground: string): Application {
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    for (const id of Appl.selectedElements) {
        changeSlides = [...changeSlides.map(function(slide) {
            if (slide.id === id) {
                return {
                    ...slide,
                    background: newBackground
                }
            } else {
                return slide
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

function deleteElements(Appl: Application): Application {
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    let selectedElements: Array<string> = [...Appl.selectedElements];

    changeSlides = [...changeSlides.map(function(slide) {
        if (selectedElements.indexOf(slide.id) !== -1) {
            let newContent: Array<TextType|ImageType|PrimitiveType> = [...slide.content.filter(function(content) {
                return selectedElements.indexOf(content.id) === -1
            })];

            return {
                ...slide,
                content: [...newContent]
            };
        } else { return slide }
    })];

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
    let changeSlides: Array<Slide> = [...Appl.presentation.slides.map(function(slide) {
        if (Appl.selectedElements.indexOf(slide.id) !== -1) {
            return {
                ...slide,
                content: [...slide.content.map(function(content) {
                    if (Appl.selectedElements.indexOf(content.id) !== -1) {
                        return {
                            ...content,
                            position: {
                                x: newX,
                                y: newY
                            }
                        }
                    } else { return content }
                })
            ]}
        } else { return slide }
    })];

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

function changeWindowSize(Appl: Application, newWidth: number, newHeight: number): Application {
    let changeSlides: Array<Slide> = [...Appl.presentation.slides.map(function(slide) {
        if (Appl.selectedElements.indexOf(slide.id) !== -1) {
            return {
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
                    } else { return content }
                })]
            }
        } else { return slide }
    })];

    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            slides: [...changeSlides]
        }
    }
};

function addText(Appl: Application): Application {

    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides = [...changeSlides.map(function(slide) {
        if (Appl.selectedElements.includes(slide.id)) {
            return {
                ...slide,
                content: [...slide.content, getDefaultText()]
            }
        } else {
            return slide
        }
    })]

    return {
        ...Appl,
        undo: [...Appl.undo, {...Appl.presentation}],
        presentation: {
            ...Appl.presentation,
            slides: [...changeSlides]
        }
    }
};

function changeTextContent(Appl: Application, newText: string): Application {
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    changeSlides = [...changeSlides.map(function(slide) {
        if (Appl.selectedElements.includes(slide.id)) {
            return {
                ...slide,
                content: [...slide.content.map(function(content) {
                    if ((Appl.selectedElements.includes(content.id)) && (content.type === 'text')) {
                        return {
                            ...content,
                            content: newText
                        } 
                    }
                    return {...content}
                })]
            }
        };
        return {
            ...slide
        };
    })];
    
    return {
        ...Appl,
        presentation: {
            ...Appl.presentation,
            slides: [...changeSlides]
        }
    }
}

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
                    } else {
                        return content
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

function changeColor(Appl: Application, newColor: string): Application {
    let changeSlides: Array<Slide> = [...Appl.presentation.slides];
    
    for (let slide of changeSlides) {
        if (Appl.selectedElements.indexOf(slide.id) !== -1) {
            slide = {
                ...slide,
                content: [...slide.content.map(function(content) {
                    if ((Appl.selectedElements.indexOf(content.id) !== -1) && (content.type !== 'image')) {
                        return {
                            ...content,
                            color: newColor
                        }
                    } else {
                        return content
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

function savePresentation(Appl: Application, fileName: string): Application {
    let a = document.createElement("a");
    let file = new Blob([JSON.stringify(Appl.presentation)], {type: "application/json"});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    return Appl
}

function loadPresentation(Appl: Application, file: string) {
    const inp = document.createElement("input");
    inp.type = 'file';
    inp.click();
    inp.addEventListener('change', () => {
        let files = inp.files;
        if (files != null) {
            let file = URL.createObjectURL(files[0]);
            fetch(file)
            .then(response => response.json())
            .then(json => store.dispatch(openPresentationFromFile(json)))
        }
    })
    return(Appl)
}

function openPresentation(Appl: Application, newPresentation: Presentation): Application {
    return {
        ...Appl,
        presentation: newPresentation
    }
}

export {
    getApplication,
    createNewPresentation,
    putSelectedElement,
    deleteSelectedElement,
    clearSelectedElements,
    clearSelectedElementsOnSlide,
    getDefaultSlide,
    getDefaultText,
    getId,
    setTitle,
    addSlide,
    deleteSlide,
    move,
    addImage,
    addImageFromFile,
    addPrimitives,
    addText,
    changeTextContent,
    changeBackground,
    deleteElements,
    moveElements,
    changeLayer,
    changeWindowSize,
    changeFont,
    changeColor,
    undo,
    redo,
    clearRedo,
    savePresentation,
    openPresentation,
    loadPresentation,
    startViewing,
    stopViewing,
    viewingNextSlide,
    viewingPrevSlide
}