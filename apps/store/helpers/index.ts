export const currencySymbol = (currency) => {
  return currency === 'ARS' ? '$' : 'R$';
}

export const formatPrice = (amount,decimals) => {
  return amount.toFixed(decimals);
}
