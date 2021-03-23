export const reset = () => {
    return {
        type: "RESET",
    }
}

export const score = () => {
    return {
        type: "SCORE",
        player: 2,
    }
}

export const score1 = () => {
    return {
        type: "SCORE",
        player: 1,
    }
}

export const saveSettings = (state) => {
    let {name1, name2, winningScore, serveChange} = state;
    return {
        type: "SAVE_SETTINGS",
        name1: name1,
        name2: name2,
        winningScore: winningScore,
        serveChange: serveChange,
    }
}
// returning an object with a type property and any other properties we want to send to the reducer
