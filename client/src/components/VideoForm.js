import { useState } from "react"
import { addVideo, getAllVideos } from "../modules/videoManager"

export const VideoForm = ({ getVideos }) => {
    const [newVideo, setNewVideo] = useState({
        title: "",
        description: "",
        url: ""
    })

    const addNewVideoButton = () => {
        const videoToSendToApi = newVideo
        addVideo(videoToSendToApi)
        .then(() => {
            getVideos()
        })
    }


    return <article>
        <form>            
            <input
                type="text"
                placeholder="Title"
                onChange={(changeEvent) => {
                    const copy = { ...newVideo }
                    copy.title = changeEvent.target.value
                    setNewVideo(copy)
                }}
                />
            <input
                type="text"
                placeholder="Description"
                onChange={(changeEvent) => {
                    const copy = { ...newVideo }
                    copy.description = changeEvent.target.value
                    setNewVideo(copy)
                }}
                />
            <input
                type="url"
                placeholder="Url"
                onChange={(changeEvent) => {
                    const copy = { ...newVideo }
                    copy.url = changeEvent.target.value
                    setNewVideo(copy)
                }}
                />
            <button
                onClick={() => addNewVideoButton()}>
                    Add
            </button>
        </form>
    </article>
}