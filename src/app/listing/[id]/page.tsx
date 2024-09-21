"use client";

import { IListing } from "@/app/interface/IListing";
import { makeRequest } from "@/app/utils/axios";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import AgentCard from "@/app/components/custom/AgentCard";
import CustomButtom from "@/app/components/custom/CustomButtom";
import { useRouter } from "next/navigation";
import { ModalContext } from "@/app/context/ModalProvider";
import CarouselContainer from "@/app/components/custom/CarouselContainer";

const page = ({ params }: { params: { id: string } }) => {
	const [listing, setListing] = useState<IListing>();

	const fetchListing = async () => {
		try {
			const response = await makeRequest.get(
				`/real-estates/${params.id}`
			);
			setListing(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchListing();
	}, []);

	let formattedDate;
	if (listing?.city) {
		const date = new Date(listing.created_at);
		formattedDate = `${(date.getMonth() + 1)
			.toString()
			.padStart(2, "0")}/${date
			.getDate()
			.toString()
			.padStart(2, "0")}/${date.getFullYear()}`;
	}

	const router = useRouter();

	const goBack = () => {
		router.back();
	};

	const { handleOpenConfirmModal } = useContext(ModalContext);

	return (
		<div className="container">
			<svg
				onClick={goBack}
				className="cursor-pointer"
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M16.9428 26.2765C16.4221 26.7972 15.5779 26.7972 15.0572 26.2765L5.72385 16.9431C5.20315 16.4224 5.20315 15.5782 5.72385 15.0575L15.0572 5.72418C15.5779 5.20349 16.4221 5.20349 16.9428 5.72418C17.4635 6.24488 17.4635 7.0891 16.9428 7.6098L9.88561 14.667H25.3333C26.0697 14.667 26.6667 15.2639 26.6667 16.0003C26.6667 16.7367 26.0697 17.3337 25.3333 17.3337H9.88561L16.9428 24.3909C17.4635 24.9115 17.4635 25.7558 16.9428 26.2765Z"
					fill="#021526"
				/>
			</svg>
			{listing && (
				<div className="mt-[29px] flex gap-[68px]">
					<div className="flex flex-col items-end gap-[11px]">
						<Image
							src={listing.image}
							alt="image"
							width={839}
							height={670}
							className="w-[839px] h-[670px]"
						/>
						<p className="text-secondarygrey">
							გამოქვეყნების თარიღი: {formattedDate}
						</p>
					</div>
					<div className="flex-1 flex flex-col justify-between">
						<div>
							<h1 className="text-darktext text-5xl font-bold mb-6">
								{listing.price} ₾
							</h1>
							<div className="flex flex-col gap-4">
								<div className="flex items-center gap-1">
									<Image
										src={"/images/icons/location.svg"}
										alt="location"
										width={22}
										height={22}
									/>
									<p className="text-secondarygrey text-2xl font-normal">
										{listing.address}
									</p>
								</div>
								<div className="flex items-center gap-1">
									<Image
										src={"/images/icons/area.svg"}
										alt="area"
										width={22}
										height={22}
									/>
									<p className="text-secondarygrey text-2xl font-normal">
										ფართი {listing.area} მ&#178;
									</p>
								</div>
								<div className="flex items-center gap-1">
									<Image
										src={"/images/icons/bed.svg"}
										alt="area"
										width={22}
										height={22}
									/>
									<p className="text-secondarygrey text-2xl font-normal">
										საძინებელი {listing.bedrooms}
									</p>
								</div>
								<div className="flex items-center gap-1">
									<Image
										src={"/images/icons/post.svg"}
										alt="area"
										width={22}
										height={22}
									/>
									<p className="text-secondarygrey text-2xl font-normal">
										საფოსტო ინდექსი {listing.zip_code}
									</p>
								</div>
							</div>
							<div>
								<p className="text-secondarygrey mt-10 mb-[50px]">
									{listing.description}
								</p>
							</div>
							<AgentCard
								id={listing.agent.id}
								name={listing.agent.name}
								surname={listing.agent.surname}
								email={listing.agent.email}
								avatar={listing.agent.avatar}
								phone={listing.agent.phone}
							/>
						</div>
						<div className="mt-[20px]">
							<CustomButtom
								title={"ლისტინგის წაშლა"}
								fill={false}
								otherStyles="!text-[#676E76] !border-[#676E76] !rounded-[8px]"
								onClick={handleOpenConfirmModal}
							/>
						</div>
					</div>
				</div>
			)}
			<div>
				<CarouselContainer />
			</div>
		</div>
	);
};

export default page;
