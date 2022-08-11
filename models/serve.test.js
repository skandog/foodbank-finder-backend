import {describe, test, expect} from "@jest/globals";

//dummy data for testing purposes only
import {
  dummyObjFoodbanksSearchAddress,
  dummyObjFoodbanksSearchAddressMinimal, 
  keys, 
  entries,
  entriesMinimal

} from './dummyObjsForTestOnly.js'

//funcs from models
import {
  parcelFoodbank, 
  formatArray, 
  parcelArray 
} from './serve.js'

describe('check that parcelFoodbank correctly formats an obj based on the database structured specified by our schema', 
  ()=> {
    console.log(`1st test`, Date())
    test(`when provided an object formatted the same as the external API foodbanks/give food it contains the correct keys`,
      () => {expect(Object.keys(parcelFoodbank(dummyObjFoodbanksSearchAddress))).toEqual(keys)}
  ) ,
    console.log(`1st test`, Date())
    test(`when provided an object formatted the same as the external API foodbanks/give food it contains the correct entries`,
      () => {expect(Object.entries(parcelFoodbank(dummyObjFoodbanksSearchAddress))).toEqual(entries)}  
  ), 
    console.log(`3rd test`, Date())
    test(`when provided an object formatted with just name and address keys it contains the correct keys`,
      () => {expect(Object.keys(parcelFoodbank(dummyObjFoodbanksSearchAddressMinimal))).toEqual(keys)}
    )
    console.log(`4th test`, Date())
    test(`when provided an object formatted with just name and address keys it contains the correct entries`,
      () => {expect(Object.entries(parcelFoodbank(dummyObjFoodbanksSearchAddressMinimal))).toEqual(entriesMinimal)}
    )
}
)