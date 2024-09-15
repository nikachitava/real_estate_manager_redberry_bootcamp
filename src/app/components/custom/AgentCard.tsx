import { IAgent } from "@/app/interface/IListing";
import React from "react";

import Image from "next/image";

const AgentCard: React.FC<IAgent> = ({
	id,
	name,
	surname,
	email,
	avatar,
	phone,
}) => {
	return (
		<div className="flex flex-col gap-4 bg-white rounded-lg border-[1px] border-[#DBDBDB] px-[20px] py-[24px] w-full">
			<div className="flex gap-[14px]">
				<Image
					src={avatar}
					alt="avatar"
					width={72}
					height={72}
					className="rounded-[100px] w-[72px] h-[72px]"
				/>
				<div>
					<p className="text-darktext">
						{name} {surname}
					</p>
					<span className="text-[#676E76]">აგენტი</span>
				</div>
			</div>
			<div>
				<div className="flex gap-[5px]">
					<Image
						src={"/images/icons/email.svg"}
						alt="email"
						width={16}
						height={13}
					/>
					<p className="text-secondarygrey text-sm">{email}</p>
				</div>
				<div className="flex gap-[5px]">
					<Image
						src={"/images/icons/phone.svg"}
						alt="email"
						width={15}
						height={15}
					/>
					<p className="text-secondarygrey text-sm">{phone}</p>
				</div>
			</div>
		</div>
	);
};

export default AgentCard;
