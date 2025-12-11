export type CardType = {
    question:string,
    answer:string,
    points:number
}


export async function fetchCards() {
    try {
        const res = await fetch(`cards.json`)
        const json = await res.json()
        return json as CardType[]
    } catch (error) {
        console.log("Somethingwentwrong!!💩");
        return []
    }
}
