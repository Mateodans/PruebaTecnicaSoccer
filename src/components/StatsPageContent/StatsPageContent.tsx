import AttackZones from '../AttackZones/AttackZones';
import Stats from '../Stats/Stats';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

function StatsPageContent() {
	return (
		<>
			<ScoreBoard />
			<div className="grid grid-cols-2">
				<div className="">
					<Stats />
				</div>
				<div className="">
					<AttackZones />
				</div>
			</div>
		</>
	);
}

export default StatsPageContent;
