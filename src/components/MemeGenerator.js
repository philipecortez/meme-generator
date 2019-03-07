import React, { Component } from 'react'

class MemeGenerator extends Component {
    constructor() {
        super()

        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/2v4p74.jpg",
            allMemeImgs: []
        }

    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(jsonResponse => {
            const { memes } = jsonResponse.data
            this.setState({allMemeImgs: memes})
        })
    }

    render() {
        return(
            <div>
                <img src={this.state.randomImg} alt='meme' />
                {
                    //continue from 4:47:18 in the video
                }
            </div>
        )
    }
}

export default MemeGenerator