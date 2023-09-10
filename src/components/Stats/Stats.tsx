function Stats() {
	return (
		<div className="grid grid-rows-2 px-10 mt-10">
			<div className="mb-1 flex justify-between">
				<span className="text-base font-medium dark:text-white">55</span>
				<span className="text-base font-medium text-[#8D8D8D]">
					TOTAL SHOOTS
				</span>
				<span className="text-sm font-medium text-blue-700 dark:text-white justify-items-end">
					45
				</span>
			</div>
			<div className="w-full bg-[#FF64B199] h-2.5 text-[#FF64B199]">
				<div className="bg-[#3D72FD] h-2.5 " style={{ width: '55%' }}></div>
			</div>
		</div>
	);
}

export default Stats;
