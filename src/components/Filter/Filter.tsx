import { useState } from "react";
import _find from "lodash/find";
import _some from "lodash/some";
import _replace from "lodash/replace";
import _dropWhile from "lodash/dropWhile";

import { Button } from "components/Button";
import { Checkbox } from "components/Checkbox";
import { RadioButton } from "components/Radio";
import { Details } from "components/DetailsCard";

import { FilterProps } from "./IFilter";

import CrossIcon from "icons/CrossIcon";
import FilterIcon from "icons/Filters";
import ResetIcon from "icons/Reset";

import "./style.css";

function Filter({ filterGroup }: FilterProps): JSX.Element {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showSelected, setShowSelected] = useState(true);

  const handleFilterUpdate = (e, type, filterLabel) => {
    const currentFilter = `${filterLabel}_${e.target.value}`;

    if (type === "radio") {
      setSelectedFilters((prev) => [
        ...prev.filter((ele) => !ele.startsWith(filterLabel)),
        currentFilter,
      ]);
    } else {
      if (e.target.checked) {
        setSelectedFilters((prev) => [...prev, currentFilter]);
      } else {
        setSelectedFilters((prev) => {
          const index = prev.indexOf(currentFilter);
          if (index > -1) {
            prev.splice(index, 1);
          }
          return [...prev];
        });
      }
    }
  };

  const handleRemoveFilter = (value) => {
    setSelectedFilters((prev) => [...prev.filter((ele) => ele !== value)]);
  };
  return (
    <div className="storybook-filter-container">
      <div className="filters-selection-list">
        <Button label="Filter" variant={showSelected?'primary':'secondary'} onClick={() => setShowSelected((prev) => !prev)}>
          <FilterIcon />
        </Button>
        {showSelected &&
          !!selectedFilters.length &&
          selectedFilters.map((filterLabel) => (
            <Button
              key={filterLabel}
              variant="secondary"
              onClick={() => handleRemoveFilter(filterLabel)}
              label={_replace(filterLabel, "_", " : ")}
            >
              <CrossIcon />
            </Button>
          ))}
      </div>
      <div className="filters-container">
        <div className="filters-header">
          <span>Filter data by</span>
          <span className="reset-icon" onClick={() => setSelectedFilters([])}>
            <ResetIcon /> Reset
          </span>
        </div>
        <ul className="filters">
          {!!filterGroup?.length &&
            filterGroup.map((filter) => {
              return (
                <li key={filter.label}>
                  <Details summary={filter.label}>
                    <p>
                      {filter.type === "radio" ? (
                        <ul className="filter-group">
                          {filter.options.map((radioLabel) => (
                            <li key={radioLabel} className="filter-value">
                              <RadioButton
                                label={radioLabel}
                                value={radioLabel}
                                name={filter.label}
                                checked={_some(selectedFilters, (ele) =>
                                  ele.includes(radioLabel)
                                )}
                                onChange={(e) =>
                                  handleFilterUpdate(
                                    e,
                                    filter.type,
                                    filter.label
                                  )
                                }
                              />
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <ul className="filter-group">
                          {filter.options.map((checkboxLabel) => (
                            <li key={checkboxLabel} className="filter-value">
                              <Checkbox
                                onChange={(e) =>
                                  handleFilterUpdate(
                                    e,
                                    filter.type,
                                    filter.label
                                  )
                                }
                                label={checkboxLabel}
                                checked={_some(selectedFilters, (ele) =>
                                  ele===`${filter.label}_${checkboxLabel}`
                                )}
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </p>
                  </Details>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
