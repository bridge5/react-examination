import React from "react";

export const POS_TYPES = {
    SF:'SF',
    SG:'SG',
    PF:'PF',
    PG:'PG'
}

export const Options = Object.keys(POS_TYPES).map((postion, index) => {
    return (
      <option key={index} value={postion}>
        {postion}
      </option>
    );
  });
  