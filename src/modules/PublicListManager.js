const remoteURL = "http://localhost:8088"

export const getAllRecyclables = () => {
    return fetch(`${remoteURL}/recyclables`)
    .then(result => result.json())
}