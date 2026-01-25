import { useNavigate } from "react-router-dom";

const ReloadLink = ({ to, children, ...props }) => {
  // const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = to; // FULL PAGE RELOAD
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default ReloadLink;
