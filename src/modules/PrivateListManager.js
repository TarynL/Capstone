const remoteURL = "http://localhost:8088"

const currentUser = sessionStorage.getItem("recyclePedia_user")



export const getMyRecyclables = () => {
    return fetch(`${remoteURL}/lists?userId=${currentUser}&_expand=recyclable`)
    .then (result => result.json())
}

export const deleteRecyclable = (id) => {
    return fetch(`${remoteURL}/lists/${id}`, {
      method: "DELETE"
    }).then(response => response.json())
  }

  export const updateRecyclable = (editedRec) => {
    // console.log(editedRecyclable.recyclableId)
    return fetch(`${remoteURL}/lists/${editedRec.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedRec)
    }).then(data => data.json());
  }

  // export const getCycById = (id) => {
  //   console.log(id)
  //   return fetch (`${remoteURL}/lists/${id}`)
  //   .then (result => result.json())
  // }

  export const getCycById = (id) => {

    return fetch(`${remoteURL}/lists/${id}`)
    .then (res => res.json())
  }