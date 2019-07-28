import React from "react";

//import any components needed
import {specials} from "../../data.js";
import {SpecialButton} from "./SpecialButton.js";

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);

  return (
    <div>
      {
        specials.map(special => {
          SpecialButton(special);
        })
      }
    </div>
  );
};
