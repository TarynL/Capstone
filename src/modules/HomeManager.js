const remoteURL = "http://localhost:8088"

export const getFactById = (id) => {
   return fetch(`${remoteURL}/facts/${id}`)
    .then(res => res.json())
  }


export const getRandomFact = () => {
    return fetch(`${remoteURL}/facts`)
    .then(result => result.json())
    .then(facts => {
      const randomIndex = Math.floor(Math.random() * facts.length);
      const randomFact = facts[randomIndex];
      return randomFact.id;
  });
}