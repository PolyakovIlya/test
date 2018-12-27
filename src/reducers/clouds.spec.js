import clouds from './clouds'
import data from '../data'

describe('clouds reducer', () => {
    it('should handle initial state', () => {
        expect(
            clouds(undefined, {})
        ).toEqual([])
    })

    it('should handle all clouds', () => {
        expect(
            clouds([], {
                type: 'GET_ALL_CLOUDS',
                clouds: data
            })
        ).toEqual(data)
    })
})