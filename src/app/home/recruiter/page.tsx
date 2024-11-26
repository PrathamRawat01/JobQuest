"use client";
import ResumeSearch from "@/modules/recruiter/components/resume-search/resumeSearch";
import JobPosting from "@/modules/recruiter/components/job-posting/jobPosting";
import Messages from "@/modules/recruiter/components/message/message";
import Analytics from "@/modules/recruiter/components/analytics/analyitcs";
import Navbar from "@/modules/recruiter/components/navbar/navbar";

export default function RecruiterHomePage() {
    return (
        <div className="recruiter-home">
            <Navbar />  {/* Navbar for Recruiter */}
            <main className="container mx-auto">
                {/* Resume Search Section */}
                {/* <section className="py-10">
                    <ResumeSearch />
                </section> */}
            <div className="flex justify-center items-center">
                {/* Job Posting Section */}
                <section className="w-2/3 py-10 ">
                    <JobPosting />
                </section>

                <div className="flex flex-col gap-36 justify-between">
                {/* Messaging Section */}
                <section className="py-10">
                    <Messages />
                </section>

                {/* Analytics Section */}
                <section className="py-10">
                    <Analytics />
                </section>
                </div>
            </div>
            </main>
        </div>
    );
}
