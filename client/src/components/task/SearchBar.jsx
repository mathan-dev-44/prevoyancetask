import { memo } from "react";
import Input from "../common/Input";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex-1">
      <Input
        label="Search"
        name="search"
        value={value}
        onChange={onChange}
        placeholder="Search by title..."
      />
    </div>
  );
};

export default memo(SearchBar);
