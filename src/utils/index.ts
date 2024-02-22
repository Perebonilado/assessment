import moment from "moment";

export const formatDate = (date: Date, format: string = "DD/MM/YYYY") => {
  return moment.utc(date).format(format);
};

export const formatNumber = (
  num: string | number | undefined,
  decimal: number
): string => {
  return Number(num)?.toLocaleString(undefined, {
    minimumFractionDigits: decimal,
    maximumFractionDigits: decimal,
  });
};

export const formatCurrency = (value: number, currency = "USD"): string => {
  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return currencyFormat.format(value);
};
