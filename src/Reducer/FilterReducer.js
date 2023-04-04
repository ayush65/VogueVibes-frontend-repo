/** @format */

const filterReducer = (filterState, action) => {
  let filterStateCopy = { ...filterState };
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      filterStateCopy = {
        ...filterStateCopy,
        product: action.payload.products,
        default: action.payload.products,
      };
      break;

    case "CLEAR_FILTER":
      filterStateCopy = {
        product: filterStateCopy.default,
        price: 30,
        category: [],
        rating: 5,
        sort: null,
        default: filterStateCopy.default,
      };
      break;

    case "SORT_CATEGORY":
      filterStateCopy = {
        ...filterStateCopy,
        category: [
          ...(filterStateCopy.category.includes(action.payload.category)
            ? filterStateCopy.category.filter(
                (category) => category !== action.payload.category
              )
            : [...filterStateCopy.category, action.payload.category]),
        ],
      };
      filterStateCopy = {
        ...filterStateCopy,
        product: [
          ...(filterStateCopy.category.length
            ? filterStateCopy.default.filter((item) =>
                filterStateCopy.category.includes(item.category)
              )
            : filterStateCopy.default),
        ],
      };
      break;

    // case "SORT_CATEGORY":
    //   console.log(action.payload.category);
    //   console.log(filterStateCopy.product);

    //   filterStateCopy = {
    //     ...filterStateCopy,
    //     product: filterStateCopy.product.filter((product) =>
    //       action.payload.category.some(
    //         (category) => category === product.category
    //       )
    //     ),

    //     default: action.payload.products,
    //   };
    //   break;
    case "SORT_FILTER":
      filterStateCopy = {
        ...filterStateCopy,
        sort: action.payload.sort,
        product:
          action.payload.sort === "LOW_TO_HIGH"
            ? [...filterStateCopy.product].sort(
                (a, b) => b.discountedPrice - a.discountedPrice
              )
            : [...filterStateCopy.product].sort(
                (a, b) => a.discountedPrice - b.discountedPrice
              ),
      };
      break;
    default:
      break;
  }

  return { ...filterStateCopy };
};

export { filterReducer };
