export default function LocationBadge() {
    return (
      <div className="flex items-center bg-gray-900 text-white rounded-r-full p-4 w-fit fixed bottom-5 left-5 z-50 shadow-lg">
        <div className="mr-4 text-sm leading-tight">
          Located<br />in the<br />Netherlands
        </div>
        <div className="bg-gray-400 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 0c2.21 0 4 4.03 4 9s-1.79 9-4 9-4-4.03-4-9 1.79-9 4-9zm0 0c3.87 0 7 4.03 7 9s-3.13 9-7 9-7-4.03-7-9 3.13-9 7-9z" />
          </svg>
        </div>
      </div>
    );
  }
  