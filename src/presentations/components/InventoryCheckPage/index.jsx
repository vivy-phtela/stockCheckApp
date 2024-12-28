import {
  Keypad,
  AddItem,
  ConfirmationModal,
  ChecklistItem,
  Header,
} from "./components";
import { useInventoryCheck } from "./hooks";

export const InventoryCheckPage = () => {
  const {
    items,
    newStocks,
    stockHistory,
    accordionState,
    currentItemId,
    currentUnit,
    dailyCheckStatus,
    showModal,
    modalMessage,
    handleAddItem,
    handleKeypadPress,
    handleDelete,
    handleConfirmClick,
    handleModalYes,
    handleModalNo,
    toggleAccordion,
    handleFocus,
    allStocksEntered,
    isStockComplete,
  } = useInventoryCheck();

  return (
    <div className="container-fluid p-5">
      <div className="d-flex justify-content-between align-items-center">
        <Header dailyCheckStatus={dailyCheckStatus} />
      </div>
      <AddItem addItem={handleAddItem} />
      <ul className="list-group">
        {items.map((item) => (
          <ChecklistItem
            key={item.id}
            item={{
              ...item,
              currentUnit: currentItemId === item.id ? currentUnit : null,
            }}
            newStock={newStocks[item.id] || {}}
            onFocus={handleFocus}
            onAccordionToggle={toggleAccordion}
            isComplete={isStockComplete(item)}
            isAccordionOpen={accordionState[item.id]}
            stockHistory={stockHistory[item.id]}
          />
        ))}
      </ul>
      <div className="d-flex justify-content-end" style={{ width: "70%" }}>
        <button
          className="btn btn-success mt-3 btn-lg"
          onClick={handleConfirmClick}
          disabled={!allStocksEntered()} // すべての欄が入力されている場合のみ有効に
        >
          確定
        </button>
      </div>
      <Keypad
        handleKeypadPress={handleKeypadPress}
        handleDelete={handleDelete}
      />

      <ConfirmationModal
        show={showModal}
        message={modalMessage}
        onConfirm={handleModalYes}
        onCancel={handleModalNo}
      />
    </div>
  );
};
