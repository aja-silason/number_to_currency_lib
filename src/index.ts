export function ConverteValueToKwanzaCurrency(value: number) {

    const currency = value.toLocaleString("pt-AO", {
        style: "currency",
        currency: "AOA",
    })

    return { currency }

}