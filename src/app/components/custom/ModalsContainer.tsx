"use client";

import { ModalContext } from "@/app/context/ModalProvider";
import { useContext } from "react";
import Modal from "./Modal";
import AddAgentModal from "./AddAgentModal";
import ModalConfirmation from "./ModalConfirmation";
import { makeRequest } from "@/app/utils/axios";
import { useParams, useRouter } from "next/navigation";

const ModalsContainer = () => {
	const {
		isAddagentModalOpen,
		handleCloseAddAgentModal,
		isConfirmModalOpen,
		handleCloseConfirmModal,
	} = useContext(ModalContext);

	const params = useParams();
	const currentListingID = Number(params.id);

	const router = useRouter();

	const deleteEstate = async (id: number) => {
		try {
			await makeRequest.delete(`/real-estates/${id}`);
			handleCloseConfirmModal();
			router.push("/");
		} catch (error) {
			console.log(error);
		}
	};

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
				closeButton={false}
			>
				<ModalConfirmation
					onClose={handleCloseConfirmModal}
					onSubmit={() => {
						deleteEstate(currentListingID);
					}}
				/>
			</Modal>
		</>
	);
};

export default ModalsContainer;
