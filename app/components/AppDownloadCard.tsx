import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import Button from "./Button";
const AppDownloadCard: React.FC = () => {
  return (
    <div className="flex-col gap-2 w-[20%] p-4 bg-gradient-to-br from-orange-100 to-pink-100 shadow-lg fixed top-[26%] right-[2%]">
      <div className="flex gap-1 items-center">
        <div className="p-2 rounded-2xl">logo</div>
        <h1 className="text-gray-900 font-semibold">Download the App</h1>
      </div>

      <div className="bg-orange-200 rounded-lg">
        <div className="relative p-4 bg-gradient-to-br rounded-lg from-orange-500 to-pink-300 clip-custom overflow-hidden">
          <div className=" text-white items-center text-sm flex gap-1 absolute top-[-25px] left-0">
            <FaStar size={16} />
            <h4>4.8 Reated</h4>
          </div>

          <h4 className="text-white text-center mt-6">Download App</h4>
          <div className="flex flex-col justify-center text-white items-center gap-2 mt-6">
            <div className="flex gap-2 items-center">
              <TbTruckDelivery
                className="text-green-500 bg-gradient-to-br from-green-300 to-gray-300 p-2 rounded-xl"
                size={40}
              />
              <h4 className="flex flex-col text-sm font-semibold">
                <span>Free</span> <span className="mt-[-5px]">Delivery</span>
              </h4>
            </div>
            <div className="flex gap-2 items-center">
              <BsTicketPerforatedFill
                className="text-red-500 bg-gradient-to-br from-red-500 to-gray-300 p-2 rounded-xl"
                size={40}
              />

              <h4 className="flex flex-col text-sm font-semibold">
                <span>Limited</span> <span className="mt-[-5px]">Time</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* QR Code and App Store Buttons */}
      <div className="flex gap-2 mt-4">
        <div className="relative w-full h-32 mt-2">
          <Image
            src="/qr-code.png" // Replace with the QR code path
            alt="QR Code"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-wrap flex-col gap-2">
          <Button buttonType="tertiary">
            <FaApple size={20} />
            <span>FaApple</span>
          </Button>
          <Button buttonType="tertiary">
            <FaGooglePlay size={20} />
            <span>Google Play</span>
          </Button>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-start mt-4 text-sm font-semibold text-gray-700">
        Download the App Now!
      </p>
    </div>
  );
};

export default AppDownloadCard;
