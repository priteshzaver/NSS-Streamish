import { useState } from "react"
import { searchVideos } from "../modules/videoManager";
import VideoResult from "./VideoResult";

const SearchVideos = () => {
    const [searchedVideos, setSearchedVideos] = useState([]);
    const [queryString, setQueryString] = useState("")
    const [sortDescBool, setSortDescBool] = useState([])
    
    return <article>
            <h2>Search</h2>
            <section>
                <input
                    type="text"
                    placeholder="Enter search terms"
                    onChange={(changeEvent) => {
                        setQueryString(changeEvent.target.value)
                    }}
                    />
                <label>
                    Sort by Descending
                    <input
                    type="checkbox"
                    onChange={(changeEvent) => {
                        if (changeEvent.target.checked) {
                            setSortDescBool(true)
                        }
                        else
                        (
                            setSortDescBool(false)
                        )
                    }}
                    />
                </label>
                <button
                    onClick={() => {
                        searchVideos(queryString, sortDescBool)
                            .then(response => {
                                setSearchedVideos(response)
                            })
                    }}>
                    Search
                </button>
            </section>

            <section>
                <div>
                    {searchedVideos.map((video) => (
                        <VideoResult key={video.id}
                            video={video}
                            />
                    ))}
                </div>
            </section>
            
            </article>
}

export default SearchVideos;