import {useState} from 'react'
const App = () => {
    const [data, setData] = useState('Loading...')
    const [isLoading, setIsLoading] = useState(false)
    
 return (
    <main className="flex gap-4 md:grid md:grid-cols-5 p-4">
        <h1 className=''>{data}</h1>
    </main>
 )
};

export default App;