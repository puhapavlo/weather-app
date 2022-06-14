import {useState, useEffect} from "react";
import axios from "axios";

const useFetch = (url) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState();

    function fetchNow(url) {
        setLoading(true);
        axios.get(url)
            .then((resp) => {
            setLoading(false);
            setData(resp.data);
        })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        if (url) {
            fetchNow(url);
        }
    }, [setData]);

    return {loading, data, error, fetchNow}
}


export default useFetch
