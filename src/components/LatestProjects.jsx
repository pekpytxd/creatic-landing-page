import artImage from '../assets/images/art.png';
import womanArtImage from '../assets/images/woman-with-highlights.png';
import cloudPiecesImage from '../assets/images/cloud-with-pieces.png';

export default function LatestProjects() {
    return (
        <div className="flex flex-col items-center bg-black h-fit py-16">
            <h1 className="text-white uppercase text-3xl w-80 text-center">
                ENJOY OUR <span className="text-defaultBlue">LATEST</span> PROJECTS
            </h1>
            <div className="flex inline items-center py-8">
                <div className="border-t text-white w-16"></div>
                <span className="text-defaultBlue uppercase px-2">Our Work</span>
                <div className="border-t text-white w-16"></div>
            </div>
            <div className="flex justify-between items-center px-0 gap-4 w-full">
                <img src={artImage} className=""/>
                <img src={womanArtImage} className=""/>
                <img src={cloudPiecesImage} className=""/>
            </div>
            <div className="py-8 flex items-center gap-3">
                <div className="border-4"></div>
                <div className="border-4"></div>
                <div className="border-4"></div>
                <div className="p-1 border-2 border-defaultBlue">
                    <div className="border-4"></div>
                </div>
            </div>
        </div>)
}