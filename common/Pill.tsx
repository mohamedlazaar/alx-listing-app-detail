// import { FilterProps } from '@/interfaces'
interface PillProps {
    filter: string
  }
  const Pill: React.FC<PillProps> = ({ filter }) => {
    return (
      <button className="px-[24px] py-[10px] rounded-[30px] border-[1.5px] border-[#346d96] text-[#346d69] text-[15px] leading-[23.75px] active:bg-gray-800 hover:text-white hover:bg-gray-800 active:text-white ">
        {filter}
      </button>
    )
  }

  export default Pill;
