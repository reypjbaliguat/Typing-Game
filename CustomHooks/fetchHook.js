/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

const fetchHook = (url) => {
    const [data, setData] = useState(Object);
    const [loading, setLoading] = useState(false);

    const refetch = () => {};

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        setLoading(true);
        fetch(url, { signal })
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
        return () => controller.abort();
    }, [url]);
    return { data, loading, refetch };
};

export default fetchHook;
