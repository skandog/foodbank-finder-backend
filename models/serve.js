export function parcelFoodbanks(resk) {
  let result = resk[0];

  let tidyParcel = {
    name: "",
    address: "",
    phone: "",
    email: "",
    imageUrl: "",
    needs: [""],
    distance_mi: "",
  };
  console.log("result.needs :>> ", result);

  const itemsNeeded = result.needs ? result.needs.needs.split(`\n`) : [];

  let finalParcel = {
    ...tidyParcel,
    name: result.name,
    address: result.address,
    phone: result.phone,
    email: result.email,
    imageUrl: result.urls.map,
    needs: itemsNeeded,
    distance_mi: result.distance_mi,
  };

  return finalParcel;
}
