export function parcelFoodbank(obj) {

  let tidyParcel = {
    name: "",
    address: "",
    phone: "",
    email: "",
    imageUrl: "",
    needs: [""],
    distance_mi: "",
  };
  console.log("obj :>> ", obj);

  const arrayOfNeeds = obj.needs ? obj.needs.needs : obj.need.needs

  let finalParcel = {
    ...tidyParcel,
    name: obj.name,
    address: obj.address,
    phone: obj.phone,
    email: obj.email,
    imageUrl: obj.urls.map,
    needs: formatArray(arrayOfNeeds),
    distance_mi: obj.distance_mi ? obj.distance_mi : ``,
  };

  return finalParcel;
}


export const formatArray = (stringArray)=> {

  if(stringArray.indexOf(`\r\n`) > 0) {
    return stringArray.length >= 1 ? stringArray.split(`\r\n`) : []
  }
  return stringArray.length >= 1 ? stringArray.split(`\n`) : []
}

export const parcelArray = (array)=> {
  return array.map((foodbank)=> parcelFoodbank(foodbank))
}