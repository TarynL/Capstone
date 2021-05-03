// variable for json server 
const remoteURL = "http://localhost:8088"

// fetch call for facts by id 
export const getFactById = (id) => {
  return fetch(`${remoteURL}/facts/${id}`)
    .then(res => res.json())
}

// fetch call for randomizing facts 
export const getRandomFact = () => {
  return fetch(`${remoteURL}/facts`)
    .then(result => result.json())
    .then(facts => {
      const randomIndex = Math.floor(Math.random() * facts.length);
      const randomFact = facts[randomIndex];
      return randomFact.id;
    });
}