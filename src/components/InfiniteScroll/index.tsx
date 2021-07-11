import { useState, ReactElement, useCallback, ChangeEvent, useRef } from 'react';
import { useBookSearch } from './useBookSearch';
import debounce from 'lodash.debounce';

const InfiniteScroll = (): ReactElement => {
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const { loading, books, hasMore } = useBookSearch(query, currentPage);

    /**
     * Ref 在每次component render都不会被改变。
     * Ref 的改变不会trigger 这个 React component被 re-render
     * Ref 适合于存native DOM element或者 document 的 API
     * Ref 初始是undefined
     */
    const observer = useRef<any>();

    /**
     * 这里是个超级trick！！！
     * 正常useCallback返回一个fixed function，但是如果把这个function付给ReactElement的 ref props的话
     * 每次这个element created的时候这个ref连接着的callback都会被call，而且那个react element的native
     * DOM还会作为第一个argument传进来，就像下面的
     * <div key={index} ref={lastBookElementRef}>{book}</div>
     * 这个例子
     */
    const lastBookElementRef = useCallback((nativeHTMLElementNode) => {
        if (loading) {
            return;
        }
        if (observer.current) {
            (observer.current as any).disconnect();
        }
        observer.current = new IntersectionObserver((entries) => {
            /**
             * entries 是IntersectionObserver所监视的所有element
             * 我们只有一个，所以是entries【0】
             * isIntersecting 就是看这个是不是visible。
            */
            if (entries[0].isIntersecting && hasMore) {
                /**
                 * 如果最后一个element出现，并且还有剩下的data可retrieve
                 * 就变pagination，pagination state一变，自动就retrieve
                */
                setCurrentPage(currentPage => currentPage + 1);
            }
        });
        if (nativeHTMLElementNode) {
            /**
             * observer.current就是IntersectionObserver
             * 这是IntersectionObserver来observe nativeHTMLElementNode 是不是出现在页面上的语法
            */
            observer.current.observe(nativeHTMLElementNode);
        }
    }, [loading, hasMore]);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setCurrentPage(1);
    };

    /**
     * react debounce要用 useCallback来保证是同一个function
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedHandleInput = useCallback(debounce(handleInput, 500), []);
    return (
        <>
            {/**
             * input这里经常 value={query}， query是本地的state，这种类型，类似于two way binding.
             * TODO: 我加了value={query}给下面input怎么打字不变化了呢，我就又去掉了
             */}
            <input type="text" onChange={debouncedHandleInput} />
            {books.map((book: string, index: number) => {
                if (index === books.length - 1) {
                    // 最后一个element这样
                    return (
                        <div key={index} ref={lastBookElementRef}>
                            {book}
                        </div>
                    );
                }
                return <div key={index}>{book}</div>;
            })}
            {loading && <div>Loading...</div>}
        </>
    );
};

export default InfiniteScroll;
