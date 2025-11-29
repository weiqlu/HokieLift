interface LandingPageProps {
    setIsAuthenticated: (auth: boolean) => void; 
}

function LandingPage({ setIsAuthenticated }: LandingPageProps) {
  return <div> HokieLift </div>;
}

export default LandingPage;
