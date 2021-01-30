export const consumirAPIPOST = async(query) => {
  var users;
  await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
        ${query}
      ` 
    }),
  })
  .then(res => res.json())
  .then(res => {
    users = res.data.users;
  });

  return users;
};

