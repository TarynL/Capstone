const remoteURL = "http://localhost:8088"

const currentUser = sessionStorage.getItem("recyclePedia_user")

export const getAllRecyclables = () => {
    return fetch(`${remoteURL}/recyclables`)
    .then(result => result.json())
}
export const addRecyclable = (recyclableObj) => {
    return fetch(`${remoteURL}/recyclables`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recyclableObj)
    })
    .then(response => response.json())
}


