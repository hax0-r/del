"use client"
import Image from "next/image"
import school1 from "../../../public/Assets/Home/school1.jpg"
import logo from '../../../public/Assets/logo.jpg'
import Link from "next/link"
import Label from "../Components/Label"
import Input from "../Components/Input"

const Form = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "YOUR_ACCESS_KEY_IS_WRITTEN_HERE");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

    return (
        <div
            style={{ background: `url(${school1.src}) center/cover fixed` }}
            className="bgContactSection  w-full min-h-screen bg-no-repeat flex p-2 items-center justify-center">

            <form className="mx-auto max-w-2xl w-full p-5 glass rounded-2xl">
                <Link href="/">
                    <Image src={logo} alt="logo" className='w-20 mx-auto' />
                </Link>
                <h2 className="text-white text-center mt-6 font-semibold md:text-2xl text-xl">Download Form</h2>

                <Label name="name" />
                <Input type="text" name="name" />

                <Label name="email" />
                <Input type="email" name="email" />

                <Label name="phone" />
                <Input type="number" name="phone" />

                <button className="hover:bg-[#0056b3] w-full mt-6 font-medium px-10 py-4 cursor-pointer transition-all duration-500 bg-[#007bff] text-white   rounded-lg ">Download and Submit</button>
            </form>

        </div>
    )
}

export default Form