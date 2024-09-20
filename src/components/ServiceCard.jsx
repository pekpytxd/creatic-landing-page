export function ServiceCard({ serviceCard }) {
    const containerClassName = `${serviceCard.bg} aspect-square flex flex-col items-center`
    return (
        <div className={containerClassName}>
            <img src={serviceCard.image} className="mx-auto mb-4 mt-4" />
            <h1 className="text-defaultBlue uppercase text-xl text-center">{serviceCard.title}</h1>
            <span className="text-white text-xs block mt-2 break-words text-center whitespace-normal w-32 mb-8">{serviceCard.description}</span>
        </div>
    );
}
