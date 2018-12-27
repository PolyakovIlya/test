import * as actions from './index'
import data from '../data'

describe('todo actions', () => {
    it('get all clouds', () => {
        expect(actions.getAllClouds(data)).toEqual({
            type: 'GET_ALL_CLOUDS',
            clouds: data
        })
    })
})