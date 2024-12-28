// ヘッダーコンポーネント
import PropTypes from "prop-types";
import { LogoutButton } from "./components";

export const Header = ({ dailyCheckStatus }) => (
  <div className="d-flex align-items-center">
    <h1 className="fw-bold">Daily棚卸</h1>
    <span className="fw-bold ms-3">{dailyCheckStatus}</span>
    <LogoutButton />
  </div>
);

Header.propTypes = {
  dailyCheckStatus: PropTypes.string.isRequired, // 必須のstring型
};