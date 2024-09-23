export function Contact() {
    return (
        <div
            id="contact"
            className="bg-colors-button rounded-lg flex flex-col lg:flex-row items-center justify-between etab-container  mt-32 mx-11 py-5 lg:mx-56 sm:px-6 gap-10">
            <div className="w-full lg:w-3/4 p-10 text-colors-text-plain">
                <h1 className="text-4xl lg:text-6xl mb-11 font-poppins font-medium">Get In Contact With Us</h1>
                <p className="mt-4 mr-20  text-base lg:text-lg">
                   Connect with us today to discover your dream job or hire the top talent that drives your business forward. Whether you're looking for the next step in your career or the perfect candidate to grow your team, we're here to help you succeed!                </p>
            </div>
            <div className="W-full lg:w-1/4  self-start lg:self-center  hover:scale-110 transition duration-300 ml-10 pl-7">
                <a href="/contact-us" className="bg-colors-surface text-colors-button px-6 py-3 rounded-md">
                   Contact Us →
                </a>
            </div>
        </div>
    );
}
