// react-router-dom

import { Link } from "react-router-dom";

type Props = {
  to: string;
  btnText: string;
};

const LinkButton = ({ to, btnText }: Props) => {
  return (
    <Link to={to}>
      <button className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black">
        {btnText}
      </button>
    </Link>
  );
};

export default LinkButton;
