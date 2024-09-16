"use client";

import { createContext, PropsWithChildren, useState } from "react";

type ThemeContext = {
	isConfirmModalOpen: boolean;
	handleOpenConfirmModal: () => void;
	handleCloseConfirmModal: () => void;
	isAddagentModalOpen: boolean;
	handleAddAgentModal: () => void;
	handleCloseAddAgentModal: () => void;
};

const CONTEXT_DEFAULT_VALUE: ThemeContext = {
	isConfirmModalOpen: false,
	handleOpenConfirmModal: () => {},
	handleCloseConfirmModal: () => {},

	isAddagentModalOpen: false,
	handleAddAgentModal: () => {},
	handleCloseAddAgentModal: () => {},
};

export const ModalContext = createContext<ThemeContext>(CONTEXT_DEFAULT_VALUE);

export const ModalProvider = ({ children }: PropsWithChildren) => {
	const [isAddagentModalOpen, setIsAddAgentModalOpen] = useState(false);
	const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);

	const handleAddAgentModal = () => {
		handleCloseConfirmModal();
		setIsAddAgentModalOpen(true);
	};
	const handleCloseAddAgentModal = () => setIsAddAgentModalOpen(false);

	const handleOpenConfirmModal = () => {
		handleCloseAddAgentModal();
		setConfirmModalOpen(true);
	};
	const handleCloseConfirmModal = () => {
		setConfirmModalOpen(false);
	};

	return (
		<ModalContext.Provider
			value={{
				// isModalOpen,
				// setIsModalOpen,
				// handleModal,
				isConfirmModalOpen,
				handleOpenConfirmModal,
				handleCloseConfirmModal,
				isAddagentModalOpen,
				handleAddAgentModal,
				handleCloseAddAgentModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};
