import { useEffect, useState } from 'react';
import axios from 'axios';

export const useBookSearch = (query: string, currentPage: number) => {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState<any>([]);
    const [hasMore, setHasMore] = useState(false);

    const queryBooks = async (query: string, currentPage: number) => {
        setLoading(true);
        try {
            /**
             *  URLSearchParams把param专成URL里面的query string
                像这样的： 'http://myapi.com/orders?order_id=1'

                const response = await fetch(
                    'http://openlibrary.org/search.json' +
                        new URLSearchParams({
                            q: query,
                            page: currentPage + '',
                        }),
                    {
                        mode: 'no-cors',
                    }
                );
                本来是想用fetch的，但是被CORS给block了
                所以就按照教程换用了axios，
                TODO：为什么axios没有cors，fetch有？
            */

            const response = await axios({
                method: 'GET',
                url: 'http://openlibrary.org/search.json',
                params: { q: query, page: currentPage },
            });
            const data = response.data;

            setBooks((alreadyHadBooks: any) => [
                ...alreadyHadBooks,
                ...data.docs.map((book: { title: any }) => book.title),
            ]);

            /**
             * 看看是不是还有剩下的data
             */
            setHasMore(data.docs.length > 0);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    /**
     * 改变query string的话就清空book list
    */
    useEffect(() => {
        setBooks([]);
    }, [query]);

    useEffect(() => {
        void queryBooks(query, currentPage);
    }, [query, currentPage]);

    /**
     * 一般custom hook最后都是把自己的state封装到一个object里然后返回出去，让外面的人能收到
     * 这样就主要靠state我感觉
     * 因为state是可以在custom hook里self sustain。
     */
    return {
        loading,
        books,
        hasMore,
    };
};
