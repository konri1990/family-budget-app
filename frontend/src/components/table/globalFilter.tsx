import { Dispatch, SetStateAction, useState } from "react";
import { FilterValue, useAsyncDebounce } from "react-table"; // new

// Define a UI for filtering

export interface IGlobalFilterProps {
  globalFilter: FilterValue;
  setGlobalFilter: Dispatch<SetStateAction<FilterValue>>;
  placeholder: string;
}

export const GlobalFilter = (props: IGlobalFilterProps) => {
  const [value, setValue] = useState(props.globalFilter);
  const onChange = useAsyncDebounce((value) => {
    props.setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span className="flex justify-between  pt-10 pb-10 ">
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        className="w-8/12 rounded-xl border p-4 text-gray-500 cursor-pointer"
        type="search"
        placeholder={props.placeholder || "Search..."}
      />
    </span>
  );
};
