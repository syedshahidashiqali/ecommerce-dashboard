

export const calculateTotal = (arr) => {
  const prices = arr?.map(price => price?.price)
  const qtys = arr?.map(qty => qty?.quantity)
  const totalAmount = prices?.reduce((previousValue, currentValue, index) => {
    return (previousValue) + (currentValue * qtys[index])
  }, 0);
  return totalAmount
  // console.log(totalAmount)
}

export const ratingFilter = (arr, count) => {
  const rate = arr?.filter((rating) => rating?.rating === count);
  return rate?.length;
};

