import {useState, useEffect} from "react"

// Fetch content custom hook.
// Option passes down its `refresh` state, which triggers re-fetching when updated.
// Each content component provides its own API URL.
const useContent = (url, refresh) => {
    const [content, setContent] = useState([]);

    useEffect( () => {
         const newContent = async () =>
            {const response = await fetch(url);
            const result = await response.json();
            setContent(result);
        }
        newContent();
    }, [refresh, url])

    return content;
}

export default useContent