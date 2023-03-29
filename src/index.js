const encoder = new TextEncoder("utf-8")
const decoder = new TextDecoder("utf-8")

export async function handleRequest(request) {
    const Quote = await fetch("https://some-random-api.ml/animu/quote")

    const QuoteBody = decoder.decode(await Quote.arrayBuffer() || new Uint8Array())

    const env = JSON.stringify(process.env)

    const body = `Here's a Quote: ${QuoteBody}\n`

    return {
        status: 200,
        headers: { "foo": "bar" },
        body: encoder.encode(body).buffer
    }
}