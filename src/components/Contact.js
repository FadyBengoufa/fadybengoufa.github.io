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
      <h3 className="absolute bottom-8 uppercase tracking-[20px] text-gray-500 md:text-2xl text-lg">
        Contact
      </h3>

      <div className="w-full flex flex-col space-y-10">
        <h4 className="md:text-3xl text-xl font-semibold text-center">
          I have got just what you need. <br />{" "}
          <span className="decoration-red-600 underline">Lets Talk.</span>
        </h4>
        <div className="md:space-y-10 space-y-2 text-black">
          <div className="flex items-center md:space-x-5 space-x-2 justify-center">
            <EnvelopeIcon className="md:w-7 w-5 md:h-7 h-5 text-red-800" />
            <p className="md:text-xl text-sm tracking-wide">fady.bengoufa@gmail.com</p>
          </div>
          <div className="flex items-center md:space-x-5 space-x-2 justify-center">
            <MapIcon className="md:w-7 w-5 md:h-7 h-5 text-red-800" />
            <p className="md:text-xl text-sm tracking-wide">Algeria, Blida</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 sm:w-auto w-full px-2 mx-auto"
        >
          {/* NAME / EMAIL */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
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
            className="bg-[#292929] py-4 px-6 rounded-md font-bold text-white md:text-lg text-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
