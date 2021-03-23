
const Player = ({ player, handleIncrement, server, score, playerName }) => {
    return (
    <div className="col-md-6 mt-4">
        <div className={`card text-center ${server === player ? "bg-dark text-white" : null}`}>
            <h5 className="card-header">Player: {playerName}</h5>
            <div className="card-body">
            <p className="card-text display-1">{score}</p>
            </div>
            <div className="card-footer">
                <button className="form-control btn btn-success" onClick={handleIncrement}>+</button>
            </div>
        </div>
    </div>
    )
};

export default Player;

