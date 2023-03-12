import React from "react";
import { NavLink } from "react-router-dom";

export default function Project() {
  return (
    <section>
      <div>
        <NavLink to="/">
          <button>back</button>
        </NavLink>
      </div>
    </section>
  );
}
