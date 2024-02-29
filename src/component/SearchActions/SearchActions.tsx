import React from "react";
import './SearchActions.css'
import {Button, Input, Select} from "antd";
import {Options} from "./const";
let SearchItem = {
    name: '',
    type: ''
}
interface Props {
    search: (search: typeof SearchItem) => void
}
const SearchActions: React.FC<Props> = (props: Props) => {
    const {search} = props;

    const onChange = (value: string) => {
        SearchItem.type = value
    };

    const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

    const changeApplicant = (val : React.ChangeEvent<HTMLInputElement>) => {
        SearchItem.name = val.target.value
    }
    const startSearch = () => {
        search(SearchItem)
    }

    return (
        <div className='searchOptions'>
            <Input placeholder="Input Applicant" style={{width: 200}} onChange={changeApplicant}/>
            <Select
                showSearch
                placeholder="Select a states"
                onChange={onChange}
                filterOption={filterOption}
                options={Options}
                style={{width: 200}}
            />
            <Button onClick={startSearch}>Search</Button>
        </div>
    )
}

export default SearchActions