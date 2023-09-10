function AttackZones() {
	return (
		<div>
			<div className="flex justify-center mt-7">
				<span className="text-base mb-2 font-medium text-[#8D8D8D]">
					ATTACK ZONES
				</span>
			</div>
			<div className="flex justify-center">
				<div className="relative h-1/3 w-4/6">
					<img src="/Field.svg" className="h-full w-full" alt="" />
					<div className="absolute inset-x-0 bottom-0 ">
						<ul className="flex justify-between">
							<li className="w-full h-90">
								<svg className="w-full h-full" width="200" height="240" viewBox="0 0 150 240" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.333344 110L50 86L99.6667 110L0.333344 110Z" fill="#3D72FD" fill-opacity="0.8"/>
									<path d="M0.333313 110L50 110L99.6667 110L99.6666 240L0.33329 240L0.333313 110Z" fill="#3D72FD" fill-opacity="0.8"/>
								</svg>
								<span className="text-[#06060A] flex justify-center">45</span>
							</li>
							<li className="justify-center">
								<svg width="150" height="240" viewBox="0 0 150 240" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.333344 110L50 86L99.6667 110L0.333344 110Z" fill="#3D72FD" fill-opacity="0.8"/>
									<path d="M0.333313 110L50 110L99.6667 110L99.6666 240L0.33329 240L0.333313 110Z" fill="#3D72FD" fill-opacity="0.8"/>
								</svg>
								<span className="text-[#06060A] flex justify-center">45</span>
							</li>
							<li className="">
								<svg width="150" height="240" viewBox="0 0 150 240" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.333344 110L50 86L99.6667 110L0.333344 110Z" fill="#3D72FD" fill-opacity="0.8"/>
									<path d="M0.333313 110L50 110L99.6667 110L99.6666 240L0.33329 240L0.333313 110Z" fill="#3D72FD" fill-opacity="0.8"/>
								</svg>
								<span className="text-[#06060A]">64</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AttackZones;
