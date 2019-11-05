import { expect } from 'chai'

import Something from './something.coffee'

describe 'a Something instance, ', =>
  something = null

  beforeEach =>
    something = new Something()

  it 'adds two numbers.', =>
    expect(something.add(13, 29)).to.equal(42)
