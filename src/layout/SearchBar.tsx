import MagnifierSvg from '@/components/svgComponent/MagnifierSvg';
import useScroll from '@/hooks/useScroll';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { getSearchPath } from '@/routes/path.ts';

export default function SearchBar() {
  const isScrolled = useScroll();
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState('');

  const handleSearch = () => {
    if (searchWord) navigate(getSearchPath(searchWord));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  return (
    <div
      className={`z-10 bg-main-gradiant-bottom top-0  ${isScrolled ? 'sticky h-[64px] py-2 px-5' : 'h-[104px] p-5'}`}
    >
      <div className="relative">
        <input
          type="text"
          placeholder="궁금한 IT용어를 검색해 보세요."
          className="w-full h-[48px] rounded-[16px] bg-white/20 ring-1 ring-white/40 focus:ring-white/60 pl-5 py-4 outline-none text-white placeholder:text-[#C8CAEB]"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <button onClick={handleSearch}>
          <MagnifierSvg className="absolute right-[20px] top-[12px]" />
        </button>
      </div>
    </div>
  );
}
