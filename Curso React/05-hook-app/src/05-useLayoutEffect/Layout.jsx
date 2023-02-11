
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-example/index";

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    
    //console.log ({data, isLoading, hasError}) ;
    const { author, quote } = !!data && data[0];
    

    return (
        <>
            <h1>Beaking Bad Quotes</h1>
            <hr />

            {
                isLoading
                ? <LoadingQuote />
                : <Quote author={ author } quote={ quote } />
            }

            <button 
                onClick={ () => increment() } 
                className="btn btn-primary"
                disabled= { isLoading }>
                Next quote
            </button>
        
        </>
    )
}
