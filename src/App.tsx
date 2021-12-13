import { FC, useState } from "react";
import React from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { DashBoard } from "./components/Dashboard";
import Modal from "react-modal";

Modal.setAppElement('#root');

export const App: FC = () => {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => setIsNewTransactionModalOpen(true);
  const handleCloseNewTransactionModal = () => setIsNewTransactionModalOpen(false);


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <DashBoard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>
          cadastrar transacao
        </h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

