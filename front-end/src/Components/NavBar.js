import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div class="bg-gray">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://cdn.cp.adobe.io/content/2/dcx/dad2e7be-f877-402f-a228-f86341c235ee/rendition/preview.jpg/version/2/format/jpg/dimension/width/size/1200"
                  alt="logo"
                />
              </Link>
          </div>
          <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link to="/activities">
              <button
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Favorite Activities
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
