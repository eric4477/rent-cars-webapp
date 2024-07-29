import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-page h-screen flex flex-col items-center justify-center text-center">
      <div className="not-found-img w-[80vw] max-w-[500px]">
        <img
          className="w-full h-full object-contain"
          src="/landing-page/404-not-found.png"
          alt="not found"
        />
      </div>
      <Link to="/" className="text-blue-600 hover:underline">
        Go to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
