// variable for json server local host 
const remoteURL = "http://localhost:8088"

// fetch call for all recyclables for public page 
export const getAllRecyclables = () => {
    return fetch(`${remoteURL}/recyclables`)
    .then(result => result.json())
}

// fetch call for recyclables by id 
export const getSingleCyc = (id) => {
    return fetch(`${remoteURL}/recyclables/${id}`)
    .then(res => res.json())
};

// fetch call for recyclables to add a new one to public list
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

// fetch call for recyclables to add to private list 
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

// fetch call to delete recyclable off personal list by id 
export const deleteRecyclable = (id) => {
    return fetch(`${remoteURL}/lists/${id}`, {
      method: "DELETE"
    }).then(response => response.json())
  }

  

