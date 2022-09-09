// https://www.codewars.com/kata/5a95947f4a6b342636000173

import React from "react";

export const EasterEgg = ({ name }) => <li>{name}</li>;

export const EggList = ({ eggs }) => (
  <ul>
    {eggs.map((egg, index) => (
      <EasterEgg key={index} name={egg} />
    ))}
  </ul>
);
