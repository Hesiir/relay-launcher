import {
    Environment,
    Network,
    RecordSource,
    Store
} from 'relay-runtime'

const _fetchQuery = function fetchQuery(
    operation,
    variables,
    cacheConfig,
    uploadables,
) {
    return fetch(process.env.REACT_APP_API_GRAPHQL, {
        method: 'POST',
        headers: {
            // Add authentication and other headers here
            'credentials': 'include',
            // use graphql content type here
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text, // GraphQL text from input
            variables,
        }),
    }).then(response => {
        return response.json()
    }).catch(error => {
        throw (error)
    })
}

// Create an environment using this network
const AppEnvironment = new Environment({
    network: Network.create(_fetchQuery),
    store: new Store(new RecordSource()),
})

export default AppEnvironment