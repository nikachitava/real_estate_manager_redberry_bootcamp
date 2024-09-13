"use client";

import React, { useContext } from "react";
import Filter from "./components/custom/Filter";
import EstatesSection from "./sections/EstatesSection";
import AddAgentModal from "./components/custom/AddAgentModal";
import { ModalContext } from "./context/ModalProvider";

const page = () => {
	const { isModalOpen, handleModal } = useContext(ModalContext);

	return (
		<>
			<AddAgentModal open={isModalOpen} onClose={handleModal} />
			<main>
				<Filter />
				<EstatesSection />
			</main>
		</>
	);
};

export default page;
