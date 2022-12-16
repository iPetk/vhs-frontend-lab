import { VHS } from "../types";

type Props = {
  searchBase: VHS[];
  setFilteredList: Function;
  setSearching: Function;
};

export const SearchBar = ({
  searchBase,
  setFilteredList,
  setSearching,
}: Props) => {
  // const [searchQuery, setSearchQuery] = useState('');

  //TODO: move this to explore
  const handleChange = (event: any) => {
    // setSearchQuery(event.target.value)
    // console.log(searchQuery)
    if (event.target.value !== "") {
      setSearching(true);
      setFilteredList(
        searchBase.filter((item) => {
          if (
            item.title
              .toLowerCase()
              .includes(event.target.value.toLowerCase()) ||
            item.description
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
          ) {
            return item;
          }

          return false;
        })
      );
    } else if (event.target.value === "") setSearching(false);
  };

  return (
    <div>
      <input
        type="search"
        onChange={handleChange}
        placeholder={"Start typing to search"}></input>
    </div>
  );
};
