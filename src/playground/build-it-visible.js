class VisibilityTaggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: false
        }
        this.handleTaggleVisibility = this.handleTaggleVisibility.bind(this)
    }
    
    handleTaggleVisibility() {
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Visibility Taggle</h1>
                <button onClick={this.handleTaggleVisibility}>{this.state.visibility ? 'Hide' : 'Show'} Details</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey, These are some details you can now see!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityTaggle />, document.getElementById('app'))
