import {companyStats} from "../data/company-stats-data.js";

export default function CompanyStats() {
    return (
        <div className="h-80 bg-black bg-blue-to-transparent-80">
            <div className="grid grid-cols-4 gap-10 py-10">
                {companyStats.map((stats, index) => (
                    <div className="flex flex-col justify-items-center items-center text-center" key={index}>
                        <img className="mb-2 h-24 w-24" src={stats.image}/>
                        <h1 className="text-white text-6xl">{stats.number}</h1>
                        <span className="text-defaultBlue text-xl">{stats.entity}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}