import initial from "./initial";


const awardWinner = (state) => {

    return state.player1 > state.player2 ? 1 : 2 // this is part of the whoWins method.
}
const whoWins = (state) => {
    return {
        ...state,
        winner: state.player1 >= 21 || state.player2 >= 21 ? awardWinner(state) : 0
    }
}

const score = (state, action) => { // function that adds 1 on to the player that got a point
    // state is initial and action is an object that is passed through from the render dom
    console.log(action)
    return {
        ...state,
        player1: action.player === 1 ? state.player1 + 1 : state.player1, // action.player is specified in actions.js
        player2: action.player === 2 ? state.player2 + 1 : state.player2,
    }
}


const whoServes = (state) => {
    let total = state.player1 + state.player2 // total of points given
    return {
        ...state,
        server: Math.floor(total / 5) % 2 ? 2 : 1, // this is an equation to change 2 to 1 every 5 serves

    }
}

const save = (state, action) => {
    const {name1, name2, serveChange, winningScore} = action
    return {
        ...state,
        name1: name1,
        name2: name2,
        serveChange: serveChange,
        winningScore: winningScore,
        showGame: true,
    }
}
// ones on the left are current state, ones on the right are from the action, 
// resetting the current state to be the action properties


// reducer gets given the current version of the state
// and the action that called it, has a "type" property
const reducer = (state, action) => {
    // depending on what the actions type property is, we can do different things with it
    switch (action.type) {
        case "SCORE": return whoWins(whoServes(score(state, action))); // example of composing functions
        case "RESET": return initial;
        case "SAVE_SETTINGS": return save(state, action); // current state and the action object passed through from actions.js
        default: return state;
    }

}

export default reducer;