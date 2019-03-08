import React, { Component } from 'react'
import './MemeGenerator/MemeGenerator.css'
class MemeGenerator extends Component {
    constructor() {
        super()

        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/2v4p74.jpg",
            allMemeImgs: []
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(jsonResponse => {
            const { memes } = jsonResponse.data
            this.setState({allMemeImgs: memes})
        })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render() {
        return(
            <div>
                <form className="meme-form">
                    <div className="row">
                        <div className="meme-txt-input column">
                            <label>
                                Top Text:
                                <input value={this.state.topText} name="topText" onChange={this.handleChange} type="text" className="meme-form-ti" />
                            </label>
                            <label>
                                Bottom Text:
                                <input value={this.state.bottomText} name="bottomText" onChange={this.handleChange} type="text" className="meme-form-ti" />
                            </label>
                        </div>
                        <div className="meme column">
                            <img src={this.state.randomImg} alt="meme" />
                            <h2>Teste Top</h2>
                            <h2>Teste Bottom</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <button>Gen</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default MemeGenerator