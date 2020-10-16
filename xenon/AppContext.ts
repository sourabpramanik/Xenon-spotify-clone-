import React from "react"

const context= {
    songId: null,
    setsongId: (id: string) => []
}
export const AppContext= React.createContext(context)