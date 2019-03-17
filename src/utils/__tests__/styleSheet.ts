import { ChatOutlineStyle } from '../../context/ChatStylesContext'
import { generateTextShadow } from '../styleSheet'

describe('styleShets', () => {
  it('generateTextShadow() returns are values of text-shadow', () => {
    const outlineStyle: ChatOutlineStyle = {
      color: '#ffffffff',
      width: 2
    }
    const values = generateTextShadow(outlineStyle)
      .trim()
      .split(/,\s*/)

    expect(values).toEqual([
      '-2px -2px 0 #ffffffff',
      '-2px -1px 0 #ffffffff',
      '-2px 0px 0 #ffffffff',
      '-2px 1px 0 #ffffffff',
      '-2px 2px 0 #ffffffff',
      '-1px -2px 0 #ffffffff',
      '-1px -1px 0 #ffffffff',
      '-1px 0px 0 #ffffffff',
      '-1px 1px 0 #ffffffff',
      '-1px 2px 0 #ffffffff',
      '0px -2px 0 #ffffffff',
      '0px -1px 0 #ffffffff',
      '0px 0px 0 #ffffffff',
      '0px 1px 0 #ffffffff',
      '0px 2px 0 #ffffffff',
      '1px -2px 0 #ffffffff',
      '1px -1px 0 #ffffffff',
      '1px 0px 0 #ffffffff',
      '1px 1px 0 #ffffffff',
      '1px 2px 0 #ffffffff',
      '2px -2px 0 #ffffffff',
      '2px -1px 0 #ffffffff',
      '2px 0px 0 #ffffffff',
      '2px 1px 0 #ffffffff',
      '2px 2px 0 #ffffffff'
    ])
  })

  it('generateTextShadow() returns a value of text-shadow', () => {
    const outlineStyle: ChatOutlineStyle = {
      color: '#ffffffff',
      width: 0
    }

    expect(generateTextShadow(outlineStyle)).toBe('none')
  })
})
