// 項目ごとの在庫を入力するコンポーネント
import PropTypes from "prop-types";
import { StockHistory } from "./components";

export const ChecklistItem = ({
  item,
  newStock,
  onFocus,
  onAccordionToggle,
  isComplete,
  isAccordionOpen,
  stockHistory,
}) => {
  return (
    <li
      className={`list-group-item ${isComplete ? "bg-info text-white" : ""}`}
      style={{ width: "70%", margin: "0 auto 0 0" }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className="flex-grow-1">{item.item}</div>
        <div className="d-flex flex-column align-items-center me-3">
          <input
            type="number"
            className={`form-control ${
              item.currentUnit === "unit1"
                ? "border-primary"
                : "border-secondary"
            }`}
            style={{ width: "100px", textAlign: "center" }}
            value={newStock.unit1 || ""}
            onFocus={() => onFocus(item.id, "unit1")}
            readOnly
          />
          <span className="mt-1">{item.unit1}</span>
        </div>
        {item.unit2 && (
          <div className="d-flex flex-column align-items-center me-3">
            <input
              type="number"
              className={`form-control ${
                item.currentUnit === "unit2"
                  ? "border-primary"
                  : "border-secondary"
              }`}
              style={{ width: "100px", textAlign: "center" }}
              value={newStock.unit2 || ""}
              onFocus={() => onFocus(item.id, "unit2")}
              readOnly
            />
            <span className="mt-1">{item.unit2}</span>
          </div>
        )}
        <button
          className="btn btn-secondary"
          onClick={() => onAccordionToggle(item.id)}
        >
          {isAccordionOpen ? "在庫履歴を非表示" : "在庫履歴を表示"}
        </button>
      </div>
      {isAccordionOpen && stockHistory && (
        <StockHistory item={item} stockHistory={stockHistory} />
      )}
    </li>
  );
};

ChecklistItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired,
    unit1: PropTypes.string.isRequired,
    unit2: PropTypes.string,
    currentUnit: PropTypes.string,
  }).isRequired,
  newStock: PropTypes.shape({
    unit1: PropTypes.number,
    unit2: PropTypes.number,
  }).isRequired,
  onFocus: PropTypes.func.isRequired,
  onAccordionToggle: PropTypes.func.isRequired,
  isComplete: PropTypes.bool,
  isAccordionOpen: PropTypes.bool,
  stockHistory: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
    })
  ),
};