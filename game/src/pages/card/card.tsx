import photo from "../../assets/DargonCrystallStaff.png";

function Card() {
  return (
    <div className="p-10">
      <div className="w-3/12 p-8 rounded-2xl bg-[#141a31] shadow-xl">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img src={photo} alt="photo" className="w-3/12" />
          </div>
          <h3 className="text-2xl uppercase">neo fantasy</h3>
          <div className="w-32 my-4 mx-auto rounded-3xl text-sm bg-gray-700 flex align-center justify-between p-2">
            <div className="w-5 h-5 rounded-full bg-primary"></div>
            BNB Chain
          </div>
        </div>
        <div className="flex align-center justify-between text-center mt-10">
          <div>
            <p className="text-gray-300">Tokens for Participants</p>
            <h4 className="text-primary font-bold">50,000 ERT</h4>
          </div>
          <div>
            <p className="text-gray-300">Individual Hard Cap</p>
            <h4 className="font-bold">500</h4>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-300">current Progress(46.00%) </p>
          <div className="w-full relative bg-gray-700 h-3 rounded-lg mt-3 before:content-[''] before:w-3/4 before:h-3 before:rounded-lg before:absolute before:top-0 before:left-0 before:bg-primary"></div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="border-2 border-solid py-2 px-12 rounded-md border-primary text-primary"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
