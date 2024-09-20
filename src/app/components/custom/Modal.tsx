"use client";

import { useEffect } from "react";
import ReactDOM from "react-dom";

interface IModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	closeButton?: boolean;
}

const Modal: React.FC<IModalProps> = ({
	isOpen,
	onClose,
	children,
	closeButton,
}) => {
	const modalRoot = document.getElementById("modal-root");

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	if (!modalRoot || !isOpen) {
		return null;
	}

	return ReactDOM.createPortal(
		<div
			className={`
			fixed inset-0 flex justify-center items-center transition-colors
			${isOpen ? "visible bg-black/20 backdrop-blur-sm z-10" : "invisible"}`}
		>
			<div
				className={`min-w-[1009px] bg-white shadow-custom rounded-[10px] ${
					isOpen ? "slide-down" : "scale-125 opacity-0"
				}`}
			>
				{closeButton && (
					<button className="modal-close" onClick={onClose}>
						&times;
					</button>
				)}
				{children}
			</div>
		</div>,
		modalRoot
	);
};

export default Modal;
