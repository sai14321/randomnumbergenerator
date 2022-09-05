import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}
  onGenerate = () => {
    this.setState(prevState => {
      return {count: (prevState.count = Math.round(Math.random() * 100))}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="background">
        <div className="container">
          <div className="container2">
            <h1 className="heading">Random number</h1>
            <p className="para">
              Generate a random number in the range of 0 to 100
            </p>
            <button className="btn" type="button" onClick={this.onGenerate}>
              Generate
            </button>
            <h1 className="number">{count}</h1>
          </div>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
