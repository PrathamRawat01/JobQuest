export default function ResumeSearch() {
    return (
        <div className="resume-search">
            <h2 className="text-2xl font-bold">Search for Resumes</h2>
            {/* Add a form or search bar here */}
            <input
                type="text"
                className="border p-2 w-full"
                placeholder="Search by keywords, skills, etc."
            />
            {/* Display search results here */}
        </div>
    );
}
