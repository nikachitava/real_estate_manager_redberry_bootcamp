"use client";

import React, { useContext } from "react";
import Filter from "./components/custom/Filter";
import EstatesSection from "./sections/EstatesSection";
import Modal from "./components/custom/Modal";
import { ModalContext } from "./context/ModalProvider";
import AddAgentModal from "./components/custom/AddAgentModal";
import ModalConfirmation from "./components/custom/ModalConfirmation";

const page = () => {
	const {
		isAddagentModalOpen,
		handleCloseAddAgentModal,
		isConfirmModalOpen,
		handleCloseConfirmModal,
	} = useContext(ModalContext);

	return (
		<>
			<Modal
				isOpen={isAddagentModalOpen}
				onClose={handleCloseAddAgentModal}
				closeButton={false}
			>
				<AddAgentModal onClose={handleCloseAddAgentModal} />
			</Modal>
			<Modal
				isOpen={isConfirmModalOpen}
				onClose={handleCloseConfirmModal}
				closeButton
			>
				<ModalConfirmation />
			</Modal>
			<main>
				<Filter />
				<EstatesSection />
			</main>
		</>
	);
};

export default page;
