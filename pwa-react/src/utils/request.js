export const consumirAPIPOST = async (query) => {
	var users;
	const API_URL =
		process.env.REACT_APP_GRAPHQL_API_URL || 'http://localhost:4000/graphql';
	await fetch(API_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `
        ${query}
      `,
		}),
	})
		.then((res) => res.json())
		.then((res) => {
			users = res.data.users;
		})
		.catch((error) => {
			// É importante adicionar tratamento de erro para requisições de API
			console.error('Erro ao consumir API GraphQL:', error);
			// Você pode retornar um valor padrão ou lançar o erro novamente
			users = null; // Ou [] dependendo do seu caso
		});

	return users;
};
