import { PhoneIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    window.location.href = `mailto:fady.bengoufa@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`;
  };

  return (
    <div className="relative h-screen flex flex-col overflow-hidden max-w-full md:px-10 px-2 text-left items-center justify-evenly mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl font-semibold text-center">
          I have got just what you need. <br />{" "}
          <span className="decoration-red-600 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-10 text-black">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="w-7 h-7 animate-pulse" />
            <p className="text-xl">+(213) 5 40247342</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="w-7 h-7 animate-pulse" />
            <p className="text-xl">fady.bengoufa@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="w-7 h-7 animate-pulse" />
            <p className="text-xl">Algeria, Blida</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          {/* NAME / EMAIL */}
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              className="contactInput"
              type="text"
              {...register("name")}
            />
            <input
              placeholder="Email"
              className="contactInput"
              type="email"
              {...register("email")}
            />
          </div>
          {/* SUBJECT */}
          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
            {...register("subject")}
          />
          {/* MESSAGE */}
          <textarea
            className="contactInput"
            placeholder="Message"
            {...register("message")}
          ></textarea>
          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="bg-[#292929] py-4 px-6 rounded-md font-bold text-white text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
