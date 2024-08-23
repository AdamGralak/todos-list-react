import React from "react";
import { StyledInput } from "../Form/styled";
import { StyledSearchContainer } from "./styled";
import searchQueryParamName from "../TasksList/searchQueryParamName";
import useQueryParameter from "./useQueryParameter";
import useReplaceQueryParameter from "./useReplaceQueryParameter";


const SearchTasks = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();


    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <>
            <StyledSearchContainer>
                <StyledInput
                    type="text"
                    placeholder="Wyszukaj"
                    value={query || ""}
                    onChange={onInputChange}
                />
            </StyledSearchContainer>
        </>
    )
};

export default SearchTasks;