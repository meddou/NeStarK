import { Test } from './Test'

const renderComponent = () => <Test />

describe('Test', () => {
  it('should render', () => {
    expect(renderComponent()).toBeTruthy()
  })
})
