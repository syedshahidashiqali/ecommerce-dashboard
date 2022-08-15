import moment from "moment";

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

export const serialNumber = (data, index = 0) => {
  let starting = data.limit * (data.page - 1);
  index++;
  return starting + index;
}

export const range = (_start_, _end_) => {
  return (new Array(_end_ - _start_ + 1)).fill(undefined).map((_, k) => k + _start_);
}

export const format_date = (date, format = "LL") => moment(date).format(format);

export const setAccessToken = (token) => {
  localStorage.setItem("TOKEN", token);
}

export const getAccessToken = () => localStorage.getItem("TOKEN");
export const removeAccessToken = () => localStorage.removeItem("TOKEN");