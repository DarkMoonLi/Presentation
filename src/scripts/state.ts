import { getId } from "./structure"
import { getDefaultText } from "./structure"

export const state = 
{
    title: 'Name of presentation',
    slides: [{
        id: getId(),
        background: '#FFFFFF',
        content: [getDefaultText()]
    }, {
        id: getId(),
        background: '#FF00FF',
        content: [
            getDefaultText(),
            {
                id: getId(),
                type: 'circle',
                primitive: 'circle',
                position: {
                    x: 300,
                    y: 300
                },
                size: {
                    width: 150,
                    height: 150
                },

            }
        ]
    }, {
        id: getId(),
        background: '#32CD32',
        content: [{
            id: getId(),
            type: 'text',
            position: {
                x: 150,
                y: 150
            },
            size: {
                width: 100,
                height: 100
            },
            font: 'fantasy',
            fontSize: 24,
            weight: 400,
            color: '#FF00FF',
            content: 'New text'
        }, {
            id: getId(),
            type: 'rectangle',
            primitive: 'rectangle',
            position: {
                x: 50,
                y: 50
            },
            size: {
                width: 60,
                height: 100
            }
        }]
    }, {
        id: getId(),
        background: '#191970',
        content: [{
            id: getId(),
            type: 'triangle',
            position: {
                x: 200,
                y: 250
            },
            size: {
                width: 200,
                height: 100
            }
        }]
    }]
}