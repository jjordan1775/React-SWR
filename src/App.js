// import React from 'react'
// import { useRequest } from './useRequest'
// import './styles.css'
// import { Pokemon } from './components/Pokemon'

// function App() {
//     const { data: result, error } = useRequest('/pokemon')

//     if (error) return <h1>Something went wrong!</h1>
//     if (!result) return <h1>Loading...</h1>

//     return (
//         <main className='App'>
//             <h1>Pokedex</h1>
//             <div>
//                 {result.results.map((pokemon) => (
//                     <Pokemon key={pokemon.name} pokemon={pokemon} />
//                 ))}
//             </div>
//         </main>
//     )
// }
// export default App

/* pagination functionality */
import React from 'react'
import { usePagination } from './usePagination'
import './styles.css'

export default function App() {
    const { pages, isLoadingMore, loadMore, isReachingEnd } = usePagination(
        '/pokemon'
    )

    return (
        <main className='App'>
            <h1>Pokedex</h1>
            <div>{pages}</div>
            <button
                onClick={loadMore}
                disabled={isLoadingMore || isReachingEnd}
            >
                Load more...
            </button>
        </main>
    )
}