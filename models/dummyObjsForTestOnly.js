// dummy arrays etc for checking object structure

export const strN = "Toilet Roll\nFruit Squash\nSmalls Jars Of Pasta Sauce\nMicrowave Rice Sachets\nInstant Hot Chocolate\nOil\nBiscuits\nBaked Beans\nInstant Soup Sachets\nUHT Milk Semi Skimmed And Full Fat\nTinned Meat (Pork Free)"

export const strRN = "incomplete"

export const keys = [
  "name",
  "address",
  "postcode",
  "phone",
  "email",
  "imageUrl",
  "needs",
  "distance_mi",
  "lat_lng",
  "homepage"
]

export const entriesMinimal = [
  ["name", "Vauxhall"],
  ["address","105 Tyers Street\r\nVauxhall\r\nLondon\r\nSE11 5HS"],
  ["postcode",undefined],
  ["phone",undefined],
  ["email",undefined],
  ["imageUrl", undefined],
  ["needs", []],
  ["distance_mi", ""],
  ["lat_lng", undefined],
  ["homepage",""]
]

export const entries = [
  ["name", "Vauxhall"],
  ["address","105 Tyers Street\r\nVauxhall\r\nLondon\r\nSE11 5HS"],
  ["postcode","SE11 5HS"],
  ["phone","07398860992"],
  ["email","foodbank@christchurchlondon.org"],
  ["imageUrl", "https://www.givefood.org.uk/needs/at/vauxhall/map.png"],
  ["needs", [`Toilet Roll`, `Fruit Squash`, `Smalls Jars Of Pasta Sauce`, `Microwave Rice Sachets`, `Instant Hot Chocolate`,`Oil`, `Biscuits`, `Baked Beans` ,`Instant Soup Sachets`, `UHT Milk Semi Skimmed And Full Fat`, `Tinned Meat (Pork Free)`]],
  ["distance_mi", 0.46],
  ["lat_lng", "51.4882855,-0.1189492"],
  ["homepage","https://vauxhall.foodbank.org.uk"]
]









//dummy Objs for testing purposes only

export const dummyObjFoodbanksSearchAddressMinimal =

  {
    name: "Vauxhall",
    address: "105 Tyers Street\r\nVauxhall\r\nLondon\r\nSE11 5HS"
  }


export const dummyObjFoodbanksSearchAddress =

  {
    name: "Vauxhall",
    alt_name: null,
    slug: "vauxhall",
    phone: "07398860992",
    secondary_phone: null,
    email: "foodbank@christchurchlondon.org",
    address: "105 Tyers Street\r\nVauxhall\r\nLondon\r\nSE11 5HS",
    postcode: "SE11 5HS",
    lat_lng: "51.4882855,-0.1189492",
    distance_m: 734,
    distance_mi: 0.46,
    needs: {
      id: "f5c9adf0",
      needs: "Toilet Roll\nFruit Squash\nSmalls Jars Of Pasta Sauce\nMicrowave Rice Sachets\nInstant Hot Chocolate\nOil\nBiscuits\nBaked Beans\nInstant Soup Sachets\nUHT Milk Semi Skimmed And Full Fat\nTinned Meat (Pork Free)",
      found: "2022-08-09T12:36:54.693",
      number: 11
    },
    urls: {
      self: "https://www.givefood.org.uk/api/2/foodbank/vauxhall/",
      html: "https://www.givefood.org.uk/needs/at/vauxhall/",
      homepage: "https://vauxhall.foodbank.org.uk",
      shopping_list: "https://vauxhall.foodbank.org.uk/give/donate-food/",
      map: "https://www.givefood.org.uk/needs/at/vauxhall/map.png"
    },
    charity: {
      registration_id: "1111950",
      register_url: "https://register-of-charities.charitycommission.gov.uk/charity-details/?regid=1111950&subid=0"
    },
    politics: {
      parliamentary_constituency: "Vauxhall",
      mp: "Florence Eshalomi",
      mp_party: "Labour Co-operative",
      mp_parl_id: 4870,
      ward: "Prince's",
      district: "Lambeth",
      urls: {
        self: "https://www.givefood.org.uk/api/2/constituency/vauxhall/",
        html: "https://www.givefood.org.uk/needs/in/constituency/vauxhall/"
      }
    }
  }
