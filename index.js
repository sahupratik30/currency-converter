import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_jN97yT2lDQbBznqgJOWaeTfhAi4lNdF3titcyKIb"
);

// recieve options to convert currency
export function convertCurrency(options) {
  let { from, to, units } = options;

  return new Promise((resolve) => {
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
