/* eslint-disable react/no-unescaped-entities */

import Service from "./Service";

const Services = () => {
    return (
        <>
            <div className="text-center lg:w-2/4 mx-auto pt-7">
                <p className="text-primary-myPrimaryColor font-bold text-lg">Service</p>
                <h1 className="text-4xl font-bold dark:text-white"> Our Service Area </h1>
                <p className="pt-6 text-xl dark:text-white"> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 py-14">
                <Service></Service>
                <Service></Service>
                <Service></Service>
                <Service></Service>
                <Service></Service>
                <Service></Service>
            </div>
            <div className="pb-14 text-center">
                <a className="btn border-2 hover:border-primary-myPrimaryColor border-primary-myPrimaryColor text-primary-myPrimaryColor hover:bg-primary-myPrimaryColor hover:text-white capitalize font-semibold text-base tracking-[2px]">More Services </a>
            </div>
        </>
    );
};

export default Services;