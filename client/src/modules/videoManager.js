const baseUrl = '/api/video';
const userUrl = '/api/userprofile';

export const getAllVideos = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
};

export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};

export const getAllVideosAndComments = () => {
    return fetch(`${baseUrl}/GetWithComments`)
        .then((res) => res.json())
};

export const searchVideos = (queryString, sortDescBool) => {
    return fetch(`${baseUrl}/search?q=${queryString}&sortDesc=${sortDescBool}`)
    .then((res) => res.json())
}

export const getVideo = (id) => {
  return fetch(`${baseUrl}/${id}/getvideowithcomments`).then((res) => res.json());
};

export const getUserWithVideos = (id) => {
  return fetch (`${userUrl}/${id}/getuserwithvideos`)
    .then(response => response.json());
}