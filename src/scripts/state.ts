import { editor } from "./editor"
import { getApplication } from "./structure"

const newAppl = getApplication()
export let state =
{
    selectedElements: [],
    undo: [],
    redo: [],
    presentation: {
        title: 'Название презентации',
        type: 'presentation',
        slides: [
            {
                id: '1',
                background: '#fff',
                content: [
                    {
                        id: '1',
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
                    }
                ]
            },
            {
                id: '2',
                background: '#fff',
                content: []
            },
            {
                id: '3',
                background: '#fff',
                content: []
            },
            {
                id: '4',
                background: '#fff',
                content: []
            },
            {
                id: '5',
                background: '#fff',
                content: []
            },
            {
                id: '6',
                background: '#fff',
                content: []
            }
        ]
    }
}