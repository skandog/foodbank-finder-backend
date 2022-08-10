export function parcelFoodbank(obj) {

  let tidyParcel = {
    name: "",
    address: "",
    postcode: "",
    phone: "",
    email: "",
    imageUrl: "",
    needs: [""],
    distance_mi: "",
    lat_lng: "",
    homepage: ""
  };
  console.log("obj :>> ", obj);

  const stringOfNeeds = obj.needs ? obj.needs.needs : obj.need ? obj.need.needs : []

  let finalParcel = {
    ...tidyParcel,
    name: obj.name,
    address: obj.address,
    postcode: obj.postcode,
    phone: obj.phone,
    email: obj.email,
    imageUrl: obj.urls.map,
    needs: formatArray(stringOfNeeds),
    distance_mi: obj.distance_mi ? obj.distance_mi : ``,
    lat_lng: obj.lat_lng,
    homepage: obj.urls?.homepage ? obj.urls?.homepage: ``
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