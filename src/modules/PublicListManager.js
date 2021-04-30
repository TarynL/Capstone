const remoteURL = "http://localhost:8088"



export const getAllRecyclables = () => {
    return fetch(`${remoteURL}/recyclables`)
    .then(result => result.json())
}

export const getSingleCyc = (id) => {
    return fetch(`${remoteURL}/recyclables/${id}`)
    .then(res => res.json())
};


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

export const addToList = (listObj) => {
   
    return fetch(`${remoteURL}/lists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(listObj)
    })
    .then(response => response.json())
}

export const deleteRecyclable = (id) => {
    return fetch(`${remoteURL}/lists/${id}`, {
      method: "DELETE"
    }).then(response => response.json())
  }

  

