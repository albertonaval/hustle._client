
import { createContext, useState } from "react";

const DarkModeContext = createContext()

const DarkModeProviderWrapper = props => {

    const [darkMode, setDarkMode] = useState(true)

    return <DarkModeContext.Provider value={{ setDarkMode, darkMode }}>{props.children}</DarkModeContext.Provider>
}

export { DarkModeProviderWrapper, DarkModeContext }