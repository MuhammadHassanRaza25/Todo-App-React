import { createContext, useState } from "react";
export let themeContext = createContext()

function context({children}){
    let [theme, setTheme] = useState('light')
    return(
        <themeContext.Provider value={{theme, setTheme}}>
        {children}
        </themeContext.Provider>
    )
}

export default context;