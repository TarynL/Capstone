// variable for json server local host 
const remoteURL = "http://localhost:8088"

// variable for logged-in user 
const currentUser = sessionStorage.getItem("recyclePedia_user")

// fetch call for loggedIn users list of recyclables and expand on each recyclable 
export const getMyRecyclables = () => {
    return fetch(`${remoteURL}/lists?userId=${currentUser}&_expand=recyclable`)
    .then (result => result.json())
}

// fetch call for recyclables by id to be deleted 
export const deleteRecyclable = (id) => {
    return fetch(`${remoteURL}/lists/${id}`, {
      method: "DELETE"
    }).then(response => response.json())
  }

  // fetch call for recyclables by it to be edited 
  export const updateRecyclable = (editedRec) => {
   
    return fetch(`${remoteURL}/lists/${editedRec.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedRec)
    }).then(data => data.json());
  }

  // fetch call for get private list obj by id
  export const getCycById = (id) => {
    return fetch(`${remoteURL}/lists/${id}`)
    .then (res => res.json())
  }