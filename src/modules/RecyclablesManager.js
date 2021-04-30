const remoteURL= "http://localhost:8088"

export const getSingleRecyclable = (id) => {
    return fetch(`${remoteURL}/recyclables/${id}`)
    .then(res => res.json())
};
