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

/**
 * @param {Presentation} presentation 
 * @param {string} newTitle 
 * @return {Presentation}
 */
function setTitle(presentation, newTitle) {

}

function addSlide(){}