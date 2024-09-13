"use client";

import { createContext, PropsWithChildren, useState } from "react";

type ThemeContext = {
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleModal: () => void;
};

const CONTEXT_DEFAULT_VALUE: ThemeContext = {
	isModalOpen: false,
	setIsModalOpen: () => {},
	handleModal: () => {},
};

export const ModalContext = createContext<ThemeContext>(CONTEXT_DEFAULT_VALUE);

export const ModalProvider = ({ children }: PropsWithChildren) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModal = () => {
		setIsModalOpen((isModalOpen) => !isModalOpen);
	};

	return (
		<ModalContext.Provider
			value={{ isModalOpen, setIsModalOpen, handleModal }}
		>
			{children}
		</ModalContext.Provider>
	);
};
