import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold font-display text-primary glow-green">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">عذراً! الصفحة غير موجودة</p>
        <Link to="/" className="cyber-btn inline-block">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
