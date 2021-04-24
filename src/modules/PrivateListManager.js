const remoteURL = "http://localhost:8088"

const currentUser = sessionStorage.getItem("recyclePedia_user")

export const getAllRecyclables = () => {
    return fetch(`${remoteURL}/recyclables`)
    .then (result => result.json())
}

export const getMyRecyclables = () => {
    return fetch(`${remoteURL}/lists?userId=${currentUser}&_expand=recyclable`)
    .then (result => result.json())
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

  export const updateRecylable = (editedRecylable) => {
    return fetch(`${remoteURL}/lists?${editedRecylable.id}&_expand=recylable`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedRecylable)
    }).then(data => data.json());
  }