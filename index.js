import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_jN97yT2lDQbBznqgJOWaeTfhAi4lNdF3titcyKIb"
);

export function convertCurrency(from, to, units) {
  return new Promise((resolve, reject) => {
    freecurrencyapi
      .latest({
        base_currency: from,
        currencies: to,
      })
      .then((response) => {
        const valueOfSingleUnit = response?.data?.[to];
        resolve(valueOfSingleUnit * units);
      });
  });
}
