// Code YouTubeDebugger Component Here
import React from "react"

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    }
    console.log(this.state)
  }

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: "720p"
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleBitrateClick} className="bitrate">
          Bitrate Button
        </button>
        <button onClick={this.handleResolutionClick} className="resolution">
          Resolution Button
        </button>
      </div>
    )
  }
}
