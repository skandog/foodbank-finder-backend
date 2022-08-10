import {describe, test, expect} from "@jest/globals";

import {
  dummyObjFoodbanksSearchAddress, 
  keys, 
  entries
} from './dummyObjsForTestOnly.js'

import {
  parcelFoodbank, 
  formatArray, 
  parcelArray 
} from './serve.js'

describe('check that parcelFoodbank correctly formats an obj based on the database structured specified by our schema', 
  ()=> {
    console.log(`in 1st`, Date())
    test(`when provided an object formatted the same as the external API foodbanks/give food it contains the correct keys`,
      () => {expect(Object.keys(parcelFoodbank(dummyObjFoodbanksSearchAddress))).toEqual(keys)}
  
  ),
    console.log(`in 2nd`, Date())
    test(`when provided an object formatted the same as the external API foodbanks/give food it contains the correct entries`,
      () => {expect(Object.entries(parcelFoodbank(dummyObjFoodbanksSearchAddress))).toEqual(entries)}
  
  )}
)