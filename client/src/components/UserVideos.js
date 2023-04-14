import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getUserWithVideos } from "../modules/videoManager";
import Video from "./Video";

export const UserVideos = () => {
    const [user, setUser] = useState();
    const { id } = useParams();

    useEffect(() => {
        getUserWithVideos(id)
            .then(setUser)
    }, []);

    if (!user) {
        return null;
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                {user.videos.map((video) => (
                    <Video video={video} key={video.id} />
                ))}
            </div>
        </div>
    )
}