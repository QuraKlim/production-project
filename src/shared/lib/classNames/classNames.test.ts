import { classNames } from './classNames'

describe('classNames', () => {
  test('With first parametr', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('With additional params', () => {
    const expected = 'someClass class1 class2'
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
  })

  test('With  mods', () => {
    const expected = 'someClass class1 class2 hovered scrollable'
    expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected)
  })

  test('With false mod', () => {
    const expected = 'someClass class1 class2 scrollable'
    expect(classNames('someClass', { hovered: false, scrollable: true }, ['class1', 'class2'])).toBe(expected)
  })

  test('With undefined mod', () => {
    const expected = 'someClass class1 class2 hovered'
    expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe(expected)
  })
})
