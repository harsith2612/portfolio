import Footer from "./Footer";
import Headers from "./Headers";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      Name: "",
      Email: "",
      Message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    if(data.Name!=undefined){
        alert(`Thank you ${data.Name} form is submitted`);
    }
    reset();
  };
  return (
    <div className="">
      <div className="">
        <Headers />
      </div>
      <div className="min-h-[1/2] my-24 flex justify-center ">
        <div className="lg:w-1/3 w-80 md:w-1/2 rounded-md shadow-2xl">
          <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center pb-10">
              <p className="text-2xl underline">Contact Form</p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex flex-col gap-2">
                <p className="">Full Name</p>
                <input
                  type="text"
                  {...register("Name", { required: true })}
                  className="px-2 py-1 rounded-xl border-2 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="">Email</p>
                <input
                  type="email"
                  {...register("Email", { required: true })}
                  className="px-2 py-1 rounded-xl border-2 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="">Message</p>
                <textarea
                  {...register("Message", { required: true })}
                  className="px-2 py-1 rounded-xl border-2 outline-none"
                ></textarea>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-center pt-10">
              <button
                disabled={!isValid}
                className="bg-sky-400 px-4 py-2 rounded-2xl font-semibold text-white text-sm disabled:opacity-45 disabled:cursor-not-allowed"
              >
                <input type="submit" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
