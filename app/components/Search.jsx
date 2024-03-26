import Image from 'next/image';
import search from '../assets/svg/search.svg'

const Search = () => {
    return (
        <div className="lg:block lg:max-w-md lg:flex-auto mb-10 ">
        <button
            type="button"
            className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex">
              <Image
                src={search}
                alt="Search"
                className="h-5 w-5"
                width={50}
                height={50} />
              <input
                type="text"
                // value={term}
                placeholder="Search..."
                // onChange={handleChange}
                className="flex-1 focus:border-none focus:outline-none"
              />
            </button>
      </div>
    );
};

export default Search;