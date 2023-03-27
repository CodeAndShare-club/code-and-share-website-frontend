import * as React from "react";

function Facebook(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 12.06C22 6.505 17.523 2 12 2S2 6.504 2 12.06c0 5.023 3.656 9.185 8.437 9.94v-7.03H7.9v-2.91h2.538V9.844c0-2.521 1.493-3.915 3.778-3.915 1.093 0 2.238.197 2.238.197v2.476h-1.262c-1.242 0-1.628.776-1.628 1.572v1.887h2.773l-.443 2.908h-2.33V22C18.344 21.245 22 17.083 22 12.06z"
        fill="#FFFFEF"
      />
    </svg>
  );
}

export default Facebook;