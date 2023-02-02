
import { useContext, useEffect, useState } from "react"
import { DarkModeContext } from "../../context/darkmode.context"
import quotesData from "./data.json"



const Quote = () => {
    const [quotes, setQuotes] = useState()
    const [randomNum, setRandomNum] = useState()

    const { darkMode } = useContext(DarkModeContext)

    const updateRandomNum = () => {
        setRandomNum(Math.floor(Math.random() * quotesData.length))
    }

    useEffect(() => {
        setQuotes(quotesData)
        updateRandomNum()
    })

    const genNewQuote = e => {
        e.preventDefault()
        updateRandomNum()
    }

    return (
        <>
            {quotes && randomNum !== undefined && (
                <section className="pb-2">
                    <h3 className="pt-4 pb-3">Quote of the day </h3>
                    <div className={!darkMode ? "Callout py-3" : "Callout-dark py-3"}>
                        <button onClick={genNewQuote} className="quoteBtn">
                            🍌
                        </button>
                        <div>
                            <p>
                                "{quotes[randomNum].phrase}" - {quotes[randomNum].author} - 2023
                            </p>
                        </div>
                    </div>
                </section>
            )
            }
        </>
    )



}

export default Quote