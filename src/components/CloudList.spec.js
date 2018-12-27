import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import CloudList from "./CloudList";
import CloudItem from "./CloudItem";

const setup = propsOverrides => {
    const props = {
        clouds: [{
            "id": "1751295897__Odessa",
            "label": "Odessa",
            "volume": 165,
            "type": "topic",
            "sentiment": {
                "negative": 3,
                "neutral": 133,
                "positive": 29
            },
            "sentimentScore": 65,
        }]
    }

    const renderer = createRenderer()
    renderer.render(<CloudList {...props} />)
    const output = renderer.getRenderOutput()
    return {
        props,
        output,
        renderer
    }
}

describe('components', () => {
    describe('CloudList', () => {
        it('should render correctly', () => {
            const { output, props } = setup()
            expect(output.type).toBe('ul')

            const [cloudItem] = output.props.children
            expect(cloudItem.type).toBe(CloudItem)
            expect(cloudItem.props.cloud).toBe(props.clouds[1])
        })
    })
})
