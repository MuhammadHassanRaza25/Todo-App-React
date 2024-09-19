import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext()

function ThemeContextProvider({children}){
    const [theme, setTheme] = useState("light")
    return(
      <ThemeContext.Provider value={{setTheme,theme}}>
         {children}
      </ThemeContext.Provider>
    )
}
// summary: value ki help se all childrens ko theme,setTheme ka variable&function mil jayega.

export default ThemeContextProvider;