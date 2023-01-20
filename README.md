# Plan

## Components

- Main.js
  - Controls.js
    -Select.js
    -onChange - handleTypeChange (hook)
    - Query.js
  - PokeCard.js

## usePokeman hook

### state:

    -[pokemon]
    -[types]
    -[selectedType]
    -[query]???
    -useEffect
        -types
        -pokes
    -function
        -handleTypeChange(type)
            -set selectedType state
            -makes API call with filter
            -updates poke state with API response data
