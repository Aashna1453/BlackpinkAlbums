import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "BLACKPINK Jennie - [Solo] 1st Solo Album CD+72p PhotoBook+1p Postcard+1p Card+Tracking K-POP Sealed",
      description:
        "'SOLO', presented by Jenny, a member of YG's representative girl group BLACKPINK, creates a different atmosphere from the music shown as BLACKPINK. With more mature, delicate music and performance, and colorful charm, Jenny's first flap of her wings as a 'solo' artist leaping towards the sky, the challenge and flight are expected.",
      price: 15.0,
      image:
      "https://upload.wikimedia.org/wikipedia/en/2/20/Jennie_%E2%80%93_%22Solo%22_%E2%80%93_Digital_Cover.png",
    },
    {
      id: 2,
      title: "LISA - FIRST SINGLE ALBUM LALISA Album (GOLD ver.)",
      description:
        " Lisa of the K-pop girl group Blackpink has dropped her highly-anticipated first solo album.",
      price: 20.0,
      image:
        "https://upload.wikimedia.org/wikipedia/en/2/22/Lisa_-_Lalisa.png",
    },
    {
      id: 3,
      title: "JISOO (BLACKPINK) - FIRST SINGLE",
      description:
        "This spring, JISOO is coming back with her first solo album. Her comeback has created great buzz among the international fans as it is the last solo album of BLACKPINK's.",
      price: 15.0,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5F3lTbsPFFGaKFTrehT9RTxnr0usz6ZNh_aKRJZWHy7yfftKW",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
