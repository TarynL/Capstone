const remoteURL = "http://localhost:8088"

const currentUser = sessionStorage.getItem("recyclePedia_user")

export const getAllRecyclables = () => {
    return fetch(`${remoteURL}/recyclables?userId!=${currentUser}`)
    .then(result => result.json())
}

