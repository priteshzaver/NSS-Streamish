import { getToken } from "./authManager";

const baseUrl = '/api/video';
const userUrl = '/api/userprofile';

export const getAllVideos = () => {
  return getToken().then((token) => 
  fetch(baseUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    },
  })
  .then((res) => res.json())
  ) 
};

export const addVideo = (video) => {
  return getToken().then((token) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(video),
  }))
};

export const getAllVideosAndComments = () => {
    return getToken().then((token) => 
    fetch(`${baseUrl}/GetWithComments`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => res.json())
    )
};

export const searchVideos = (queryString, sortDescBool) => {
    return getToken().then((token) => 
    fetch(`${baseUrl}/search?q=${queryString}&sortDesc=${sortDescBool}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => res.json())
    )
}

export const getVideo = (id) => {
  return getToken().then((token) =>  
  fetch(`${baseUrl}/${id}/getvideowithcomments`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((res) => res.json())
  )
};

export const getUserWithVideos = (id) => {
  return getToken().then((token) => 
  fetch (`${userUrl}/${id}/getuserwithvideos`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
  )
}