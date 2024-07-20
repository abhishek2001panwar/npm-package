import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_kBCL0Wc5p8GTpwkUM5IYeIMsTRRPMnnv9ieW8aMd');


export async function getCurrencyRates(fromCurrency , toCurrency , amount) {
    const response = await freecurrencyapi.latest({
        base_currency:  fromCurrency,
        currencies: toCurrency,
    });
    return response.data[toCurrency] * amount;
}
