import {Component} from "react"
class Form extends Component {
    constructor(props){
        super(props)



    this.state = { 
        name1: "",
        name2: "",
        winningScore: "",
        serveChange: "",
     }



    this.handleName1 = this.handleName1.bind(this);
    this.handleName2 = this.handleName2.bind(this);
    this.handleWinningScore = this.handleWinningScore.bind(this);
    this.handleServeChange = this.handleServeChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
}
    handleName1(e) {
        this.setState({name1: e.currentTarget.value})
    }

    handleName2(e) {
        this.setState({ name2: e.currentTarget.value })
    }
    handleWinningScore(e) {
        this.setState({ winningScore: e.currentTarget.value })
    }
    handleServeChange(e) {
        this.setState({ serveChange: e.currentTarget.value })
    }

    handleFormSubmit(e) {
        console.log("worked")
        e.preventDefault();
        this.props.submitForm({...this.state})
    }



    render() {
        console.log(this.props)
        const {name1, name2, winningScore, serveChange} = this.state
        return (
            <>
            <h1>PongPing</h1>
                <form onSubmit={this.handleFormSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Player 1 Name</label>
                    <input type="text" class="form-control" id="name1"onChange={this.handleName1} value={name1}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Player 2 Name</label>
                    <input type="text" class="form-control" id="name2" onChange={this.handleName2} value={name2}  />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Winning Score</label>
                    <input type="text" class="form-control" id="winningScore" onChange={this.handleWinningScore} value={winningScore}  />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Alternate Every</label>
                    <select className="form-control" id="serveChange" onChange={this.handleServeChange} value={serveChange}>
                        <option selected>Choose...</option>
                        <option value="2">2</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                </div>
                    <button type="submit" class="btn btn-primary" >Start Game</button>
            </form>
            </>
        );
    }
}

export default Form;

