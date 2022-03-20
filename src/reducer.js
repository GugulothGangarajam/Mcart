import { AccessTimeRounded } from "@material-ui/icons";

export const initialState = {
  basket: [],
  user: null,
  favourites: [],
  clothes: [
    {
      img: "https://lp2.hm.com/hmgoepprod?set=source[/03/b8/03b892db92635631006cea14c25454cfebe0028f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
      discount: "20% OFF",
      productName: "Printed T-shirt",
      productPrice: "599",
      id: "123345621",
      isLiked: false,
      cloth: "new",
    },
    {
      img: "https://lp2.hm.com/hmgoepprod?set=source[/8c/76/8c763e7b8fe99de28f76a657615514aa6f462a86.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
      discount: "20% OFF",
      productName: "Relaxed Fit T-shirt",
      productPrice: "799",
      id: "189345986",
      isLiked: false,
      cloth: "new",
    },
    {
      img: "https://lp2.hm.com/hmgoepprod?set=source[/1f/58/1f58432d30ad8cb60a85b0b0dc17aa35139dada6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
      discount: "20% OFF",
      productName: "Mesh short",
      productPrice: "1499",
      id: "435433456",
      isLiked: false,
      cloth: "new",
    },
    {
      img: "https://lp2.hm.com/hmgoepprod?set=source[/00/98/00986cff9f542778a7a8f00af04892805b772006.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
      discount: "20% OFF",
      productName: "Pyjama and T-shirt and shorts",
      productPrice: "1499",
      id: "671233123",
      isLiked: false,
      cloth: "new",
    },
    {
      img: "https://lp2.hm.com/hmgoepprod?set=source[/ba/ca/bacac0226446ca747f17cc4c9661a79556fde9e6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
      discount: "20% OFF",
      productName: "Pique shirt Muscle Fit",
      productPrice: "1299",
      id: "765378456",
      isLiked: false,
      cloth: "new",
    },
  ],
  winterc: [
    {
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff3%2F7a%2Ff37aee371f02fe06744019c8bac509c1d17d8e2a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      discount: "30% OFF",
      productName: "T-shirt Long Fit",
      productPrice: "699",
      isLiked: false,
      id: "90985632",
      cloth: "t-shirt",
    },
    {
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa2%2Fd0%2Fa2d023e6aea3a21ea69c93b351fdcb3368a95611.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      discount: "30% OFF",
      productName: "Printed T-shirt",
      productPrice: "599",
      isLiked: false,
      id: "87564325",
      cloth: "t-shirt",
    },
    {
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F91%2Fa0%2F91a050fbaecd1caba940f6adfc631fb84dbecccc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      discount: "30% OFF",
      productName: "Round-neck T-shirt Regular Fit",
      productPrice: "399",
      id: "78923632",
      isLiked: false,
      cloth: "t-shirt",
    },
    {
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F65%2Fab%2F65ab70bf06b0c7b71880daf30a44ec7b1d9c16a7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      discount: "30% OFF",
      productName: "Round-neck T-shirt Regular Fit",
      productPrice: "399",
      id: "56325632",
      isLiked: false,
      cloth: "t-shirt",
    },
    {
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4d%2Fe5%2F4de5ed0a018981a9b3072dd91672be3cc00d4088.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_longsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      discount: "30% OFF",
      productName: "Jerey top Silm Fit",
      productPrice: "799",
      id: "12988932",
      isLiked: false,
      cloth: "t-shirt",
    },
  ],
  hoodies: [
    {
      img: "https://lp2.hm.com/hmgoepprod?set=source[/82/f9/82f9a0d1871d98ec4b991112a4008094c8c3c595.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[z],hmver[3]&call=url[file:/product/main]",
      discount: "10% OFF",
      productName: "Relaxed Fit Hoodie",
      productPrice: "1499",
      id: "30563287",
      isLiked: false,
      cloth: "hoodie",
    },
    {
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F88%2F0a%2F880a3148c00aa2ff50a8c70929ce235f40d54bed.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      discount: "10% OFF",
      productName: "Relaxed Fit Hoodie",
      productPrice: "1499",
      id: "37563212",
      isLiked: false,
      cloth: "hoodie",
    },
    {
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F19%2F9f%2F199fdc92e45eaccf8536092a25b4d0e65938c0d9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      discount: "10% OFF",
      productName: "Relaxed Fit Hoodie",
      productPrice: "2299",
      id: "29566587",
      isLiked: false,
      cloth: "hoodie",
    },
    {
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F06%2Fab%2F06ab3b2ea544adcedd5394f31bcfb34fe84713d9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_sweatshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      discount: "10% OFF",
      productName: "Sweatshirt Relaxed Fit",
      productPrice: "799",
      id: "88758239",
      isLiked: false,
      cloth: "hoodie",
    },
    {
      img: "https://lp2.hm.com/hmgoepprod?set=source[/1e/b3/1eb38d39131a36c05933c4485b675106b137aba3.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
      discount: "10% OFF",
      productName: "Hoodie",
      productPrice: "1999",
      id: "47563229",
      isLiked: false,
      cloth: "hoodie",
    },
  ],
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, basketItem) => +basketItem.productPrice + +amount, 0);

