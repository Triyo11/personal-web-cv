import { useRef } from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const nama = useRef("")
  const email = useRef("")

  const handleSubmit = () => {
    alert(`Nama ${nama.current.value} dengan email ${email.current.value}`)
  }

  return (  
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[80vh]">
        <form className="flex flex-col items-center gap-4 border-4" onSubmit={handleSubmit}>
          <input className="p-2 border-2 border-gray-500 rounded-xl focus:outline-none focus:border-blue-500" type="text" required placeholder="nama" ref={nama}/>
          <input className="p-2 border-2 border-gray-500 rounded-xl focus:outline-none focus:border-blue-500" type="email" required placeholder="email" ref={email}/>
          <input className="bg-green-500 text-white p-2 max-w-max rounded-xl" type="submit" value={"submit"} />
        </form>
      </div>
    </>
  );
}

export default Contact;