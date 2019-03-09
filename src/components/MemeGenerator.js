import React, { Component } from 'react'
import './MemeGenerator/MemeGenerator.css'
import { EventEmitter } from 'events';
class MemeGenerator extends Component {
    constructor() {
        super()

        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/2v4p74.jpg",
            allMemeImgs: []
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.getRandomImg = this.getRandomImg.bind(this)
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

    handleSubmit(event) {
        event.preventDefault()
        this.setState({randomImg: this.getRandomImg()})
    }

    getRandomImg() {
        const max = this.state.allMemeImgs.length
        const imgIndex = Math.floor(Math.random() * Math.floor(max));
        const {url} = this.state.allMemeImgs[imgIndex]
        return url
    }

    render() {
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
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
                            <h2>{this.state.topText || "Top Text"}</h2>
                            <h2>{this.state.bottomText || "Bottom text"}</h2>
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