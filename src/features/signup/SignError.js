import { useSelector } from "react-redux";

export default function SingError() {
  const error = useSelector((state) => state.session.error);
  return <p className="error">{error}</p>;
}