export const actionTypes = {
  SET_USER: "SET_USER",
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
  ADD_TO_FAVOURITE: "ADD_TO_FAVOURITE",
  REMOVE_FROM_FAVOURITE: "REMOVE_FROM_FAVOURITE",
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("not find");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "ADD_TO_FAVOURITE":
      let key = "";
      let newProducts = [];
      // console.log(action.item.cloth);
      if (action.item.cloth === "new") {
        newProducts = state.clothes.map((product) => {
          if (product.id === action.item.id) {
            return {
              ...product,
              isLiked: !action.item.isLiked,
            };
          }
          return product;
        });
        key = "clothes";
        // console.log(newProducts);
      } else if (action.item.cloth === "t-shirt") {
        newProducts = state.winterc.map((product) => {
          if (product.id === action.item.id) {
            return {
              ...product,
              isLiked: !action.item.isLiked,
            };
          }
          return product;
        });
        // console.log(newProducts);
        key = "winterc";
      } else if (action.item.cloth === "hoodie") {
        newProducts = state.hoodies.map((product) => {
          if (product.id === action.item.id) {
            return {
              ...product,
              isLiked: !action.item.isLiked,
            };
          }
          return product;
        });
        // console.log(newProducts);
        key = "hoodies";
      }
      return {
        ...state,
        favourites: [
          ...state.favourites,
          { ...action.item, isLiked: !action.item.isLiked },
        ],
        [key]: newProducts,
      };

    case "REMOVE_FROM_FAVOURITE":
      let RemoveProducts = [];
      let array = "";
      if (action.item.cloth === "new") {
        RemoveProducts = state.clothes.map((product) => {
          if (product.id === action.item.id) {
            return {
              ...product,
              isLiked: !action.item.isLiked,
            };
          }
          return product;
        });
        array = "clothes";
      } else if (action.item.cloth === "hoodie") {
        RemoveProducts = state.hoodies.map((product) => {
          if (product.id === action.item.id) {
            return {
              ...product,
              isLiked: !action.item.isLiked,
            };
          }
          return product;
        });
        array = "hoodies";
      } else {
        RemoveProducts = state.winterc.map((product) => {
          if (product.id === action.item.id) {
            return {
              ...product,
              isLiked: !action.item.isLiked,
            };
          }
          return product;
        });
        array = "winterc";
      }

      let newFavourite = [...state.favourites];
      const Index = state.favourites.findIndex(
        (favouriteItem) => favouriteItem.id === action.item.id
      );
      console.log(Index);
      if (Index >= 0) {
        newFavourite.splice(Index, 1);
      } else {
        console.log("not find");
      }

      return {
        ...state,
        favourites: newFavourite,
        [array]: RemoveProducts,
      };

    // return {
    //   ...state,
    //   favourites: newFavourite,
    // };

    default:
      return state;
  }
};

export default reducer;
